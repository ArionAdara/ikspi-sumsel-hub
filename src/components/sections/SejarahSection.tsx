import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Users, Globe, Award } from "lucide-react";
import guruBesarImg from "@/assets/guru-besar.jpg";
import ketuaUmumImg from "@/assets/ketua-umum.jpg";
import sejarahBg from "@/assets/sejarah-bg.jpg";
import padepokanImg from "@/assets/padepokan.jpg";

const timelineEvents = [
  {
    year: "1980",
    title: "Pendirian IKS PI",
    description: "Didirikan oleh H. R. Totong Kiemdarto di Madiun pada 15 Januari 1980",
    icon: Calendar,
  },
  {
    year: "1997",
    title: "Era Kepemimpinan Baru",
    description: "KP. Drs. H. Bambang Sunarja, M.A melanjutkan kepemimpinan perguruan",
    icon: Award,
  },
  {
    year: "2000+",
    title: "Ekspansi Internasional",
    description: "Berkembang ke 20+ negara termasuk Timor Leste, Korea, Jepang, Inggris",
    icon: Globe,
  },
  {
    year: "Sekarang",
    title: "Lebih dari 1 Juta Anggota",
    description: "Dengan pengesahan 40.000 warga dan pendekar baru setiap tahunnya",
    icon: Users,
  },
];

export function SejarahSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sejarah" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${sejarahBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
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
            Latar Belakang
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground section-title">
            Sejarah Perguruan
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Perguruan <span className="text-gold font-semibold">IKS PI Kera Sakti</span> didirikan 
                di Madiun pada 15 Januari 1980 oleh <span className="text-crimson-light">H. Raden Totong Kiemdarto</span>, 
                berfokus pada penggabungan seni beladiri kungfu/kuntauw Tiongkok dengan teknik pencak silat Indonesia.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Perguruan ini mengajarkan <span className="text-gold">Nan Pie Ho Jien</span>, yaitu aliran 
                kungfu kera yang mengkombinasikan gaya Selatan (Hokkian - permainan tangan) dan Utara 
                (Shantung - tendangan tinggi dan meloncat).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nama "Kera Sakti" disematkan karena masyarakat lebih mengenal jurus kera yang diajarkan, 
                dengan visi membentuk manusia sehat secara fisik dan mental berjiwa Pancasila.
              </p>
              
              {/* Philosophy Quote */}
              <div className="border-l-4 border-gold pl-6 py-4 my-8 bg-card/50 rounded-r-lg">
                <p className="text-foreground italic text-lg mb-2">
                  "Warga IKS dapat patah tangannya, dapat patah kakinya, tetapi tidak dapat ditaklukan 
                  selama tidak patah IKS-nya"
                </p>
                <span className="text-gold text-sm">— Falsafah IKS PI Kera Sakti</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Padepokan Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg border border-gold/30">
              <img
                src={padepokanImg}
                alt="Padepokan IKS PI Kera Sakti"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-gold font-heading text-lg">Padepokan Pencak Silat</p>
                <p className="text-foreground/80 text-sm">Terluas di Asia Tenggara</p>
              </div>
            </div>
            {/* Decorative corner */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-gold" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-gold" />
          </motion.div>
        </div>

        {/* Leader Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="font-heading text-2xl md:text-3xl text-center text-foreground mb-12">
            Pemimpin Perguruan
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Guru Besar */}
            <div className="member-card text-center">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold/50 shadow-lg">
                <img
                  src={guruBesarImg}
                  alt="H. R. Totong Kiemdarto"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-gold text-sm uppercase tracking-wider">Guru Besar</span>
              <h4 className="font-heading text-xl font-bold text-foreground mt-2">
                H. R. Totong Kiemdarto
              </h4>
              <p className="text-muted-foreground text-sm mt-2">
                Pendiri IKS PI Kera Sakti<br />
                20 Oktober 1953 - 1997
              </p>
            </div>

            {/* Ketua Umum */}
            <div className="member-card text-center">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold/50 shadow-lg">
                <img
                  src={ketuaUmumImg}
                  alt="KP. Drs. H. Bambang Sunarja, M.A"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-gold text-sm uppercase tracking-wider">Ketua Umum</span>
              <h4 className="font-heading text-xl font-bold text-foreground mt-2">
                KP. Drs. H. Bambang Sunarja, M.A
              </h4>
              <p className="text-muted-foreground text-sm mt-2">
                Ketua Umum sejak 1997<br />
                Kelahiran Madiun, 11 Mei 1966
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="font-heading text-2xl md:text-3xl text-center text-foreground mb-12">
            Perjalanan Perguruan
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.15 }}
                  className={`flex flex-col md:flex-row items-center gap-4 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="member-card">
                      <span className="text-gold font-heading text-2xl font-bold">{event.year}</span>
                      <h4 className="font-heading text-lg font-semibold text-foreground mt-2">
                        {event.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mt-2">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-crimson border-2 border-gold flex items-center justify-center shrink-0">
                    <event.icon className="w-5 h-5 text-gold" />
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
