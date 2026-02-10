import { motion } from "framer-motion";
import { ArrowLeft, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoIkspi from "@/assets/logo-ikspi.png";
import { useEffect } from "react";

const kontakList = [
  { jabatan: "Ketua Pengurus Daerah", nama: "Muslimin", nomor: "085380461528" },
  { jabatan: "Sekretaris", nama: "Muhammad Ali", nomor: "081315083338" },
  { jabatan: "Bendahara", nama: "M. Aulia Dzikri", nomor: "082124045959" },
  { jabatan: "Litbang", nama: "Daru Kusumo", nomor: "081210002165" },
  { jabatan: "Dewan Teknik", nama: "Yung Chen", nomor: "081279844460" },
  { jabatan: "Dewan Kerohanian", nama: "Yanuarman", nomor: "089531377914" },
  { jabatan: "Dewan Seni dan Prestasi", nama: "Royli Davidson", nomor: "082278403685" },
  { jabatan: "Humas", nama: "Octaviansyah", nomor: "082179006239" },
  { jabatan: "Advokasi", nama: "Fitria", nomor: "085377747676" },
];

function formatWhatsAppUrl(nomor: string) {
  const cleaned = nomor.replace(/^0/, "62");
  return `https://wa.me/${cleaned}`;
}

function formatDisplayNomor(nomor: string) {
  return nomor.replace(/(\d{4})(\d{4})(\d+)/, "$1-$2-$3");
}

export default function KontakPerson() {
  useEffect(() => {
    document.title = "Kontak Person - Pengda IKS PI Kera Sakti Sumatera Selatan";
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
              Masa Bakti 2021 s/d 2026
            </span>
            <h1 className="font-heading text-2xl md:text-4xl font-bold leading-tight">
              Kontak Person Pengurus Daerah
            </h1>
            <h2 className="font-heading text-lg md:text-2xl font-bold text-gold mt-2">
              IKS PI Kera Sakti Sumatera Selatan
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Contact List */}
      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-3xl mx-auto space-y-4">
          {kontakList.map((kontak, index) => (
            <motion.a
              key={kontak.nama}
              href={formatWhatsAppUrl(kontak.nomor)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              className="group block"
            >
              <div className="relative p-5 md:p-6 rounded-lg border border-border bg-card/80 hover:border-gold/60 hover:shadow-[0_0_25px_hsla(45,90%,50%,0.12)] transition-all duration-500">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-gold text-xs uppercase tracking-widest block mb-0.5">
                        {kontak.jabatan}
                      </span>
                      <h3 className="font-heading text-base md:text-lg font-bold text-foreground truncate">
                        {kontak.nama}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-sm md:text-base text-muted-foreground group-hover:text-green-400 transition-colors font-mono">
                      {formatDisplayNomor(kontak.nomor)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
