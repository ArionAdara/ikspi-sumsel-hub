import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Instagram, ExternalLink, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function KegiatanSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isLoading, setIsLoading] = useState(true);

  const instagramUsername = "humas.ikspi.sumsel";

  return (
    <section id="kegiatan" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div ref={ref} className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
            Informasi
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground section-title">
            Kegiatan & Berita
          </h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Ikuti perkembangan kegiatan terbaru dari Pengda IKS PI Kera Sakti Sumatera Selatan 
            melalui akun resmi Instagram kami.
          </p>
        </motion.div>

        {/* Instagram Embed Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Instagram Header Card */}
          <div className="member-card p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-0.5">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">@{instagramUsername}</h3>
                <p className="text-muted-foreground text-sm">Official Instagram</p>
              </div>
            </div>
            <a
              href={`https://instagram.com/${instagramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-gold/50 text-gold hover:bg-gold/10 hover:border-gold">
                <ExternalLink className="w-4 h-4 mr-2" />
                Buka Instagram
              </Button>
            </a>
          </div>

          {/* Instagram Feed - Using embedsocial or elfsight widget placeholder */}
          <div className="member-card p-4 min-h-[600px] relative">
            {/* Info about Instagram integration */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <Instagram className="w-20 h-20 text-gold/50 mb-6" />
              <h4 className="font-heading text-2xl font-bold text-foreground mb-4">
                Feed Instagram
              </h4>
              <p className="text-muted-foreground max-w-md mb-6">
                Untuk menampilkan feed Instagram secara otomatis, diperlukan integrasi 
                dengan layanan seperti EmbedSocial, Elfsight, atau Instagram Basic Display API.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://instagram.com/${instagramUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90">
                    <Instagram className="w-4 h-4 mr-2" />
                    Lihat di Instagram
                  </Button>
                </a>
              </div>
            </div>

            {/* Placeholder Instagram Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 opacity-20 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-muted rounded-lg animate-pulse"
                />
              ))}
            </div>
          </div>

          {/* Instagram Widget Integration Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 p-6 bg-gold/5 border border-gold/20 rounded-lg"
          >
            <h4 className="font-heading text-lg font-semibold text-gold mb-2">
              💡 Integrasi Instagram
            </h4>
            <p className="text-muted-foreground text-sm">
              Untuk menampilkan konten Instagram secara otomatis, Anda dapat menggunakan:
            </p>
            <ul className="text-muted-foreground text-sm mt-2 space-y-1">
              <li>• <strong>EmbedSocial</strong> - Widget Instagram yang mudah diintegrasikan</li>
              <li>• <strong>Elfsight</strong> - Plugin Instagram dengan berbagai template</li>
              <li>• <strong>Instagram Basic Display API</strong> - Solusi custom development</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
