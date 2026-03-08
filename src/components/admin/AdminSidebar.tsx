import { LayoutDashboard, FileText, Users, Image, Briefcase, UserCheck, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type AdminSection = "dashboard" | "sejarah" | "pengurus" | "kegiatan" | "program-kerja" | "tim-pengda";

interface AdminSidebarProps {
  active: AdminSection;
  onSelect: (section: AdminSection) => void;
  onLogout: () => void;
  username: string;
}

const menuItems: { id: AdminSection; label: string; icon: React.ElementType }[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "sejarah", label: "Sejarah", icon: FileText },
  { id: "pengurus", label: "Pengurus", icon: Users },
  { id: "kegiatan", label: "Kegiatan", icon: Image },
  { id: "program-kerja", label: "Program Kerja", icon: Briefcase },
  { id: "tim-pengda", label: "Tim Pengda", icon: UserCheck },
];

export function AdminSidebar({ active, onSelect, onLogout, username }: AdminSidebarProps) {
  return (
    <aside className="w-64 min-h-screen bg-card border-r border-border flex flex-col">
      <div className="p-5 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
            {username?.charAt(0)?.toUpperCase() || "A"}
          </div>
          <div className="min-w-0">
            <p className="font-heading font-semibold text-foreground truncate">{username}</p>
            <p className="text-xs text-muted-foreground">Administrator</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
              active === item.id
                ? "bg-primary/20 text-accent border border-primary/30"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <item.icon className="w-4 h-4 shrink-0" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-3 border-t border-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={onLogout}
          className="w-full justify-start text-muted-foreground hover:text-destructive"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Keluar
        </Button>
      </div>
    </aside>
  );
}
