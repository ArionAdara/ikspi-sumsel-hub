import { ContentEditor } from "./ContentEditor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SectionEditorProps {
  title: string;
  description: string;
  fields: {
    section: string;
    key: string;
    label: string;
    type?: "text" | "textarea" | "json";
  }[];
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
              <ContentEditor
                section={field.section}
                contentKey={field.key}
                label=""
                type={field.type}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
