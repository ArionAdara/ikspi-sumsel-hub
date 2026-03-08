import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Save, Loader2 } from "lucide-react";

interface ContentEditorProps {
  section: string;
  contentKey: string;
  label: string;
  type?: "text" | "textarea" | "json";
}

export function ContentEditor({ section, contentKey, label, type = "textarea" }: ContentEditorProps) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data } = await supabase
        .from("site_content")
        .select("value")
        .eq("section", section)
        .eq("key", contentKey)
        .single();

      if (data) {
        setValue(typeof data.value === "string" ? data.value : JSON.stringify(data.value, null, 2));
      }
      setLoading(false);
    };
    load();
  }, [section, contentKey]);

  const handleSave = async () => {
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();

    let jsonValue: any;
    if (type === "json") {
      try {
        jsonValue = JSON.parse(value);
      } catch {
        toast({ title: "Format JSON tidak valid", variant: "destructive" });
        setSaving(false);
        return;
      }
    } else {
      jsonValue = value;
    }

    const { error } = await supabase
      .from("site_content")
      .upsert(
        { section, key: contentKey, value: jsonValue, updated_by: user?.id },
        { onConflict: "section,key" }
      );

    if (error) {
      toast({ title: "Gagal menyimpan", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Berhasil disimpan" });
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground py-4">
        <Loader2 className="w-4 h-4 animate-spin" />
        Memuat...
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <Label className="text-foreground font-medium">{label}</Label>
      {type === "text" ? (
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-muted border-border"
        />
      ) : (
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={type === "json" ? 12 : 6}
          className="bg-muted border-border font-mono text-sm"
        />
      )}
      <Button onClick={handleSave} disabled={saving} size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
        {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
        Simpan
      </Button>
    </div>
  );
}
