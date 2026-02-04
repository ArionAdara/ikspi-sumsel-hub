import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import guruBesarImg from "@/assets/guru-besar.jpg";
import logoIkspi from "@/assets/logo-ikspi.png";

export default function GuruBesar() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-heading">Kembali</span>
          </Link>
          <img src={logoIkspi} alt="Logo IKS PI" className="w-10 h-10" loading="lazy" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
              Guru Besar
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              H. Raden Totong Kiemdarto
            </h1>
            <p className="text-muted-foreground">
              Pendiri IKS PI Kera Sakti
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-1"
              >
                <div className="relative">
                  <div className="w-full aspect-square rounded-lg overflow-hidden border-4 border-gold/50 shadow-lg">
                    <img
                      src={guruBesarImg}
                      alt="H. R. Totong Kiemdarto"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-gold" />
                  <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-gold" />
                </div>

                {/* Quick Info */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-gold" />
                    <span>20 Oktober 1953 - 1997</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-gold" />
                    <span>Madiun, Jawa Timur</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Award className="w-5 h-5 text-gold" />
                    <span>Pendiri IKS PI Kera Sakti</span>
                  </div>
                </div>
              </motion.div>

              {/* Biography */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="md:col-span-2"
              >
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                    <span className="text-gold font-semibold">H. Raden Totong Kiemdarto</span> merupakan 
                    tokoh besar pencak silat Indonesia yang menapaki dunia persilatan sejak usia remaja. 
                    Beliau mempelajari berbagai aliran bela diri dari sejumlah guru besar di Jawa Timur, 
                    mulai dari pencak silat tradisional Jawa, kungfu aliran utara dan selatan, qontak, 
                    hingga yoga.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Perpaduan berbagai disiplin ilmu tersebut melahirkan sebuah sistem pencak silat yang 
                    terstruktur, efektif, serta sarat nilai filosofi.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Berlandaskan pengalaman dan pemahamannya, <span className="text-crimson-light">H. Raden 
                    Totong Kiemdarto</span> mendirikan <span className="text-gold font-semibold">Ikatan Keluarga 
                    Silat Putra Indonesia (IKSPI) Kera Sakti</span> pada 15 Januari 1980 di Madiun, Jawa Timur. 
                    Perguruan ini tidak hanya menitikberatkan pada kekuatan fisik, tetapi juga pada pembinaan 
                    mental dan spiritual, dengan menjunjung tinggi nilai keimanan, kesetiaan, disiplin, dan 
                    persaudaraan.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Hingga kini, IKS PI Kera Sakti berkembang pesat dan menjadi salah satu perguruan silat 
                    terbesar di Indonesia dengan anggota yang tersebar di berbagai daerah dan mancanegara. 
                    Ajaran dan nilai luhur H. Raden Totong Kiemdarto terus hidup dan menjadi pedoman bagi 
                    generasi penerus.
                  </p>

                  {/* Philosophy Quote */}
                  <div className="border-l-4 border-gold pl-6 py-4 bg-card/50 rounded-r-lg">
                    <p className="text-foreground italic text-lg mb-2">
                      "Warga IKS dapat patah tangannya, dapat patah kakinya, tetapi tidak dapat ditaklukan 
                      selama tidak patah IKS-nya"
                    </p>
                    <span className="text-gold text-sm">— Falsafah IKS PI Kera Sakti</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </footer>
    </div>
  );
}
