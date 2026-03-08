import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { AdminSidebar, type AdminSection } from "@/components/admin/AdminSidebar";
import { DashboardView } from "@/components/admin/DashboardView";
import { SectionEditor, type SectionField } from "@/components/admin/SectionEditor";

const sectionConfigs: Record<string, { title: string; description: string; fields: SectionField[] }> = {
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
    description: "Edit data dan foto pengurus pusat organisasi.",
    fields: [
      { section: "pengurus", key: "daftar", label: "Daftar Pengurus (JSON)", type: "json" },
      { section: "pengurus", key: "pengurus", label: "Foto Pengurus", type: "gallery" },
    ],
  },
  kegiatan: {
    title: "Kelola Kegiatan",
    description: "Edit informasi dan dokumentasi foto kegiatan.",
    fields: [
      { section: "kegiatan", key: "daftar", label: "Daftar Kegiatan (JSON)", type: "json" },
      { section: "kegiatan", key: "kegiatan", label: "Galeri Foto Kegiatan", type: "gallery" },
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
    description: "Edit data dan foto tim pengurus daerah.",
    fields: [
      { section: "tim-pengda", key: "daftar", label: "Daftar Tim Pengda (JSON)", type: "json" },
      { section: "tim-pengda", key: "tim-pengda", label: "Foto Tim Pengda", type: "gallery" },
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
      <main className="flex-1 p-4 md:p-8 overflow-auto pt-20 md:pt-8">
        {renderContent()}
      </main>
    </div>
  );
}
