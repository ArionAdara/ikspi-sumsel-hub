import { motion } from "framer-motion";
import { ArrowLeft, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import logoIkspi from "@/assets/logo-ikspi.png";
import { useEffect } from "react";

// Import all kegiatan images in order
import postingan1 from "@/assets/kegiatan/postingan-1.png";
import postingan2 from "@/assets/kegiatan/postingan-2.png";
import postingan3 from "@/assets/kegiatan/postingan-3.png";
import postingan4 from "@/assets/kegiatan/postingan-4.png";
import postingan5 from "@/assets/kegiatan/postingan-5.png";
import postingan6 from "@/assets/kegiatan/postingan-6.png";
import postingan7 from "@/assets/kegiatan/postingan-7.png";
import postingan8 from "@/assets/kegiatan/postingan-8.png";
import postingan9 from "@/assets/kegiatan/postingan-9.png";
import postingan10 from "@/assets/kegiatan/postingan-10.png";
import postingan140 from "@/assets/kegiatan/postingan-140.png";
import postingan141 from "@/assets/kegiatan/postingan-141.png";
import postingan142 from "@/assets/kegiatan/postingan-142.png";
import postingan143 from "@/assets/kegiatan/postingan-143.png";

const allKegiatan = [
  { src: postingan140, alt: "Rapat Terbatas Pengurus Cabang Lubuk Linggau" },
  { src: postingan141, alt: "Sarasehan Ketua Pengda Se Indonesia" },
  { src: postingan142, alt: "Rapat Kerja Pusat Tahun 2026" },
  { src: postingan143, alt: "Penyerahan Sertifikat Tanah Sekretariat" },
  { src: postingan1, alt: "Melaksanakan Tupoksi, Pengda IKS PI Kera Sakti Sumsel Membantu Menyelesaikan Berbagai Masalah" },
  { src: postingan2, alt: "Pengda IKS Sumsel Memberikan Bimbingan Kepada Pengcab Musi Banyuasin" },
  { src: postingan3, alt: "Pengda Melaksanakan Acara Buka Puasa dan Silaturahmi Bersama Cabang Terdekat" },
  { src: postingan4, alt: "Dewan Penasihat Pusat Mendukung Penuh Kegiatan Pengda Sumsel" },
  { src: postingan5, alt: "Pengda Melakukan Mediasi Antara Dua Kelompok Warga di Cabang Ogan Ilir" },
  { src: postingan6, alt: "Melupakan Segala Permasalahan dan Saling Memaafkan untuk Bersatu" },
  { src: postingan7, alt: "Pengda IKS Sumsel Melakukan Registrasi Ulang ke IPSI Provinsi Sumsel" },
  { src: postingan8, alt: "Dewan Teknik Pengda IKS Sumsel Memberikan Bimbingan kepada Para Atlet" },
  { src: postingan9, alt: "Menghadiri Undangan UKT Angkatan 133/119 di Beberapa Cabang di Sumsel" },
  { src: postingan10, alt: "Kunjungan ke Cabang-Cabang di Wilayah Sumsel" },
];

export default function GaleriKegiatan() {
  useEffect(() => {
    document.title = "Galeri Kegiatan - IKS PI Kera Sakti Sumatera Selatan";
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
              Dokumentasi
            </span>
            <h1 className="font-heading text-2xl md:text-4xl font-bold leading-tight">
              Galeri Kegiatan & Berita
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
              <div className="text-3xl md:text-4xl font-heading font-bold text-gold">{allKegiatan.length}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Total Dokumentasi</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <Camera className="w-5 h-5 text-gold" />
          <h2 className="font-heading text-lg md:text-xl font-bold text-gold uppercase tracking-widest">
            Semua Kegiatan
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allKegiatan.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="group"
            >
              <div className="relative rounded-xl overflow-hidden border-2 border-border group-hover:border-gold/60 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_30px_hsla(45,90%,50%,0.2)]">
                <div className="aspect-square overflow-hidden bg-card">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-heading text-sm text-foreground leading-snug line-clamp-3">
                    {item.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
