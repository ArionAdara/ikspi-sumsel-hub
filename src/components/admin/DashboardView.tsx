import { FileText, Users, Image, Briefcase, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AdminSection } from "./AdminSidebar";

interface DashboardViewProps {
  onNavigate: (section: AdminSection) => void;
}

const cards = [
  { id: "sejarah" as AdminSection, label: "Sejarah", desc: "Kelola konten sejarah organisasi", icon: FileText },
  { id: "pengurus" as AdminSection, label: "Pengurus", desc: "Kelola data pengurus pusat", icon: Users },
  { id: "kegiatan" as AdminSection, label: "Kegiatan", desc: "Kelola galeri & dokumentasi kegiatan", icon: Image },
  { id: "program-kerja" as AdminSection, label: "Program Kerja", desc: "Kelola program kerja organisasi", icon: Briefcase },
  { id: "tim-pengda" as AdminSection, label: "Tim Pengda", desc: "Kelola data tim pengurus daerah", icon: UserCheck },
];

export function DashboardView({ onNavigate }: DashboardViewProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Dashboard</h2>
      <p className="text-muted-foreground mb-8">Pilih bagian yang ingin Anda kelola.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="cursor-pointer border-border hover:border-accent/50 transition-colors group"
            onClick={() => onNavigate(card.id)}
          >
            <CardHeader className="pb-2">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                <card.icon className="w-5 h-5 text-accent" />
              </div>
              <CardTitle className="text-lg font-heading">{card.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
