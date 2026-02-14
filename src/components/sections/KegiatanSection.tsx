import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import activity images
import postingan140 from "@/assets/kegiatan/postingan-140.png";
import postingan141 from "@/assets/kegiatan/postingan-141.png";
import postingan142 from "@/assets/kegiatan/postingan-142.png";
import postingan143 from "@/assets/kegiatan/postingan-143.png";

const activityImages = [
  { src: postingan140, alt: "Rapat Terbatas Pengurus Cabang Lubuk Linggau" },
  { src: postingan141, alt: "Sarasehan Ketua Pengda Se Indonesia" },
  { src: postingan142, alt: "Rapat Kerja Pusat Tahun 2026" },
  { src: postingan143, alt: "Penyerahan Sertifikat Tanah Sekretariat" },
];

export function KegiatanSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

        {/* Instagram Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
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

          {/* Activity Gallery - 1 Main + 3 Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {/* Main Image */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="member-card p-2 h-full">
                <div className="relative overflow-hidden rounded-lg h-full min-h-[300px] lg:min-h-[500px]">
                  <img
                    src={activityImages[0].src}
                    alt={activityImages[0].alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-gold text-xs uppercase tracking-wider">Berita Terbaru</span>
                    <h4 className="font-heading text-lg text-foreground mt-1 line-clamp-2">
                      {activityImages[0].alt}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Images - 3 stacked */}
            <div className="flex flex-col gap-4">
              {activityImages.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="member-card p-2 flex-1"
                >
                  <div className="relative overflow-hidden rounded-lg h-full min-h-[140px]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h4 className="font-heading text-sm text-foreground line-clamp-2">
                        {image.alt}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lihat Selanjutnya */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-center space-y-4"
          >
            <Link to="/galeri-kegiatan">
              <span className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-heading text-base md:text-lg font-semibold cursor-pointer group">
                Lihat Selanjutnya..
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <div>
              <a
                href={`https://instagram.com/${instagramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90">
                  <Instagram className="w-4 h-4 mr-2" />
                  Lihat Semua di Instagram
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
