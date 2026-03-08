import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Save, Loader2, Plus, Trash2, GripVertical } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CabangItem {
  wilayah: string;
  ketua: string;
}

export function CabangEditor() {
  const [items, setItems] = useState<CabangItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data } = await supabase
        .from("site_content")
        .select("value")
        .eq("section", "cabang")
        .eq("key", "daftar")
        .single();

      if (data?.value && Array.isArray(data.value)) {
        setItems(data.value as unknown as CabangItem[]);
      }
      setLoading(false);
    };
    load();
  }, []);

  const handleAdd = () => {
    setItems([...items, { wilayah: "", ketua: "" }]);
  };

  const handleRemove = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: keyof CabangItem, value: string) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  const handleSave = async () => {
    // Validate
    for (let i = 0; i < items.length; i++) {
      if (!items[i].wilayah.trim() || !items[i].ketua.trim()) {
        toast({
          title: "Data tidak lengkap",
          description: `Baris ke-${i + 1}: Wilayah dan Ketua harus diisi.`,
          variant: "destructive",
        });
        return;
      }
    }

    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("site_content")
      .upsert(
        { section: "cabang", key: "daftar", value: items as unknown as any, updated_by: user?.id },
        { onConflict: "section,key" }
      );

    if (error) {
      toast({ title: "Gagal menyimpan", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Data cabang berhasil disimpan" });
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground py-4">
        <Loader2 className="w-4 h-4 animate-spin" />
        Memuat data cabang...
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-12 text-center">#</TableHead>
              <TableHead>Wilayah</TableHead>
              <TableHead>Ketua Cabang</TableHead>
              <TableHead className="w-16 text-center">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                  Belum ada data cabang. Klik "Tambah Cabang" untuk memulai.
                </TableCell>
              </TableRow>
            ) : (
              items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center text-muted-foreground font-mono text-xs">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    <Input
                      value={item.wilayah}
                      onChange={(e) => handleChange(index, "wilayah", e.target.value)}
                      placeholder="Nama wilayah..."
                      className="bg-background border-border h-9"
                      maxLength={100}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={item.ketua}
                      onChange={(e) => handleChange(index, "ketua", e.target.value)}
                      placeholder="Nama ketua cabang..."
                      className="bg-background border-border h-9"
                      maxLength={100}
                    />
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemove(index)}
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" onClick={handleAdd} className="border-border">
          <Plus className="w-4 h-4 mr-2" />
          Tambah Cabang
        </Button>
        <Button onClick={handleSave} disabled={saving} size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
          {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
          Simpan
        </Button>
        <span className="text-xs text-muted-foreground">{items.length} cabang</span>
      </div>
    </div>
  );
}
