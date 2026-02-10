import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Mail, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroBg from "@/assets/hero-bg.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: "Login gagal",
          description: error.message,
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      // Verify admin role via RPC
      const { data: hasAdmin } = await supabase.rpc("has_role", {
        _user_id: data.user.id,
        _role: "admin",
      });

      if (hasAdmin) {
        navigate("/admin");
      } else {
        await supabase.auth.signOut();
        toast({
          title: "Akses ditolak",
          description: "Anda tidak memiliki akses admin.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Terjadi kesalahan",
        description: "Silakan coba lagi nanti.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div
        className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col justify-center p-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-crimson flex items-center justify-center border-2 border-gold">
                <span className="font-heading font-bold text-foreground text-2xl">IKS</span>
              </div>
              <div>
                <h1 className="font-heading font-bold text-2xl text-foreground">
                  IKS PI KERA SAKTI
                </h1>
                <p className="text-gold">Sumatera Selatan</p>
              </div>
            </div>
            <blockquote className="text-2xl font-display italic text-foreground/90 leading-relaxed max-w-md">
              "Ke Empat Penjuru Kita Cari Saudara, Tapi Kalau Musuh Ada{" "}
              <span className="text-crimson-light not-italic font-semibold">
                Pantang Tunduk Kepala
              </span>
              "
            </blockquote>
          </motion.div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12 bg-background">
        <div className="w-full max-w-md mx-auto">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Mobile logo */}
            <div className="flex items-center space-x-3 mb-8 lg:hidden">
              <div className="w-12 h-12 rounded-full bg-gradient-crimson flex items-center justify-center border-2 border-gold">
                <span className="font-heading font-bold text-foreground text-lg">IKS</span>
              </div>
              <div>
                <h1 className="font-heading font-bold text-lg text-foreground">
                  IKS PI KERA SAKTI
                </h1>
                <p className="text-gold text-sm">Sumatera Selatan</p>
              </div>
            </div>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Login Admin
            </h2>
            <p className="text-muted-foreground mb-8">
              Masuk ke panel admin untuk mengelola data anggota
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@ikspisumsel.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-gold"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-gold"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-crimson border border-gold hover:opacity-90 font-heading font-semibold tracking-wider uppercase"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                ) : (
                  "Masuk"
                )}
              </Button>
            </form>

            <div className="mt-8 p-4 bg-gold/5 border border-gold/20 rounded-lg">
              <p className="text-muted-foreground text-sm">
                <span className="text-gold font-semibold">Catatan:</span> Akses admin hanya 
                tersedia untuk pengurus yang telah terdaftar. Hubungi administrator jika 
                Anda memerlukan akses.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
