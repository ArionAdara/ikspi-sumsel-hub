import { useState } from "react";
import { LayoutDashboard, FileText, Users, Image, Briefcase, UserCheck, LogOut, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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

function SidebarContent({ active, onSelect, onLogout, username }: AdminSidebarProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-5 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground shrink-0">
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
    </div>
  );
}

export function AdminSidebar(props: AdminSidebarProps) {
  const [open, setOpen] = useState(false);
  const { active, onSelect } = props;

  const handleSelect = (section: AdminSection) => {
    onSelect(section);
    setOpen(false);
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-64 min-h-screen bg-card border-r border-border flex-col">
        <SidebarContent {...props} />
      </aside>

      {/* Mobile header + sheet */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
            {props.username?.charAt(0)?.toUpperCase() || "A"}
          </div>
          <span className="font-heading font-semibold text-foreground text-sm">Panel Admin</span>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64 bg-card border-border">
            <SidebarContent {...props} onSelect={handleSelect} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
