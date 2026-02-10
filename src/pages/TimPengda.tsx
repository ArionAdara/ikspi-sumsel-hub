import { motion } from "framer-motion";
import { ArrowLeft, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import logoIkspi from "@/assets/logo-ikspi.png";
import rudaImg from "@/assets/tim-pengda/ruda-saputra-wibowo.png";
import firdausImg from "@/assets/tim-pengda/firdaus.png";
import dikiImg from "@/assets/tim-pengda/diki-renaldi.png";
import ikhsanImg from "@/assets/tim-pengda/ikhsan-bastian.png";
import qurrotulImg from "@/assets/tim-pengda/qurrotul-ayuni.png";
import amandaImg from "@/assets/tim-pengda/amanda-wida-kharisma.png";
import auliaImg from "@/assets/tim-pengda/aulia-rahma-haryati.jpg";
import { useEffect } from "react";

const anggotaTim = [
  { nama: "Ruda Saputra Wibowo", foto: rudaImg },
  { nama: "Firdaus", foto: firdausImg },
  { nama: "Diki Renaldi", foto: dikiImg },
  { nama: "Ikhsan Bastian", foto: ikhsanImg },
  { nama: "Qurrotul A'yuni", foto: qurrotulImg },
  { nama: "Amanda Wida Kharisma", foto: amandaImg },
  { nama: "Aulia Rahma Haryati", foto: auliaImg },
];

export default function TimPengda() {
  useEffect(() => {
    document.title = "Tim Pengda - IKS PI Kera Sakti Sumatera Selatan";
    window.scrollTo(0, 0);
  }, []);

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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-8 mt-8"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-gold">{anggotaTim.length}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Anggota</div>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-gold">5</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Tahun Pengabdian</div>
            </div>
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

      {/* Anggota Grid */}
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <Users className="w-5 h-5 text-gold" />
          <h2 className="font-heading text-lg md:text-xl font-bold text-gold uppercase tracking-widest">
            Daftar Anggota
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {anggotaTim.map((anggota, index) => (
            <motion.div
              key={anggota.nama}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-4 rounded-xl overflow-hidden border-2 border-border group-hover:border-gold/60 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_30px_hsla(45,90%,50%,0.2)]">
                <div className="aspect-[3/4] overflow-hidden bg-card">
                  <img
                    src={anggota.foto}
                    alt={anggota.nama}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    width={300}
                    height={400}
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-crimson border border-gold/40 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading font-bold text-foreground text-[10px]">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-heading text-xs md:text-sm font-semibold text-foreground leading-tight drop-shadow-lg">
                      {anggota.nama}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
