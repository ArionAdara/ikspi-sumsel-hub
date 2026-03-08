import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Upload, X, Loader2, ImageIcon, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploaderProps {
  folder: string;
  label?: string;
  onUploaded?: (url: string) => void;
}

export function ImageUploader({ folder, label = "Upload Gambar", onUploaded }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const { toast } = useToast();

  const uploadFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast({ title: "Hanya file gambar yang diperbolehkan", variant: "destructive" });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: "Ukuran file maksimal 5MB", variant: "destructive" });
      return;
    }

    setUploading(true);
    const ext = file.name.split(".").pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error } = await supabase.storage
      .from("site-images")
      .upload(fileName, file, { upsert: true });

    if (error) {
      toast({ title: "Gagal mengupload", description: error.message, variant: "destructive" });
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("site-images")
      .getPublicUrl(fileName);

    setPreview(urlData.publicUrl);
    onUploaded?.(urlData.publicUrl);
    toast({ title: "Gambar berhasil diupload" });
    setUploading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) uploadFile(file);
  }, [folder]);

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-foreground">{label}</p>

      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={cn(
          "border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer",
          dragOver ? "border-accent bg-accent/10" : "border-border hover:border-muted-foreground",
          uploading && "pointer-events-none opacity-60"
        )}
        onClick={() => document.getElementById(`file-${folder}`)?.click()}
      >
        <input
          id={`file-${folder}`}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {uploading ? (
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <Loader2 className="w-8 h-8 animate-spin" />
            <span className="text-sm">Mengupload...</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <Upload className="w-8 h-8" />
            <span className="text-sm">Klik atau seret gambar ke sini</span>
            <span className="text-xs">Maks. 5MB (JPG, PNG, WebP)</span>
          </div>
        )}
      </div>

      {preview && (
        <div className="relative inline-block">
          <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-md border border-border" />
          <button
            onClick={() => setPreview(null)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
}

interface ImageGalleryManagerProps {
  folder: string;
}

export function ImageGalleryManager({ folder }: ImageGalleryManagerProps) {
  const [images, setImages] = useState<{ name: string; url: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const { toast } = useToast();

  const loadImages = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase.storage
      .from("site-images")
      .list(folder, { limit: 100, sortBy: { column: "created_at", order: "desc" } });

    if (error) {
      toast({ title: "Gagal memuat gambar", variant: "destructive" });
      setLoading(false);
      return;
    }

    const items = (data || [])
      .filter((f) => f.name !== ".emptyFolderPlaceholder")
      .map((f) => {
        const { data: urlData } = supabase.storage
          .from("site-images")
          .getPublicUrl(`${folder}/${f.name}`);
        return { name: f.name, url: urlData.publicUrl };
      });

    setImages(items);
    setLoading(false);
  }, [folder]);

  useState(() => { loadImages(); });

  const handleDelete = async (name: string) => {
    setDeleting(name);
    const { error } = await supabase.storage
      .from("site-images")
      .remove([`${folder}/${name}`]);

    if (error) {
      toast({ title: "Gagal menghapus", variant: "destructive" });
    } else {
      setImages((prev) => prev.filter((img) => img.name !== name));
      toast({ title: "Gambar dihapus" });
    }
    setDeleting(null);
  };

  return (
    <div className="space-y-4">
      <ImageUploader
        folder={folder}
        label="Tambah Gambar Baru"
        onUploaded={() => loadImages()}
      />

      <div>
        <p className="text-sm font-medium text-foreground mb-3">
          Gambar yang sudah diupload ({images.length})
        </p>

        {loading ? (
          <div className="flex items-center gap-2 text-muted-foreground py-4">
            <Loader2 className="w-4 h-4 animate-spin" />
            Memuat gambar...
          </div>
        ) : images.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-8 text-muted-foreground">
            <ImageIcon className="w-10 h-10" />
            <p className="text-sm">Belum ada gambar yang diupload</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {images.map((img) => (
              <div key={img.name} className="group relative rounded-md overflow-hidden border border-border">
                <img
                  src={img.url}
                  alt={img.name}
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent/20"
                    onClick={() => {
                      navigator.clipboard.writeText(img.url);
                      setCopied(img.name);
                      toast({ title: "URL disalin ke clipboard" });
                      setTimeout(() => setCopied(null), 2000);
                    }}
                  >
                    {copied === img.name ? (
                      <Check className="w-4 h-4 mr-1" />
                    ) : (
                      <Copy className="w-4 h-4 mr-1" />
                    )}
                    Copy URL
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(img.name)}
                    disabled={deleting === img.name}
                  >
                    {deleting === img.name ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <X className="w-4 h-4 mr-1" />
                    )}
                    Hapus
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
