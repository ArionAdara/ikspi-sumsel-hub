import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Calendar, Trophy, Users, MapPin, Shield } from "lucide-react";
import logoIkspi from "@/assets/logo-ikspi.png";
import { useEffect } from "react";

const programKerja = [
  {
    year: "2021",
    icon: Shield,
    items: [
      "Menyusun struktur Kepengurusan Pengda Periode 2021 s.d 2026.",
    ],
  },
  {
    year: "2022",
    icon: Users,
    items: [
      "Mengikuti Musyawarah Besar (MUBES) Tahun 2022 dan Peringatan HUT IKS PI Kera Sakti ke 42 tahun di Padepokan IKS PI Kera Sakti Pusat, Madiun - Jawa Timur.",
      "Pelantikan Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan secara langsung oleh Ketua Umum di Padepokan IKS PI Kera Sakti Pusat, Madiun - Jawa Timur.",
      "Mendaftarkan Perguruan IKS PI Kera Sakti ke IPSI Sumatera Selatan.",
      "Memberikan bimbingan dan pembinaan kepada atlet asal IKS PI Kera Sakti yang mengikuti seleksi POPDA Sumsel di Sekayu, Musi Banyuasin.",
      "Menghadiri undangan UKT di cabang Musi Banyuasin.",
      "Membantu pelaksanaan Musyawarah Cabang (Muscab) OKU Selatan.",
      "Membantu mediasi dan audiensi untuk menyelesaikan permasalahan internal cabang Musi Banyuasin.",
      "Membantu mediasi dan audiensi untuk menyelesaikan permasalahan internal cabang Ogan Ilir.",
      "Mengadakan buka puasa dan silaturahmi bersama cabang Palembang, Banyuasin dan Ogan Ilir.",
      "Melaksanakan Rapat Kerja Daerah Tahun 2022 Pengda bersama seluruh Cabang se Sumatera Selatan.",
      "Mengikuti Rapat Konsolidasi di Pusat sekaligus menyerahkan laporan hasil Rakerda ke Ketua Umum.",
      "Mengadakan Rapat Konsolidasi Pengda bersama Cabang menyampaikan hasil Rapat Konsolidasi di pusat melalui Zoom Meeting.",
      "Membesuk anggota senior yang sedang sakit.",
      "Mensukseskan pemindahan makan Guru Besar ke Astana Luhur Padepokan IKS PI Kera Sakti Pusat, Madiun - Jawa Timur.",
      "Mensosialisaikan AD ART dan Peraturan Perguruan Tahun 2022 dan audiensi di Lubai, Cabang Muara Enim.",
      "Pelaksanaan Kejuaraan Daerah (Kejurda) IKS PI Kera Sakti Cup Sumatera Selatan Tahun 2022.",
    ],
  },
  {
    year: "2023",
    icon: Trophy,
    items: [
      "Membentuk Tim Atlet Pelatda Sumsel untuk persiapan menghadapi Kejurnas IKS PI Kera Sakti Cup IV Pusat.",
      "Memfasilitasi anggota mengikuti refreshing wasit dan juri di Padepokan IKS PI Kera Sakti Pusat, Madiun - Jawa Timur.",
      "Mengikuti Rapat Kerja Pusat (Rakerpus) Tahun 2023 dan Peringatan HUT IKS PI Kera Sakti ke 43 tahun di Padepokan IKS PI Kera Sakti Pusat, Madiun - Jawa Timur.",
      "Mengadakan Rapat Konsolidasi Pengda bersama Cabang menyampaikan hasil Rakerpus Tahun 2023 dan LPJ Pengda Sumsel melalui Zoom Meeting.",
      "Mengirimkan Wasit Juri dan Pelatih lisensi IPSI Provinsi mengikuti Training Of Trainer (TOT) Peraturan IPSI Tahun 2022.",
      "Menghadiri undangan tasyakuran pengesahan angkatan 135/121 sekaligus mensosialisaikan AD ART dan Peraturan Perguruan Tahun 2022 dan audiensi di Jalur 8, Cabang Banyuasin.",
      "Menghadiri tasyakuran pengesahan angkatan 135/121 di Cabang Palembang.",
      "Pengda Sumsel support atlet yang mengikuti Kejurprov Sumsel.",
      "Mengadakan pemusatan latihan daerah (Pelatda) untuk persiapan Kejurnas IKS PI Kera Sakti Cup IV Pusat.",
      "Mengadakan buka puasa dan silaturahmi bersama cabang OKU, OKU Selatan, OKU Timur, OKI dan Muara Enim.",
      "Memfasilitasi 46 orang Tim Oncak Bumi Sriwijaya mengikuti Kejuaraan Nasional (Kejurnas) IKS PI Kera Sakti Cup IV Pusat.",
      "Pengda Sumsel menjadi Juara Umum dengan perolehan medali 7 emas, 6 perak, 3 perunggu.",
      "Membentuk tim pengda untuk membantu kepengurusan pengda IKS PI Kera Sakti Sumsel.",
      "Mengkordinir dan memfasilitasi anggota untuk mengikuti penataran wasit juri dan pelatih berlisensi IPSI tingkat provinsi.",
      "Melaksanakan Tasyakuran atas Juara Umum Kejurnas IKS PI Kera Sakti Cup IV Pusat.",
      "Membantu mediasi dan audiensi untuk menyelesaikan permasalahan internal cabang Muara Enim.",
      "Menghadiri undangan perayaan agustusan oleh cabang Ogan Ilir.",
      "Memberikan bimbingan dan pembinaan kepada atlet asal IKS PI Kera Sakti yang mengikuti Porprov Sumsel Tahun 2023 di Lahat.",
      "Menghadiri tasyakuran pengesahan angkatan 137/123 di Cabang Ogan Ilir.",
      "Meninjau dan menghadiri tasyakuran pembangunan sekretariat cabang Palembang.",
      "Menghadiri undangan UKT angkatan 137/123 sekaligus mensosialisaikan AD ART dan Peraturan Perguruan Tahun 2022 dan audiensi di Pulau Rimau, Cabang Banyuasin.",
      "Menghadiri undangan Rapat Terbatas Pengurus Cabang dan Ranting OKU.",
      "Menghadiri undangan Musyawarah Cabang (Muscab) IKS PI Kera Sakti Cabang Ogan Ilir.",
      "Menghadiri undangan audiensi Ranting dan Pengurus Cabang Lahat.",
      "Menghadiri undangan Direktorat Intelkam Polda Sumsel pada kegiatan Forum Konsultasi Publik (FKP).",
      "Pengda Sumsel support atlet yang mengikuti Kejuaraan Pencak Silat Open Tournament Musi Begelora Dirgahayu Sumpah Pemuda 2023.",
      "Menghadiri Rapat Koordinasi Cabang Se Mura Raya (Musi Rawas, Musi Rawas Utara dan Lubuk Linggau).",
      "Menghadiri tasyakuran pengesahan angkatan 137/123 di Cabang Muara Enim.",
      "Membantu mediasi dan audiensi untuk menyelesaikan permasalahan internal cabang Lahat.",
      "Pengda Sumsel support atlet yang mengikuti Kejuaraan Pencak Silat IPSI Kota Prabumulih.",
      "Melaksanakan Pelantikan Pengurus Cabang Ogan Ilir yang baru.",
      "Melaksanakan Pelantikan Pengurus Cabang Ogan Komering Ulu (OKU) yang baru.",
    ],
  },
  {
    year: "2024",
    icon: Calendar,
    items: [
      "Melaksanakan peringatan HUT IKS PI Kera Sakti ke 44 Tahun dilanjutkan konsolidasi bersama Cabang Se Mura Raya di Musi Rawas.",
      "Mengikuti Rapat Kerja Pusat (Rakerpus) Tahun 2024 dan Peringatan HUT IKS PI Kera Sakti ke 44 tahun di Padepokan IKS PI Kera Sakti Pusat, Madiun - Jawa Timur.",
      "Melaksanakan peringatan HUT IKS PI Kera Sakti ke 44 Tahun dilanjutkan konsolidasi bersama Cabang OKU Selatan dan OKU di Warkuk, OKU Selatan.",
      "Menghadiri undangan peringatan HUT IKS PI Kera Sakti ke 44 Tahun dilanjutkan meresmikan gedung sekretariat Cabang OKU Timur.",
      "Melaksanakan Latihan Bersama untuk mengenalkan jurus IPSI di Cabang OKU.",
      "Melaksanakan Pelantikan Pengurus Cabang Ogan Komering Ilir (OKI) yang baru.",
      "Menghadiri tasyakuran pengesahan angkatan 138/124 di Cabang Palembang.",
      "Melaksanakan UKT Tingkat II Se Sumatera Selatan angkatan 124.",
      "Mengadakan buka puasa dan silaturahmi bersama cabang Palembang, Banyuasin dan Ogan Ilir.",
      "Membesuk atlet Pelatda Sumsel yang sedang sakit.",
      "Meninjau pembangunan sekaligus menyerahkan bantuan dari pusat untuk pembangunan sekretariat cabang Palembang.",
      "Pengda Sumsel support atlet yang mengikuti Kejuaraan Pencak Silat Sumatera Championship Tingkat Nasional.",
      "Menghadiri undangan UKT angkatan 137/123 sekaligus audiensi di Indralaya, Cabang Ogan Ilir.",
      "Menghadiri undangan pernikahan Putri Ketua Umum di Madiun, Jawa Timur.",
      "Menghadiri undangan peringatan Tahun Baru Islam 1 Muharam di sekretariat cabang Palembang.",
      "Pengda Sumsel support atlet yang mengikuti Event Pencak Silat Indonesian Championship 2024.",
      "Menghadiri undangan UKT angkatan 139/125 sekaligus memberikan pembinaan atlet di Indralaya, Cabang Ogan Ilir.",
      "Membesuk anggota senior yang sedang sakit.",
      "Melaksanakan UKT Tingkat II Se Sumatera Selatan angkatan 125.",
      "Menghadiri undangan kegiatan Gabungan Barisan Advokat dan Jawara Sriwijaya (BUNG BAJA).",
      "Mengikuti Rapat Koordinasi Pusat bersama Pengda rutinitas setelah pengesahan.",
      "Menerima audiensi anggota IKS PI Kera Sakti dari cabang Musi Banyuasin.",
      "Pengda Sumsel support atlet yang mengikuti Kejuaraan Pencak Silat IPSI Ogan Ilir Open 2024.",
      "Menghadiri undangan UKT angkatan 140/126 sekaligus memberikan pembinaan atlet di Belitang, OKU Timur.",
      "Menghadiri undangan rapat terbatas Ketua IPSI Sumatera Selatan.",
      "Melaksanakan UKT Tingkat II Se Sumatera Selatan angkatan 126.",
      "Menghadiri undangan Musyawarah Cabang (Muscab) IKS PI Kera Sakti Cabang Banyuasin.",
      "Menghadiri undangan konsolidasi cabang Prabumulih.",
      "Pengda Sumsel support atlet yang mengikuti Kejuaraan Nasional Rektor UNSRI 2024.",
      "Menghadiri undangan tasyakuran pengesahan angkatan 140/126 sekaligus audiensi di Indralaya, Cabang Ogan Ilir.",
      "Menghadiri undangan tasyakuran pengesahan angkatan 140/126 sekaligus audiensi di Cabang Banyuasin.",
      "Kunjungan Pengda Sumsel ke cabang Musi Rawas Utara (Muratara).",
      "Menghadiri undangan peringatan Haul Guru Besar di sekretariat cabang Palembang.",
    ],
  },
  {
    year: "2025",
    icon: Trophy,
    items: [
      "Mengikuti Rapat Kerja Pusat (Rakerpus) Tahun 2025 dan Peringatan HUT IKS PI Kera Sakti ke 45 tahun di Padepokan IKS PI Kera Sakti Pusat, Madiun - Jawa Timur.",
      "Menghadiri undangan peringatan HUT IKS PI Kera Sakti ke 45 Tahun di Cabang Lubuk Linggau.",
      "Menghadiri undangan peringatan HUT IKS PI Kera Sakti ke 45 Tahun di Cabang Musi Rawas.",
      "Menerima audiensi anggota IKS PI Kera Sakti dari cabang Muara Enim.",
      "Menghadiri undangan peringatan HUT IKS PI Kera Sakti ke 45 Tahun di Cabang Palembang.",
      "Membuka kegiatan Kejuaran Cabang IKS PI Kera Sakti Cup Muara Enim.",
      "Melaksanakan pengesahan Jarak Jauh angkatan 141 secara langsung oleh Ketua Umum melalui Zoom Meeting.",
      "Menghadiri undangan tasyakuran pengesahan angkatan 141/127 sekaligus audiensi di Cabang Banyuasin.",
      "Pengda Sumsel support atlet yang mengikuti Kejuaraan Nasional IPSI Cup Sumsel.",
      "Kunjungan ke cabang OKU Timur menjalankan petunjuk dan arah (Jukrah) dari pengurus pusat.",
      "Mengadakan buka puasa dan silaturahmi bersama Tim Pengda.",
      "Pembelian aset fasilitas organisasi sebidang tanah untuk rencana gedung administrasi dan kegiatan perguruan (Sekretariat Sumatera Selatan) seluas 900m.",
      "Kunjungan ke Padepokan IKS PI Kera Sakti Pusat sekaligus mengurus proses balik nama Sertifikat Hak Milik tanah sekretariat.",
      "Halal Bihalal sekaligus rapat terbatas Pengurus Daerah.",
      "Menghadiri undangan Musprop dan pengukuhan Persinas ASAD Sumatera Selatan.",
      "Menghadiri UKT Tingkat II angkatan 127 di Padepokan IKS PI Kera Sakti Pusat, Madiun - Jawa Timur.",
      "Menghadiri pengesahan angkatan 141/127 di Padepokan IKS PI Kera Sakti Pusat, Madiun - Jawa Timur.",
      "Membantu penyelesaian permasalahan cabang OKU Timur dengan organisasi pencak silat setempat.",
      "Menghadiri undangan UKT angkatan 142/128 sekaligus meninjau tanah sekretariat di Sungai Lilin, Cabang Musi Banyuasin.",
      "Memfasilitasi lahan sekretariat pengda untuk UKT angkatan 142/128.",
      "Menghadiri undangan Talkshow Tentara dan Modernitas di Jasdam II Sriwijaya.",
      "Menghadiri undangan tasyakuran pengesahan angkatan 142/128 di Cabang Banyuasin.",
      "Mengadakan Rapat Kordinasi Pengda bersama Cabang menyampaikan hasil Rakerpus Tahun 2023 dan LPJ Pengda Sumsel melalui Zoom Meeting.",
      "Menghadiri undangan upacara pembukaan Latihan Kader Pelatih Pencak Silat Militer (PSM) Tersebar Tahun 2025 KOREM 004/GAPO.",
      "Menghadiri undangan tasyakuran pengesahan angkatan 142/128 sekaligus audiensi di Indralaya, Cabang Ogan Ilir.",
      "Menerima audiensi sekaligus rapat terbatas Pengurus Cabang IKS PI Kera Sakti Muara Enim.",
      "Mengirimkan Tim Pengda Sumsel untuk mengikuti Pelatihan Dewan Teknik dan Seni Prestasi.",
      "Mengikuti rapat kordinasi rutinitas setelah pengesahan melalui Zoom Meeting.",
      "Meresmikan kegiatan Kejuaraan Cabang IKS PI Kera Sakti Cup OKU Timur Tahun 2025.",
      "Peletakkan Batu Pertama sekretariat cabang Musi Banyuasin bersama Ketua Umum.",
      "Meninjau tanah sekretariat IKS PI Kera Sakti Sumatera Selatan bersama Ketua Umum dan rombongan.",
      "Meresmikan Kejuaraan Cabang (Kejurcab) IKS PI Kera Sakti Cup II Ogan Ilir bersama Ketua Umum.",
      "Meresmikan gedung sekretariat cabang Palembang bersama Ketua Umum.",
      "Mengadakan pelatihan Sekretaris, Humas dan Litbang se Sumatera Selatan.",
      "Mengadakan kegiatan Silaturahmi Akbar III Se Sumatera Selatan dihadiri Ketua Umum.",
      "Mengadakan Kejurnas Piala Ketua Umum IKS PI Kera Sakti Tahun 2025 dihadiri Ketua Umum.",
      "Mengadakan Kejurda IKS PI Kera Sakti Cup II Sumatera Selatan Tahun 2025 dihadiri Ketua Umum.",
      "Melaksanakan UKT Tingkat II Se Sumatera Selatan dihadiri Ketua Umum.",
      "Mengadakan Pengesahan Jarak Dekat angkatan 143/129 Se Sumatera Selatan.",
    ],
  },
  {
    year: "2026",
    icon: MapPin,
    items: [
      "Menghadiri undangan rapat terbatas Pengurus Cabang Lubuk Linggau.",
      "Mengikuti Rapat Kerja Pusat (Rakerpus) Tahun 2026 dan Peringatan HUT IKS PI Kera Sakti ke 46 tahun di Padepokan IKS PI Kera Sakti Pusat, Madiun - Jawa Timur.",
      "Menyerahkan Sertifikat Tanah Sekretariat Sumatera Selatan ke Ketua Umum IKS PI Kera Sakti.",
      "Kunjungan ke cabang Lahat tinjau persiapan Musyawarah Cabang (Muscab).",
    ],
  },
];

