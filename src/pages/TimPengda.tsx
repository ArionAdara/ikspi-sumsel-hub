import { motion } from "framer-motion";
import { ArrowLeft, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import logoIkspi from "@/assets/logo-ikspi.png";

const anggotaTim = [
  "Ruda Saputra Wibowo",
  "Firdaus",
  "Diki Renaldi",
  "Ikhsan Bastian",
  "Qurrotul A'yuni",
  "Amanda Wida Kharisma",
  "Aulia Rahma Haryati",
];

export default function TimPengda() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
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
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-widest">Kembali</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <img
              src={logoIkspi}
              alt="Logo IKS PI Kera Sakti"
              className="w-20 h-20 mx-auto mb-6 object-contain"
              loading="lazy"
            />
            <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
              Periode 2021 s/d 2026
            </span>
            <h1 className="font-heading text-2xl md:text-4xl font-bold leading-tight">
              Anggota Tim Pengurus Daerah
            </h1>
            <h2 className="font-heading text-lg md:text-2xl font-bold text-gold mt-2">
              IKS PI Kera Sakti Sumatera Selatan
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Tugas Utama */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-6 md:p-8 rounded-lg border border-gold/30 bg-card/80 backdrop-blur-sm text-center">
            <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-gold rounded-t-lg" />
            <Shield className="w-8 h-8 text-gold mx-auto mb-3" />
            <span className="text-gold text-xs uppercase tracking-widest mb-2 block">
              Tugas Utama
            </span>
            <p className="text-muted-foreground leading-relaxed">
              Membantu pelaksanaan Program Kerja Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan
            </p>
          </div>
        </motion.div>
      </div>

      {/* Anggota List */}
      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-3xl mx-auto grid gap-4">
          {anggotaTim.map((nama, index) => (
            <motion.div
              key={nama}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
              className="relative p-5 rounded-lg border border-border bg-card/60 hover:border-gold/50 hover:shadow-[0_0_20px_hsla(45,90%,50%,0.1)] transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-crimson border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-gold/60 transition-colors">
                  <span className="font-heading font-bold text-foreground text-sm">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {nama}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
