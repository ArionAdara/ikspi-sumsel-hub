import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SejarahSection } from "@/components/sections/SejarahSection";
import { PengurusSection } from "@/components/sections/PengurusSection";
import { CabangSection } from "@/components/sections/CabangSection";
import { KegiatanSection } from "@/components/sections/KegiatanSection";
import { CariAnggotaSection } from "@/components/sections/CariAnggotaSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { MusicPrompt } from "@/components/MusicPrompt";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "IKS PI Kera Sakti - Pengurus Daerah Sumatera Selatan";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <MusicPrompt />
      <Navbar />
      <main>
        <HeroSection />
        <SejarahSection />
        <PengurusSection />
        <CabangSection />
        <KegiatanSection />
        <CariAnggotaSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
