import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SejarahLengkap = () => {
  useEffect(() => {
    document.title = "Sejarah Perguruan - IKS PI Kera Sakti";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Kembali ke Beranda</span>
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
              Sejarah Perguruan
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground section-title">
              Berawal dari Jalan Merpati
            </h1>
          </motion.div>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert max-w-none space-y-6"
          >
            <p className="text-lg text-foreground/90 leading-relaxed">
              Guru Besar (GUBES) lahir di jalan Merpati No. 43 Madiun, Jawa Timur. Sebuah rumah sederhana 
              terselip diantara hiruk pikuk jalan Merpati Madiun. Letaknya hanya sekitar 50 meter dari 
              keramaian pasar. Barangkali banyak orang yang abai dengan bangunan ini, maklum saja rumah itu 
              saat ini tampak sederhana. Namun begitu, rumah ini bukanlah sekadar rumah, tetapi rumah bersejarah 
              yang menjadi tempat kelahiran <span className="text-crimson-light font-semibold">Raden Totong Kiemdarto</span> sebagai 
              pendiri Perguruan <span className="text-gold font-semibold">IKS PI Kera Sakti</span> atau yang 
              biasa disebut oleh seluruh warga Perguruan IKS PI Kera Sakti sebagai Guru Besar (GUBES).
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Sejak usia muda, R. Totong Kiemdarto telah menunjukkan ketertarikan yang kuat terhadap dunia 
              bela diri. Ketertarikan ini muncul dari lingkungan pergaulan serta kegemarannya menonton film-film 
              kungfu yang pada masa itu sangat populer. Dari film-film tersebut, beliau mulai memperhatikan 
              gerakan, teknik, dan strategi bertarung yang ditampilkan oleh para pendekar.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Kecintaan terhadap bela diri membuat beliau mulai mempelajari silat Jawa, yaitu ilmu bela diri 
              tradisional Nusantara yang telah ada sejak masa kerajaan-kerajaan di Indonesia. Pada masa lampau, 
              silat bukan sekadar olahraga atau pertahanan diri, tetapi juga merupakan ilmu yang dimiliki oleh 
              para kesatria kerajaan untuk menjaga kehormatan dan melindungi wilayahnya. Melalui latihan yang 
              tekun, beliau mempelajari berbagai dasar teknik silat seperti kuda-kuda, tangkisan, serangan, 
              serta penguasaan keseimbangan tubuh.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Selain mempelajari silat Jawa, beliau juga mempelajari kungfu. Pengetahuan ini diperoleh melalui 
              pergaulannya dengan masyarakat Tionghoa di Madiun. Lingkungan tersebut memberi kesempatan bagi 
              beliau untuk mengenal berbagai teknik bela diri yang berasal dari tradisi Tiongkok. Namun hingga 
              saat ini, beliau tidak pernah menyebutkan secara rinci siapa saja guru yang mengajarkan kungfu 
              tersebut. Hal ini karena beliau memegang amanah dari para pendekar yang tidak ingin identitas 
              mereka diketahui oleh banyak orang.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Melalui perjalanan panjang dalam mempelajari berbagai ilmu bela diri tersebut, beliau mulai 
              memahami bahwa setiap aliran memiliki kelebihan masing-masing. Silat Jawa memiliki gerakan yang 
              kuat, efektif, dan membumi, sedangkan kungfu memiliki variasi teknik yang lincah, cepat, dan kaya 
              gerakan. Dari pemahaman ini, beliau kemudian mulai menggabungkan berbagai pengalaman latihan 
              tersebut menjadi satu sistem gerakan yang lebih terstruktur.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Proses ini tidak terjadi secara singkat. Beliau terus berlatih, mengamati, mencoba berbagai 
              gerakan, serta menyempurnakan teknik-teknik yang dianggap paling efektif untuk digunakan sebagai 
              bela diri. Dari proses panjang tersebut lahirlah berbagai jurus yang kemudian menjadi dasar 
              latihan dalam perguruan IKS PI Kera Sakti.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Jurus-jurus tersebut dirancang tidak hanya sebagai teknik pertarungan, tetapi juga sebagai sarana 
              pembinaan mental, kedisiplinan, dan pengendalian diri. Oleh karena itu, latihan dalam perguruan 
              tidak hanya menekankan kekuatan fisik, tetapi juga pembentukan karakter dan penguasaan diri.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Dari rumah sederhana di Jalan Merpati, Madiun, tempat beliau tumbuh dan belajar, akhirnya lahir 
              sebuah perguruan bela diri yang kemudian berkembang luas dan memiliki banyak murid. Perjalanan 
              panjang dalam mencari dan menyempurnakan ilmu bela diri itulah yang menjadi dasar berdirinya 
              perguruan <span className="text-gold font-semibold">IKS PI Kera Sakti</span>.
            </p>

            {/* Philosophy Quote */}
            <div className="border-l-4 border-gold pl-6 py-4 my-8 bg-card/50 rounded-r-lg">
              <p className="text-foreground italic text-lg mb-2">
                "Warga IKS dapat patah tangannya, dapat patah kakinya, tetapi tidak dapat ditaklukan 
                selama tidak patah IKS-nya"
              </p>
              <span className="text-gold text-sm">— Falsafah IKS PI Kera Sakti</span>
            </div>
          </motion.article>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default SejarahLengkap;
