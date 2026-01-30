import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Sejarah", href: "#sejarah" },
  { name: "Pengurus", href: "#pengurus" },
  { name: "Kegiatan", href: "#kegiatan" },
  { name: "Cari Anggota", href: "#cari-anggota" },
  { name: "Kontak", href: "#kontak" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-gold/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-crimson flex items-center justify-center border-2 border-gold">
                <span className="font-heading font-bold text-foreground text-lg">IKS</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading font-bold text-lg text-foreground leading-tight">
                  IKS PI <span className="text-gold">KERA SAKTI</span>
                </h1>
                <p className="text-xs text-muted-foreground">Sumatera Selatan</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium text-foreground/80 hover:text-gold transition-colors group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden sm:flex items-center space-x-2 border-gold/50 text-gold hover:bg-gold/10 hover:border-gold"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground hover:text-gold transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 top-20 bottom-0 w-full max-w-sm bg-card border-l border-gold/20"
            >
              <div className="p-6 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-heading text-foreground hover:text-gold transition-colors py-2 border-b border-border"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full mt-4 bg-gradient-crimson border border-gold hover:opacity-90">
                    <User className="w-4 h-4 mr-2" />
                    Login Admin
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
