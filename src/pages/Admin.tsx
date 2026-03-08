import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { AdminSidebar, type AdminSection } from "@/components/admin/AdminSidebar";
import { DashboardView } from "@/components/admin/DashboardView";
import { SectionEditor } from "@/components/admin/SectionEditor";

const sectionConfigs: Record<string, { title: string; description: string; fields: { section: string; key: string; label: string; type?: "text" | "textarea" | "json" }[] }> = {
  sejarah: {
    title: "Kelola Sejarah",
    description: "Edit konten halaman sejarah organisasi.",
    fields: [
      { section: "sejarah", key: "judul", label: "Judul", type: "text" },
      { section: "sejarah", key: "konten", label: "Konten Sejarah", type: "textarea" },
    ],
  },
  pengurus: {
    title: "Kelola Pengurus",
    description: "Edit data pengurus pusat organisasi.",
    fields: [
      { section: "pengurus", key: "daftar", label: "Daftar Pengurus (JSON)", type: "json" },
    ],
  },
  kegiatan: {
    title: "Kelola Kegiatan",
    description: "Edit informasi kegiatan dan dokumentasi.",
    fields: [
      { section: "kegiatan", key: "daftar", label: "Daftar Kegiatan (JSON)", type: "json" },
    ],
  },
  "program-kerja": {
    title: "Kelola Program Kerja",
    description: "Edit program kerja organisasi.",
    fields: [
      { section: "program-kerja", key: "daftar", label: "Daftar Program Kerja (JSON)", type: "json" },
    ],
  },
  "tim-pengda": {
    title: "Kelola Tim Pengda",
    description: "Edit data tim pengurus daerah.",
    fields: [
      { section: "tim-pengda", key: "daftar", label: "Daftar Tim Pengda (JSON)", type: "json" },
    ],
  },
};

export default function Admin() {
  const [username, setUsername] = useState("");
  const [activeSection, setActiveSection] = useState<AdminSection>("dashboard");
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from("profiles")
          .select("username")
          .eq("id", user.id)
          .single();
        if (data) setUsername(data.username);
      }
    };
    getProfile();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const renderContent = () => {
    if (activeSection === "dashboard") {
      return <DashboardView onNavigate={setActiveSection} />;
    }
    const config = sectionConfigs[activeSection];
    if (config) {
      return <SectionEditor title={config.title} description={config.description} fields={config.fields} />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-background flex">
      <AdminSidebar
        active={activeSection}
        onSelect={setActiveSection}
        onLogout={handleLogout}
        username={username}
      />
      <main className="flex-1 p-8 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
}
