import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Save, Loader2, Plus, Trash2, GripVertical } from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface CabangItem {
  wilayah: string;
  ketua: string;
}

interface SortableRowProps {
  id: string;
  index: number;
  item: CabangItem;
  onChange: (index: number, field: keyof CabangItem, value: string) => void;
  onRemove: (index: number) => void;
}

function SortableRow({ id, index, item, onChange, onRemove }: SortableRowProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <tr ref={setNodeRef} style={style} className="border-b transition-colors hover:bg-muted/50">
      <td className="p-2 text-center">
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing p-1 rounded hover:bg-muted text-muted-foreground"
          type="button"
        >
          <GripVertical className="w-4 h-4" />
        </button>
      </td>
      <td className="p-2 text-center text-muted-foreground font-mono text-xs">
        {index + 1}
      </td>
      <td className="p-2">
        <Input
          value={item.wilayah}
          onChange={(e) => onChange(index, "wilayah", e.target.value)}
          placeholder="Nama wilayah..."
          className="bg-background border-border h-9"
          maxLength={100}
        />
      </td>
      <td className="p-2">
        <Input
          value={item.ketua}
          onChange={(e) => onChange(index, "ketua", e.target.value)}
          placeholder="Nama ketua cabang..."
          className="bg-background border-border h-9"
          maxLength={100}
        />
      </td>
      <td className="p-2 text-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onRemove(index)}
          className="h-8 w-8 text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </td>
    </tr>
  );
}

export function CabangEditor() {
  const [items, setItems] = useState<CabangItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  // Generate stable IDs for sortable
  const [ids, setIds] = useState<string[]>([]);
  let nextId = 0;
  const generateId = () => `cabang-${Date.now()}-${nextId++}`;

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

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
        const loaded = data.value as unknown as CabangItem[];
        setItems(loaded);
        setIds(loaded.map((_, i) => `cabang-init-${i}`));
      }
      setLoading(false);
    };
    load();
  }, []);

  const handleAdd = () => {
    setItems([...items, { wilayah: "", ketua: "" }]);
    setIds([...ids, generateId()]);
  };

  const handleRemove = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    setIds(ids.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: keyof CabangItem, value: string) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = ids.indexOf(active.id as string);
      const newIndex = ids.indexOf(over.id as string);
      setItems(arrayMove(items, oldIndex, newIndex));
      setIds(arrayMove(ids, oldIndex, newIndex));
    }
  };

  const handleSave = async () => {
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
      <p className="text-xs text-muted-foreground">
        Seret ikon <GripVertical className="w-3 h-3 inline" /> untuk mengubah urutan cabang.
      </p>
      <div className="rounded-md border border-border overflow-hidden">
        <table className="w-full caption-bottom text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="h-10 w-10 px-2 text-center text-muted-foreground font-medium" />
              <th className="h-10 w-10 px-2 text-center text-muted-foreground font-medium">#</th>
              <th className="h-10 px-2 text-left text-muted-foreground font-medium">Wilayah</th>
              <th className="h-10 px-2 text-left text-muted-foreground font-medium">Ketua Cabang</th>
              <th className="h-10 w-14 px-2 text-center text-muted-foreground font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center text-muted-foreground py-8">
                  Belum ada data cabang. Klik "Tambah Cabang" untuk memulai.
                </td>
              </tr>
            ) : (
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={ids} strategy={verticalListSortingStrategy}>
                  {items.map((item, index) => (
                    <SortableRow
                      key={ids[index]}
                      id={ids[index]}
                      index={index}
                      item={item}
                      onChange={handleChange}
                      onRemove={handleRemove}
                    />
                  ))}
                </SortableContext>
              </DndContext>
            )}
          </tbody>
        </table>
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
