import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface StorageImage {
  name: string;
  url: string;
}

export function useStorageImages(folder: string) {
  const [images, setImages] = useState<StorageImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase.storage
        .from("site-images")
        .list(folder, { limit: 100, sortBy: { column: "created_at", order: "desc" } });

      if (!error && data) {
        const items = data
          .filter((f) => f.name !== ".emptyFolderPlaceholder")
          .map((f) => {
            const { data: urlData } = supabase.storage
              .from("site-images")
              .getPublicUrl(`${folder}/${f.name}`);
            return { name: f.name, url: urlData.publicUrl };
          });
        setImages(items);
      }
      setLoading(false);
    };
    load();
  }, [folder]);

  return { images, loading };
}
