import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, Users, MapPin, Hash, Building2, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AnggotaResult {
  id: string;
  nama: string;
  angkatan: string;
  nomor_induk: string;
  cabang: string;
  tingkat: string;
}

// Sample data for demo
const sampleResults: AnggotaResult[] = [
  {
    id: "1",
    nama: "Ahmad Fauzi",
    angkatan: "2018",
    nomor_induk: "IKS-SUMSEL-2018-001",
    cabang: "Palembang",
    tingkat: "Warga",
  },
  {
    id: "2",
    nama: "Budi Santoso",
    angkatan: "2015",
    nomor_induk: "IKS-SUMSEL-2015-042",
    cabang: "Prabumulih",
    tingkat: "Pendekar",
  },
  {
    id: "3",
    nama: "Citra Dewi",
    angkatan: "2020",
    nomor_induk: "IKS-SUMSEL-2020-123",
    cabang: "Lubuklinggau",
    tingkat: "Warga",
  },
];

const tingkatOptions = [
  { value: "all", label: "Semua Tingkat" },
  { value: "pusat", label: "Pusat (Nasional)" },
  { value: "pengda", label: "Pengda (Provinsi)" },
  { value: "cabang", label: "Cabang (Kabupaten/Kota)" },
  { value: "ranting", label: "Ranting (Kecamatan)" },
  { value: "subranting", label: "Sub Ranting (Kelurahan)" },
];

const cabangOptions = [
  { value: "all", label: "Semua Cabang" },
  { value: "palembang", label: "Palembang" },
  { value: "prabumulih", label: "Prabumulih" },
  { value: "lubuklinggau", label: "Lubuklinggau" },
  { value: "pagaralam", label: "Pagar Alam" },
  { value: "banyuasin", label: "Banyuasin" },
  { value: "ogan-ilir", label: "Ogan Ilir" },
  { value: "oki", label: "OKI" },
  { value: "oku", label: "OKU" },
  { value: "oku-timur", label: "OKU Timur" },
  { value: "oku-selatan", label: "OKU Selatan" },
  { value: "muara-enim", label: "Muara Enim" },
  { value: "lahat", label: "Lahat" },
  { value: "empat-lawang", label: "Empat Lawang" },
  { value: "musi-rawas", label: "Musi Rawas" },
  { value: "musi-banyuasin", label: "Musi Banyuasin" },
];

export function CariAnggotaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [searchQuery, setSearchQuery] = useState("");
  const [tingkat, setTingkat] = useState("all");
  const [cabang, setCabang] = useState("all");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<AnggotaResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    setIsSearching(true);
    setHasSearched(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Filter sample results based on search query
    const filtered = sampleResults.filter((anggota) =>
      anggota.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      anggota.nomor_induk.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(filtered);
    setIsSearching(false);
  };

  return (
    <section id="cari-anggota" className="relative py-24 bg-card/50">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-crimson/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
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
            Database Anggota
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground section-title">
            Cari Data Anggota
          </h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Cari dan verifikasi keanggotaan IKS PI Kera Sakti berdasarkan nama, nomor induk, 
            atau tingkat organisasi.
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="member-card p-6 md:p-8">
            <div className="grid gap-6">
              {/* Main Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Cari berdasarkan nama atau nomor induk..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-12 h-14 bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-gold"
                />
              </div>

              {/* Filters */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Tingkat Organisasi</label>
                  <Select value={tingkat} onValueChange={setTingkat}>
                    <SelectTrigger className="h-12 bg-background/50 border-border text-foreground focus:border-gold focus:ring-gold">
                      <Building2 className="w-4 h-4 mr-2 text-muted-foreground" />
                      <SelectValue placeholder="Pilih tingkat" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {tingkatOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value} className="text-foreground hover:bg-muted">
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Cabang</label>
                  <Select value={cabang} onValueChange={setCabang}>
                    <SelectTrigger className="h-12 bg-background/50 border-border text-foreground focus:border-gold focus:ring-gold">
                      <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                      <SelectValue placeholder="Pilih cabang" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border max-h-60">
                      {cabangOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value} className="text-foreground hover:bg-muted">
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Search Button */}
              <Button
                onClick={handleSearch}
                disabled={isSearching}
                className="h-14 bg-gradient-crimson border border-gold hover:opacity-90 font-heading font-semibold tracking-wider uppercase"
              >
                {isSearching ? (
                  <>
                    <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin mr-2" />
                    Mencari...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Cari Anggota
                  </>
                )}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Search Results */}
        {hasSearched && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mt-8"
          >
            {results.length > 0 ? (
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Ditemukan <span className="text-gold font-semibold">{results.length}</span> anggota
                </p>
                {results.map((anggota, index) => (
                  <motion.div
                    key={anggota.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="member-card p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-crimson flex items-center justify-center shrink-0">
                          <Users className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <h4 className="font-heading text-lg font-semibold text-foreground">
                            {anggota.nama}
                          </h4>
                          <p className="text-gold text-sm">{anggota.tingkat}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground block">Angkatan</span>
                          <span className="text-foreground font-medium">{anggota.angkatan}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground block">No. Induk</span>
                          <span className="text-foreground font-medium">{anggota.nomor_induk}</span>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <span className="text-muted-foreground block">Cabang</span>
                          <span className="text-foreground font-medium">{anggota.cabang}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="member-card p-12 text-center">
                <Users className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <h4 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Tidak Ada Hasil
                </h4>
                <p className="text-muted-foreground">
                  Tidak ditemukan anggota dengan kriteria pencarian tersebut.
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Info Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-8 p-6 bg-crimson/5 border border-crimson/20 rounded-lg"
        >
          <h4 className="font-heading text-lg font-semibold text-crimson-light mb-2">
            🔒 Informasi
          </h4>
          <p className="text-muted-foreground text-sm">
            Data anggota hanya dapat diinput oleh admin yang memiliki akses sesuai tingkatan 
            (Sub Ranting, Ranting, Cabang, Pengda). Untuk pendaftaran atau pembaruan data, 
            silakan hubungi pengurus di tingkat masing-masing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
