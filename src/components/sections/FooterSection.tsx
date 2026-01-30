import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Mail, ExternalLink } from "lucide-react";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="relative bg-card border-t border-gold/20">
      {/* Top decorative line */}
      <div className="h-1 bg-gradient-gold" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-crimson flex items-center justify-center border-2 border-gold">
                <span className="font-heading font-bold text-foreground text-xl">IKS</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground">
                  IKS PI KERA SAKTI
                </h3>
                <p className="text-gold text-sm">Pengurus Daerah Sumatera Selatan</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Perguruan IKS PI Kera Sakti adalah organisasi pencak silat yang menggabungkan 
              seni beladiri kungfu Tiongkok dengan teknik pencak silat Indonesia, didirikan 
              pada 15 Januari 1980 di Madiun.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/humas.ikspi.sumsel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-background transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6285380461528"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-background transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-6">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Beranda", href: "#beranda" },
                { name: "Sejarah", href: "#sejarah" },
                { name: "Pengurus", href: "#pengurus" },
                { name: "Kegiatan", href: "#kegiatan" },
                { name: "Cari Anggota", href: "#cari-anggota" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-6">
              Sekretariat
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Jln. Sarjana, No. 51, Rt.006 LK. III<br />
                  Kel. Timbangan, Kec. Indralaya Utara<br />
                  Kab. Ogan Ilir, Sumatera Selatan 30662
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a
                  href="https://wa.me/6285380461528"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors text-sm"
                >
                  0853 8046 1528 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-gold shrink-0" />
                <a
                  href="https://instagram.com/humas.ikspi.sumsel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors text-sm"
                >
                  @humas.ikspi.sumsel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © {currentYear} Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan. 
              Hak Cipta Dilindungi.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Website:</span>
              <a
                href="https://ikspisumsel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline inline-flex items-center gap-1"
              >
                ikspisumsel.com
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
