import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import logoIkspi from "@/assets/logo-ikspi.png";
import { useEffect } from "react";
import { programKerja } from "@/data/programKerjaData";

export default function ProgramKerja() {
  useEffect(() => {
    document.title = "Program Kerja - Pengda IKS PI Kera Sakti Sumatera Selatan";
    window.scrollTo(0, 0);
  }, []);

  const totalProgram = programKerja.reduce((acc, y) => acc + y.items.length, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson/20 via-background to-background" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Kembali ke Beranda</span>
          </Link>

          <div className="flex flex-col items-center text-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src={logoIkspi}
              alt="Logo IKS PI Kera Sakti"
              className="w-24 h-24 md:w-32 md:h-32 object-contain mb-6"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-gold text-sm uppercase tracking-widest mb-3 block">
                Masa Bakti 2021 s/d 2026
              </span>
              <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Program Kerja{" "}
                <span className="text-gold">Pengurus Daerah</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                IKS PI Kera Sakti Sumatera Selatan
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-6 md:gap-10 mt-10"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-gold">5</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Tahun</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-gold">{totalProgram}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Kegiatan Terlaksana</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 pb-24">
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent" />

          {programKerja.map((yearData, yearIndex) => {
            const Icon = yearData.icon;
            return (
              <motion.div
                key={yearData.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: yearIndex * 0.1 }}
                className="relative pl-14 md:pl-20 mb-12 last:mb-0"
              >
                <div className="absolute left-0 md:left-3.5 top-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-crimson border-2 border-gold flex items-center justify-center shadow-lg shadow-crimson/30 z-10">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-gold">
                    {yearData.year}
                  </h2>
                  <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold font-medium">
                    {yearData.items.length} kegiatan
                  </span>
                </div>

                <div className="space-y-2">
                  {yearData.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.03 }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-card/80 transition-colors group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