export default function ProgramKerja() {
  useEffect(() => {
    document.title = "Program Kerja - Pengda IKS PI Kera Sakti Sumatera Selatan";
    window.scrollTo(0, 0);
  }, []);

  const totalProgram = programKerja.reduce((acc, y) => acc + y.items.length, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson/20 via-background to-background" />
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
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Kembali ke Beranda</span>
          </Link>

          <div className="flex flex-col items-center text-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src={logoIkspi}
              alt="Logo IKS PI Kera Sakti"
              className="w-24 h-24 md:w-32 md:h-32 object-contain mb-6"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-gold text-sm uppercase tracking-widest mb-3 block">
                Periode 2021 s/d 2026
              </span>
              <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Program Kerja{" "}
                <span className="text-gold">Pengurus Daerah</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                IKS PI Kera Sakti Sumatera Selatan
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-6 md:gap-10 mt-10"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-gold">{programKerja.length}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Tahun</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-gold">{totalProgram}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Program Terlaksana</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 pb-24">
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent" />

          {programKerja.map((yearData, yearIndex) => {
            const Icon = yearData.icon;
            return (
              <motion.div
                key={yearData.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: yearIndex * 0.1 }}
                className="relative pl-14 md:pl-20 mb-12 last:mb-0"
              >
                {/* Year marker */}
                <div className="absolute left-0 md:left-3.5 top-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-crimson border-2 border-gold flex items-center justify-center shadow-lg shadow-crimson/30 z-10">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
                </div>

                {/* Year header */}
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-gold">
                    {yearData.year}
                  </h2>
                  <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold font-medium">
                    {yearData.items.length} program
                  </span>
                </div>

                {/* Items */}
                <div className="space-y-2">
                  {yearData.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.03 }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-card/80 transition-colors group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
