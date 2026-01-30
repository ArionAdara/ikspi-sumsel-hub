import { motion } from "framer-motion";
import { ChevronDown, MapPin, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Animated particles/ornaments */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Organization badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium">
            <MapPin className="w-4 h-4 mr-2" />
            Pengurus Daerah Sumatera Selatan
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <h2 className="font-heading text-xl md:text-2xl text-gold mb-2 tracking-widest">
            PERGURUAN
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-foreground mb-2 text-shadow-lg"
        >
          IKS PI{" "}
          <span className="gradient-text-gold">KERA SAKTI</span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="gold-line w-48 mx-auto my-8"
        />

        {/* Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <blockquote className="relative">
            <span className="absolute -top-4 -left-2 text-6xl text-gold/30 font-serif">"</span>
            <p className="font-display text-xl sm:text-2xl md:text-3xl italic text-foreground/90 leading-relaxed px-8 text-shadow-md">
              Ke Empat Penjuru Kita Cari Saudara,{" "}
              <br className="hidden sm:block" />
              Tapi Kalau Musuh Ada{" "}
              <span className="text-crimson-light font-semibold not-italic">
                Pantang Tunduk Kepala
              </span>
            </p>
            <span className="absolute -bottom-8 -right-2 text-6xl text-gold/30 font-serif">"</span>
          </blockquote>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-5 h-5 text-gold mr-2" />
              <span className="font-heading text-3xl md:text-4xl font-bold text-gold">1 Juta+</span>
            </div>
            <p className="text-sm text-muted-foreground">Anggota Aktif</p>
          </div>
          <div className="text-center">
            <span className="font-heading text-3xl md:text-4xl font-bold text-gold">1980</span>
            <p className="text-sm text-muted-foreground">Didirikan</p>
          </div>
          <div className="text-center">
            <span className="font-heading text-3xl md:text-4xl font-bold text-gold">20+</span>
            <p className="text-sm text-muted-foreground">Negara</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#sejarah"
            className="btn-hero inline-flex items-center justify-center rounded-md"
          >
            Tentang Kami
          </a>
          <a
            href="#cari-anggota"
            className="inline-flex items-center justify-center px-8 py-4 font-heading font-semibold tracking-wider uppercase border-2 border-gold/50 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 rounded-md"
          >
            Cari Anggota
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#sejarah" className="flex flex-col items-center text-gold/60 hover:text-gold transition-colors">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
