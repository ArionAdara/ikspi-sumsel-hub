import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Award, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import ketuaUmumImg from "@/assets/ketua-umum.jpg";
import logoIkspi from "@/assets/logo-ikspi.png";

export default function KetuaUmum() {
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
              Ketua Umum
            </span>
            <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              KP. Drs. H. Bambang Sunarja, M.A
            </h1>
            <p className="text-muted-foreground">
              Ketua Umum IKS PI Kera Sakti sejak 1997
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
                      src={ketuaUmumImg}
                      alt="KP. Drs. H. Bambang Sunarja, M.A"
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
                    <span>Lahir 11 Mei 1966</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-gold" />
                    <span>Madiun, Jawa Timur</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Award className="w-5 h-5 text-gold" />
                    <span>Ketua Umum sejak 1997</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-5 h-5 text-gold" />
                    <span>1 Juta+ Anggota</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Globe className="w-5 h-5 text-gold" />
                    <span>20+ Negara</span>
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
                    <span className="text-gold font-semibold">Kanjeng Pangeran (KP) Drs. H. Bambang 
                    Sunarja, M.A</span> adalah Ketua Umum IKS PI Kera Sakti sejak tahun 1997 sampai 
                    dengan sekarang. Pria kelahiran Madiun 11 Mei 1966 ini melanjutkan kepemimpinan 
                    Perguruan IKS PI Kera Sakti setelah meninggalnya Guru Besar H. Raden Totong Kiemdarto.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Dibawah kepemimpinan beliau Perguruan IKS PI Kera Sakti kini memiliki 
                    <span className="text-gold font-semibold"> Padepokan Pencak Silat Perguruan IKS PI 
                    Kera Sakti</span> (terluas di Asia Tenggara) dengan anggota saat ini lebih dari 
                    <span className="text-crimson-light font-semibold"> satu juta orang</span> yang 
                    setiap pengesahan anggota baru nya rata-rata 40.000 warga dan pendekar per tahunnya.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Perguruan IKS PI Kera Sakti berkembang pesat dari karesidenan Madiun hingga ke 
                    mancanegara seperti <span className="text-gold">Timor Leste, Korea Selatan, Jepang, 
                    Inggris, Hongkong, Taiwan, Mesir</span> dan di 20 negara lainnya.
                  </p>

                  {/* Achievement Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-card/50 border border-gold/20 rounded-lg p-4 text-center">
                      <span className="font-heading text-3xl font-bold text-gold">1 Juta+</span>
                      <p className="text-muted-foreground text-sm mt-1">Anggota Aktif</p>
                    </div>
                    <div className="bg-card/50 border border-gold/20 rounded-lg p-4 text-center">
                      <span className="font-heading text-3xl font-bold text-gold">40.000</span>
                      <p className="text-muted-foreground text-sm mt-1">Pengesahan/Tahun</p>
                    </div>
                    <div className="bg-card/50 border border-gold/20 rounded-lg p-4 text-center">
                      <span className="font-heading text-3xl font-bold text-gold">20+</span>
                      <p className="text-muted-foreground text-sm mt-1">Negara</p>
                    </div>
                    <div className="bg-card/50 border border-gold/20 rounded-lg p-4 text-center">
                      <span className="font-heading text-3xl font-bold text-gold">1997</span>
                      <p className="text-muted-foreground text-sm mt-1">Menjabat Ketua Umum</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="border-l-4 border-crimson pl-6 py-4 bg-card/50 rounded-r-lg">
                    <p className="text-foreground italic text-lg mb-2">
                      "Ke Empat Penjuru Kita Cari Saudara, Tapi Kalau Musuh Ada Pantang Tunduk Kepala"
                    </p>
                    <span className="text-gold text-sm">— Semboyan IKS PI Kera Sakti</span>
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
