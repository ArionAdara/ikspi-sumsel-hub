import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, ArrowRight, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";

// Import photos
import muslimin from "@/assets/pengurus/muslimin.png";
import muhammadAli from "@/assets/pengurus/muhammad-ali.png";
import auliaDzikri from "@/assets/pengurus/aulia-dzikri.png";
import daruKusumo from "@/assets/pengurus/daru-kusumo.png";
import yungChen from "@/assets/pengurus/yung-chen.png";
import yanuarman from "@/assets/pengurus/yanuarman.png";
import royliDavidson from "@/assets/pengurus/royli-davidson.png";
import octaviansyah from "@/assets/pengurus/octaviansyah.png";
import fitria from "@/assets/pengurus/fitria.png";

const pengurusList = [
  {
    name: "Muslimin",
    position: "Ketua Pengurus Daerah",
    image: muslimin,
    isLeader: true,
  },
  {
    name: "Muhammad Ali",
    position: "Sekretaris",
    image: muhammadAli,
  },
  {
    name: "M. Aulia Dzikri",
    position: "Bendahara",
    image: auliaDzikri,
  },
  {
    name: "Daru Kusumo",
    position: "Litbang",
    image: daruKusumo,
  },
  {
    name: "Yung Chen",
    position: "Dewan Teknik",
    image: yungChen,
  },
  {
    name: "Yanuarman",
    position: "Dewan Kerohanian",
    image: yanuarman,
  },
  {
    name: "Royli Davidson",
    position: "Dewan Seni dan Prestasi",
    image: royliDavidson,
  },
  {
    name: "Octaviansyah",
    position: "Humas",
    image: octaviansyah,
  },
  {
    name: "Fitria",
    position: "Advokasi",
    image: fitria,
  },
];

export function PengurusSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pengurus" className="relative py-24 bg-card/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div ref={ref} className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
            Kepengurusan
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground section-title">
            Pengurus Daerah Sumatera Selatan
          </h2>
          <p className="text-gold font-heading text-lg md:text-xl font-semibold mt-3 uppercase tracking-wider">
            Masa Bakti 2021 s/d 2026
          </p>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Struktur kepengurusan Pengda IKS PI Kera Sakti Sumatera Selatan yang bertugas 
            membina dan mengembangkan perguruan di wilayah Sumatera Selatan.
          </p>

          {/* Visi Misi */}
          <div className="mt-10 max-w-3xl mx-auto">
            <div className="relative p-6 md:p-8 rounded-lg border border-gold/30 bg-card/80 backdrop-blur-sm">
              <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-gold rounded-t-lg" />
              <span className="text-gold text-xs uppercase tracking-widest mb-3 block">Visi & Misi</span>
              <p className="font-heading text-lg md:text-xl font-bold text-foreground leading-relaxed tracking-wide">
                "MEMBANGUN IKS PI KERA SAKTI SUMATERA SELATAN TERSTRUKTUR, TRANSPARAN, SISTEMATIS DAN TERTIB ADMINISTRASI"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Leader Card - Ketua Pengda */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto mb-16"
        >
          <div className="relative member-card text-center py-10 border-2 border-gold/50 animate-glow-pulse">
            <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-gold" />
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold shadow-lg shadow-gold/20">
              <img
                src={pengurusList[0].image}
                alt={pengurusList[0].name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <span className="inline-block px-4 py-1 bg-gradient-crimson text-foreground text-sm font-semibold rounded-full mb-3">
              {pengurusList[0].position}
            </span>
            <h3 className="font-heading text-2xl font-bold text-foreground">
              {pengurusList[0].name}
            </h3>
          </div>
        </motion.div>

        {/* Other Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pengurusList.slice(1).map((pengurus, index) => (
            <motion.div
              key={pengurus.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="member-card text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold/30 hover:border-gold transition-colors">
                <img
                  src={pengurus.image}
                  alt={pengurus.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <span className="text-gold text-xs uppercase tracking-wider">{pengurus.position}</span>
              <h4 className="font-heading text-lg font-semibold text-foreground mt-1">
                {pengurus.name}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Program Kerja Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto mt-16"
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
                    <span className="text-gold text-xs uppercase tracking-widest block mb-1">Masa Bakti 2021 s/d 2026</span>
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

        {/* Tim Pengda Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-4"
        >
          <Link to="/tim-pengda">
            <div className="relative p-6 md:p-8 rounded-lg border border-gold/30 bg-card/80 hover:border-gold hover:shadow-[0_0_30px_hsla(45,90%,50%,0.15)] transition-all duration-500 group cursor-pointer">
              <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-gold rounded-t-lg" />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-crimson border border-gold/50 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <span className="text-gold text-xs uppercase tracking-widest block mb-1">Masa Bakti 2021 s/d 2026</span>
                    <h3 className="font-heading text-base md:text-lg font-bold text-foreground leading-snug">
                      Anggota Tim Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan
                    </h3>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Kontak Person Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-4xl mx-auto mt-4"
        >
          <Link to="/kontak-person">
            <div className="relative p-6 md:p-8 rounded-lg border border-gold/30 bg-card/80 hover:border-gold hover:shadow-[0_0_30px_hsla(45,90%,50%,0.15)] transition-all duration-500 group cursor-pointer">
              <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-gold rounded-t-lg" />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-crimson border border-gold/50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <span className="text-gold text-xs uppercase tracking-widest block mb-1">Masa Bakti 2021 s/d 2026</span>
                    <h3 className="font-heading text-base md:text-lg font-bold text-foreground leading-snug">
                      Kontak Person Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan
                    </h3>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
