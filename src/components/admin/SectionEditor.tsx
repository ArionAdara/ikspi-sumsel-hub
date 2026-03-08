import { ContentEditor } from "./ContentEditor";
import { ImageGalleryManager } from "./ImageUploader";
import { CabangEditor } from "./CabangEditor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface SectionField {
  section: string;
  key: string;
  label: string;
  type?: "text" | "textarea" | "json" | "gallery" | "cabang";
}

interface SectionEditorProps {
  title: string;
  description: string;
  fields: SectionField[];
}

export function SectionEditor({ title, description, fields }: SectionEditorProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-foreground mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6">{description}</p>

      <div className="space-y-4">
        {fields.map((field) => (
          <Card key={`${field.section}-${field.key}`} className="border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-heading">{field.label}</CardTitle>
            </CardHeader>
            <CardContent>
              {field.type === "cabang" ? (
                <CabangEditor />
              ) : field.type === "gallery" ? (
                <ImageGalleryManager folder={field.key} />
              ) : (
                <ContentEditor
                  section={field.section}
                  contentKey={field.key}
                  label=""
                  type={field.type}
                />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
