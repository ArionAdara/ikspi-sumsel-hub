import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cabangList = [
  { wilayah: "Banyuasin", ketua: "Sudarmaji" },
  { wilayah: "Empat Lawang", ketua: "Ervansyah" },
  { wilayah: "Lahat", ketua: "Nur Cahyo" },
  { wilayah: "Lubuk Linggau", ketua: "Wiwin Sumardi" },
  { wilayah: "Muara Enim", ketua: "Suwarno" },
  { wilayah: "Musi Rawas", ketua: "Alwi Fatoni" },
  { wilayah: "Musi Rawas Utara", ketua: "Agung Sumiarto" },
  { wilayah: "Musi Banyuasin", ketua: "Khoiriyanto" },
  { wilayah: "Ogan Ilir", ketua: "Awalludin" },
  { wilayah: "Ogan Komering Ilir", ketua: "Slamet Wahyudi" },
  { wilayah: "Ogan Komering Ulu", ketua: "Gatot Santoso" },
  { wilayah: "Ogan Komering Ulu Timur", ketua: "Agustinus Basuki" },
  { wilayah: "Ogan Komering Ulu Selatan", ketua: "Subhan Zen" },
  { wilayah: "Palembang", ketua: "Langgeng Suprapto" },
  { wilayah: "Pagaralam", ketua: "Suwarto" },
  { wilayah: "Penukal Abab Lematang Ilir", ketua: "Didik Susanto" },
  { wilayah: "Prabumulih", ketua: "Andri Yanto" },
];

export function CabangSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cabang" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/30" />

      <div ref={ref} className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
            Pengurus Cabang
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground section-title">
            Ketua Cabang Se-Sumatera Selatan
          </h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Daftar Ketua Pengurus Cabang IKS PI Kera Sakti di seluruh wilayah 
            Kabupaten dan Kota di Provinsi Sumatera Selatan.
          </p>
        </motion.div>

        {/* Program Kerja Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Link to="/program-kerja">
            <div className="relative p-6 md:p-8 rounded-lg border border-gold/30 bg-card/80 hover:border-gold hover:shadow-[0_0_30px_hsla(45,90%,50%,0.15)] transition-all duration-500 group cursor-pointer">
              <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-gold rounded-t-lg" />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-crimson border border-gold/50 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <span className="text-gold text-xs uppercase tracking-widest block mb-1">Periode 2021 s/d 2026</span>
                    <h3 className="font-heading text-base md:text-lg font-bold text-foreground leading-snug">
                      Program Kerja Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan
                    </h3>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Cabang Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {cabangList.map((cabang, index) => (
            <motion.div
              key={cabang.wilayah}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="member-card p-4 flex items-start gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-crimson flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 text-foreground" />
              </div>
              <div className="min-w-0">
                <h4 className="font-heading text-sm font-semibold text-gold truncate">
                  {cabang.wilayah}
                </h4>
                <p className="text-foreground text-base font-medium mt-0.5 truncate">
                  {cabang.ketua}
                </p>
                <span className="text-muted-foreground text-xs">Ketua Cabang</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
