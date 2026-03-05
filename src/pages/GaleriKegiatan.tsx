import { motion } from "framer-motion";
import { ArrowLeft, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import logoIkspi from "@/assets/logo-ikspi.png";
import { useEffect } from "react";

// Import all kegiatan images
import postingan1 from "@/assets/kegiatan/postingan-1.png";
import postingan2 from "@/assets/kegiatan/postingan-2.png";
import postingan3 from "@/assets/kegiatan/postingan-3.png";
import postingan4 from "@/assets/kegiatan/postingan-4.png";
import postingan5 from "@/assets/kegiatan/postingan-5.png";
import postingan6 from "@/assets/kegiatan/postingan-6.png";
import postingan7 from "@/assets/kegiatan/postingan-7.png";
import postingan8 from "@/assets/kegiatan/postingan-8.png";
import postingan9 from "@/assets/kegiatan/postingan-9.png";
import postingan10 from "@/assets/kegiatan/postingan-10.png";
import postingan11 from "@/assets/kegiatan/postingan-11.png";
import postingan12 from "@/assets/kegiatan/postingan-12.png";
import postingan13 from "@/assets/kegiatan/postingan-13.png";
import postingan14 from "@/assets/kegiatan/postingan-14.png";
import postingan15 from "@/assets/kegiatan/postingan-15.png";
import postingan16 from "@/assets/kegiatan/postingan-16.png";
import postingan17 from "@/assets/kegiatan/postingan-17.png";
import postingan18 from "@/assets/kegiatan/postingan-18.png";
import postingan19 from "@/assets/kegiatan/postingan-19.png";
import postingan20 from "@/assets/kegiatan/postingan-20.png";
import postingan21 from "@/assets/kegiatan/postingan-21.png";
import postingan22 from "@/assets/kegiatan/postingan-22.png";
import postingan23 from "@/assets/kegiatan/postingan-23.png";
import postingan24 from "@/assets/kegiatan/postingan-24.png";
import postingan25 from "@/assets/kegiatan/postingan-25.png";
import postingan26 from "@/assets/kegiatan/postingan-26.png";
import postingan27 from "@/assets/kegiatan/postingan-27.png";
import postingan28 from "@/assets/kegiatan/postingan-28.png";
import postingan29 from "@/assets/kegiatan/postingan-29.png";
import postingan30 from "@/assets/kegiatan/postingan-30.png";
import postingan31 from "@/assets/kegiatan/postingan-31.png";
import postingan32 from "@/assets/kegiatan/postingan-32.png";
import postingan33 from "@/assets/kegiatan/postingan-33.png";
import postingan34 from "@/assets/kegiatan/postingan-34.png";
import postingan35 from "@/assets/kegiatan/postingan-35.png";
import postingan36 from "@/assets/kegiatan/postingan-36.png";
import postingan37 from "@/assets/kegiatan/postingan-37.png";
import postingan38 from "@/assets/kegiatan/postingan-38.png";
import postingan39 from "@/assets/kegiatan/postingan-39.png";
import postingan40 from "@/assets/kegiatan/postingan-40.png";
import postingan41 from "@/assets/kegiatan/postingan-41.png";
import postingan42 from "@/assets/kegiatan/postingan-42.png";
import postingan43 from "@/assets/kegiatan/postingan-43.png";
import postingan44 from "@/assets/kegiatan/postingan-44.png";
import postingan45 from "@/assets/kegiatan/postingan-45.png";
import postingan46 from "@/assets/kegiatan/postingan-46.png";
import postingan47 from "@/assets/kegiatan/postingan-47.png";
import postingan48 from "@/assets/kegiatan/postingan-48.png";
import postingan49 from "@/assets/kegiatan/postingan-49.png";
import postingan50 from "@/assets/kegiatan/postingan-50.png";
import postingan51 from "@/assets/kegiatan/postingan-51.png";
import postingan52 from "@/assets/kegiatan/postingan-52.png";
import postingan53 from "@/assets/kegiatan/postingan-53.png";
import postingan54 from "@/assets/kegiatan/postingan-54.png";
import postingan55 from "@/assets/kegiatan/postingan-55.png";
import postingan56 from "@/assets/kegiatan/postingan-56.png";
import postingan57 from "@/assets/kegiatan/postingan-57.png";
import postingan58 from "@/assets/kegiatan/postingan-58.png";
import postingan59 from "@/assets/kegiatan/postingan-59.png";
import postingan60 from "@/assets/kegiatan/postingan-60.png";
import postingan61 from "@/assets/kegiatan/postingan-61.png";
import postingan62 from "@/assets/kegiatan/postingan-62.png";
import postingan63 from "@/assets/kegiatan/postingan-63.png";
import postingan64 from "@/assets/kegiatan/postingan-64.png";
import postingan65 from "@/assets/kegiatan/postingan-65.png";
import postingan66 from "@/assets/kegiatan/postingan-66.png";
import postingan67 from "@/assets/kegiatan/postingan-67.png";
import postingan68 from "@/assets/kegiatan/postingan-68.png";
import postingan69 from "@/assets/kegiatan/postingan-69.png";
import postingan70 from "@/assets/kegiatan/postingan-70.png";
import postingan71 from "@/assets/kegiatan/postingan-71.png";
import postingan72 from "@/assets/kegiatan/postingan-72.png";
import postingan73 from "@/assets/kegiatan/postingan-73.png";
import postingan74 from "@/assets/kegiatan/postingan-74.png";
import postingan75 from "@/assets/kegiatan/postingan-75.png";
import postingan76 from "@/assets/kegiatan/postingan-76.png";
import postingan77 from "@/assets/kegiatan/postingan-77.png";
import postingan78 from "@/assets/kegiatan/postingan-78.png";
import postingan79 from "@/assets/kegiatan/postingan-79.png";
import postingan80 from "@/assets/kegiatan/postingan-80.png";
import postingan81 from "@/assets/kegiatan/postingan-81.png";
import postingan82 from "@/assets/kegiatan/postingan-82.png";
import postingan83 from "@/assets/kegiatan/postingan-83.png";
import postingan84 from "@/assets/kegiatan/postingan-84.png";
import postingan85 from "@/assets/kegiatan/postingan-85.png";
import postingan86 from "@/assets/kegiatan/postingan-86.png";
import postingan87 from "@/assets/kegiatan/postingan-87.png";
import postingan88 from "@/assets/kegiatan/postingan-88.png";
import postingan89 from "@/assets/kegiatan/postingan-89.png";
import postingan90 from "@/assets/kegiatan/postingan-90.png";
import postingan91 from "@/assets/kegiatan/postingan-91.png";
import postingan92 from "@/assets/kegiatan/postingan-92.png";
import postingan93 from "@/assets/kegiatan/postingan-93.png";
import postingan94 from "@/assets/kegiatan/postingan-94.png";
import postingan95 from "@/assets/kegiatan/postingan-95.png";
import postingan96 from "@/assets/kegiatan/postingan-96.png";
import postingan97 from "@/assets/kegiatan/postingan-97.png";
import postingan98 from "@/assets/kegiatan/postingan-98.png";
import postingan99 from "@/assets/kegiatan/postingan-99.png";
import postingan100 from "@/assets/kegiatan/postingan-100.png";
import postingan101 from "@/assets/kegiatan/postingan-101.png";
import postingan102 from "@/assets/kegiatan/postingan-102.png";
import postingan103 from "@/assets/kegiatan/postingan-103.png";
import postingan104 from "@/assets/kegiatan/postingan-104.png";
import postingan105 from "@/assets/kegiatan/postingan-105.png";
import postingan106 from "@/assets/kegiatan/postingan-106.png";
import postingan107 from "@/assets/kegiatan/postingan-107.png";
import postingan108 from "@/assets/kegiatan/postingan-108.png";
import postingan109 from "@/assets/kegiatan/postingan-109.png";
import postingan110 from "@/assets/kegiatan/postingan-110.png";
import postingan140 from "@/assets/kegiatan/postingan-140.png";
import postingan141 from "@/assets/kegiatan/postingan-141.png";
import postingan142 from "@/assets/kegiatan/postingan-142.png";
import postingan143 from "@/assets/kegiatan/postingan-143.png";
import postingan144 from "@/assets/kegiatan/postingan-144.png";
import postingan145 from "@/assets/kegiatan/postingan-145.png";
import postingan146 from "@/assets/kegiatan/postingan-146.png";
import postingan100v2 from "@/assets/kegiatan/postingan-100-2.png";

// Ordered from highest number (top) to lowest (bottom)
const allKegiatan = [
  { src: postingan146, alt: "Ketua Pengda IKS Sumsel Apresiasi Kegiatan Pembagian Takjil Dan Buka Puasa Bersama Warga Dan Pendekar IKS PI Kera Sakti Cabang Ogan Ilir" },
  { src: postingan145, alt: "Jalankan Tugas Pokok Dan Fungsi Pengda IKS PI Kera Sakti Sumatera Selatan Bantu Mediasi Penyelesaian Masalah Cabang Ogan Komering Ilir" },
  { src: postingan144, alt: "Kunjungan Ketua Pengda IKS Sumsel Ke Cabang Lahat Disambut Antusias Oleh Ketua Cabang Beserta Jajaran, Bahas Perkembangan Dan Persiapan Muscab" },
  { src: postingan143, alt: "Penyerahan Sertifikat Tanah Sekretariat" },
  { src: postingan142, alt: "Rapat Kerja Pusat Tahun 2026" },
  { src: postingan141, alt: "Sarasehan Ketua Pengda Se Indonesia" },
  { src: postingan140, alt: "Rapat Terbatas Pengurus Cabang Lubuk Linggau" },
  { src: postingan110, alt: "Ketua Pengda Berkunjung Ke Cabang OKU Timur Mendorong Sikap Saling Menghormati Dan Memperkuat Persatuan Dalam Keberagamaan Sesama Anggota" },
  { src: postingan109, alt: "Pengda IKS Sumsel Apresiasi Atlet, Pelatih Dan Wasit Juri Asal IKS PI Kera Sakti Yang Turut Berpartisipasi Di Kejuaraan Nasional IPSI Cup Sumsel II" },
  { src: postingan108, alt: "Penasihat Pengda IKS Sumsel Bapak Langgeng Suprapto Hadiri Undangan Selamatan Pengesahan IKS PI Kera Sakti Cabang Banyuasin 141/127" },
  { src: postingan107, alt: "Pengesahan Jarak Jauh Angkatan 141 Cabang Ogan Ilir Dan Ranting Lalan (Muba) Dilaksanakan Melalui Virtual Dipimpin Langsung Oleh Ketua Umum" },
  { src: postingan106, alt: "Ketua Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan Bersama Ketua Cabang Muara Enim Membuka Kegiatan IKS PI Kera Sakti Cup Cabang Muara Enim" },
  { src: postingan105, alt: "Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan Menghadiri Kegiatan HUT IKS PI Kera Sakti Ke 45 Tahun Dan Cabang Palembang Ke 33 Tahun" },
  { src: postingan104, alt: "Pengda IKS Sumsel Menerima Perwakilan Pengurus Cabang Muara Enim Untuk Berkonsultasi Membahas Persiapan IKS PI Kera Sakti Cup Cabang Muara Enim" },
  { src: postingan103, alt: "Dewan Teknik Pengda IKS Sumsel Menerima Kue Dari Ketua Cabang Musi Rawas Memperingati HUT IKS PI Kera Sakti Ke 45 Tahun Di Cabang Musi Rawas" },
  { src: postingan102, alt: "Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan Menghadiri Kegiatan Memperingati HUT IKS PI Kera Sakti Ke 45 Tahun Di Cabang Lubuk Linggau" },
  { src: postingan101, alt: "Pengurus Daerah IKS PI Kera Sakti Bersama 2 Ketua Cabang Asal Sumatera Selatan Menghadiri Rakerpus & HUT IKS PI Kera Sakti Ke 45 Tahun" },
  { src: postingan100v2, alt: "Menghadiri Undangan IKS PI Cabang Palembang Dalam Rangka Memperingati Haul Guru Besar IKS PI Kera Sakti H. R. Totong Kiemdarto (2)" },
  { src: postingan99, alt: "Kunjungan Dewan Teknik Pengda IKS Sumsel Ke Cabang Musi Rawas Utara Menyampaikan Rencana Program Kerja Pusat Bersama Pengda IKS Sumsel" },
  { src: postingan98, alt: "Ketua Pengda Bersama Dewan Penasihat Pusat Menghadiri Acara Tasyakuran Pengesahan Angkatan 140 / 126 Sekaligus Melantik Pengcab Banyuasin Yang Baru" },
  { src: postingan97, alt: "Diwakili Dewan Teknik, Pengda IKS Sumsel Menghadiri Undangan Acara Tasyakuran Pengesahan Angkatan 140 / 126 IKS PI Kera Sakti Cabang Ogan Ilir" },
  { src: postingan96, alt: "Ketua Pengda IKS Sumsel Hadir Langsung Untuk Memberikan Dukungan Atlet Yang Sedang Bertanding Pada Kejuaraan Nasional Rektor Cup Unsri 2024" },
  { src: postingan95, alt: "Menjaga Tali Silaturahmi Sekaligus Berkonsolidasi, Ketua Pengda IKS Sumsel Bersama Dewan Penasihat Pusat Mengunjungi IKS Cabang Prabumulih" },
  { src: postingan94, alt: "Ketua Pengda IKS Sumsel Menghadiri Pelaksanaan Musyawarah Cabang (Muscab) Banyuasin Untuk Menentukan Ketua Cabang Periode Selanjutnya" },
  { src: postingan93, alt: "Dewan Teknik Pengda IKS Sumsel Melaksanakan Ujian Kenaikan Tingkat Tk. II Angkatan 126 Dari Sabuk Biru Ke Sabuk Merah Di Cabang Palembang" },
  { src: postingan92, alt: "Ketua Pengda IKS Sumsel Menghadiri Undangan Ketua IPSI Sumatera Selatan Membahas Konsolidasi Untuk Menyelesaikan Permasalahan IPSI OKU" },
  { src: postingan91, alt: "Ketua Pengda IKS Sumsel Beserta Jajaran Menghadiri Undangan UKT 140/126 Sekaligus Melantik Pengurus Cabang OKU Timur Periode 2024 - 2029" },
  { src: postingan90, alt: "Pengda IKS Sumsel Support Atlet IKS PI Kera Sakti Dari Berbagai Daerah Di Sumsel Yang Mengikuti Kejuaraan Pencak Silat IPSI Ogan Ilir Open 2024" },
  { src: postingan89, alt: "Pengda IKS PI Kera Sakti Sumsel Memberikan Ucapan Selamat Kepada Anggota IKS PI Kera Sakti Yang Dilantik Sebagai Anggota DPRD Kab/Prov" },
  { src: postingan88, alt: "Menyambut Dan Menerima Audiensi Anggota Dari Musi Banyuasin Membahas Dan Mencari Solusi Masalah Internal Cabang Yang Sedang Terjadi" },
  { src: postingan87, alt: "Rapat Kordinasi Setelah Pengesahan Selalu Rutin Dilaksanakan Pengurus Pusat Bersama Ketua-Ketua Pengda Membahas Perkembangan Wilayah Masing-Masing" },
  { src: postingan86, alt: "Menghadiri Undangan Dari Sekretaris IPSI Sumatera Selatan Dalam Kegiatan Gabungan Barisan Advokat Dan Jawara Sriwijaya (Bung Baja)" },
  { src: postingan85, alt: "Dewan Teknik Pengda IKS Sumsel Melaksanakan Ujian Kenaikan Tingkat Tk. II Dari Sabuk Biru Ke Sabuk Merah Angkatan 125 Di Cabang Ogan Ilir" },
  { src: postingan84, alt: "Ketua Pengda IKS Sumsel Membesuk Ketua Cabang Palembang Yang Juga Penasihat Pengda IKS Sumsel Yang Sedang Sakit" },
  { src: postingan83, alt: "Dewan Teknik Pengda IKS Sumsel Bersama Dewan Teknik Cabang Ogan Ilir Memberikan Nasihat Dan Motivasi Untuk Warga Angkatan 139 Yang Baru Disahkan" },
  { src: postingan82, alt: "Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan Berduka Cita Atas Wafatnya Orang Tua Dari Sdr. M. Aulia Dzikri (Bendahara Pengda IKS Sumsel)" },
  { src: postingan81, alt: "Support Atlet Ke Jenjang Internasional Sayyidah Aisyah Erika Mendapatkan Medali Perunggu Pada Event Pencak Silat Indonesian Championship 2024" },
  { src: postingan80, alt: "Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan Menghadiri Undangan Cabang Palembang Memperingati Tahun Baru Islam 1 Muharram 1446 H" },
  { src: postingan79, alt: "Menghormati Dan Turut Berbahagia Ketua Pengda Sumsel Menghadiri Secara Langsung Undangan Pernikahan Putri Pertama Ketua Umum IKS PI Kera Sakti" },
  { src: postingan78, alt: "Ketua Pengda Sumsel Dan Ketua Cabang Palembang Mengikuti Pelaksanaan Kegiatan Pengesahan Jarak Jauh Angkatan 139/125 Melalui Zoom Meeting" },
  { src: postingan77, alt: "Ketua Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan Bersama Dewan Teknik Meninjau Langsung Kegiatan UKT 139/125 Di Cabang Ogan Ilir" },
  { src: postingan76, alt: "Dukung Atlet IKS PI Kera Sakti Sumatera Selatan, Ketua Pengda IKS Sumsel Nobar Bersama Sekretaris IPSI Provinsi Sumatera Selatan Bpk. Sidi Darlis" },
  { src: postingan75, alt: "Ketua Pengda Sumsel Bersama Penasihat Pusat Meninjau Pembangunan Sekaligus Menyerahkan Bantuan Dari Pusat Untuk Sekretariat Cabang Palembang" },
  { src: postingan74, alt: "Membesuk Atlet Kejurnas IKS PI Kera Sakti Ke IV Asal Sumatera Selatan Yang Sedang Sakit, Ketua Pengda IKS Sumsel Berikan Dukungan Secara Moril" },
  { src: postingan73, alt: "Mempererat Tali Silaturahmi Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan Melaksanakan Buka Puasa Bersama Cabang Terdekat" },
  { src: postingan72, alt: "Dewan Teknik Bersama Tim Pengda IKS Sumsel Menjalankan Tupoksi Dengan Melaksanakan Kegiatan UKT Tingkat II Di Cabang IKS PI Kera Sakti Ogan Ilir" },
  { src: postingan71, alt: "Pengda IKS Sumsel Hadiri Tasyakuran Pengesahan Warga & Pendekar Cabang Palembang Angkatan 138/124 Perdana Di Sekretariat Cabang Yang Baru" },
  { src: postingan70, alt: "Ketua Pengda IKS Sumsel Melantik Sdr. Slamet Wahyudi Sebagai Ketua Cabang Ogan Komering Ilir Kembali Untuk Periode 2023 - 2028" },
  { src: postingan69, alt: "Pengda IKS Sumsel Bersama Pengurus Cabang OKU Melaksanakan Latihan Bersama Perkenalkan Jurus Tunggal IPSI Ke Anggota IKS PI Kera Sakti" },
  { src: postingan68, alt: "Ketua Pengda Bersama Dewan Penasihat Pusat Meresmikan Gedung Sekretariat Dan Memperingati HUT Perguruan IKS PI Kera Sakti Ke 44 Tahun Di OKU Timur" },
  { src: postingan67, alt: "Ketua Pengda Bersama Dewan Penasihat Pusat Menempuh 8 Jam Perjalanan Untuk Menghadiri HUT Perguruan IKS PI Kera Sakti Ke 44 Tahun Di OKU Selatan" },
  { src: postingan66, alt: "Ketua Pengda Se Indonesia Menghadiri Rapat Kerja Pusat (Rakerpus) Tahun 2024 Dan Memperingati Hari Ulang Tahun Perguruan IKS PI Kera Sakti Ke 44 Tahun" },
  { src: postingan65, alt: "Memperingati Hari Ulang Tahun IKS PI Kera Sakti Ke 44 Tahun Dan Konsolidasi Pengda IKS Sumsel Bersama Cabang Se Musi Rawas Raya" },
  { src: postingan64, alt: "Pelantikan Dan Sumpah Jabatan Pengurus Cabang IKS PI Kera Sakti Ogan Komering Ulu Dilanjutkan Latihan Bersama Pengda IKS Sumsel" },
  { src: postingan63, alt: "Selamatan Pengesahan Angkatan 137 Ketua Pengda IKS Sumsel Melantik Bpk. Wahyudi, S.T Sebagai Warga Kehormatan IKS PI Kera Sakti Cabang Ogan Ilir" },
  { src: postingan62, alt: "Pelantikan Dan Sumpah Jabatan Pengurus Cabang IKS PI Kera Sakti Ogan Ilir Berjalan Dengan Lancar Dan Sukses" },
  { src: postingan61, alt: "Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan Hadir Langsung Untuk Mendukung Para Atlet Cabang Prabumulih Yang Sedang Bertanding" },
  { src: postingan60, alt: "Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan Hadir Langsung Untuk Mendukung Para Atlet Cabang Muara Enim Yang Sedang Bertanding" },
  { src: postingan59, alt: "Menjalankan Tupoksi Pengda IKS Sumsel Membantu Menyelesaikan Berbagai Masalah Yang Tidak Dapat Diselesaikan Oleh Cabang Secara Mandiri" },
  { src: postingan58, alt: "Mewakil Pengda IKS Sumsel Sdr. Yung Chen (Dewan Teknik) Menghadiri Selamatan Pengesahan IKS PI Kera Sakti Cabang Muara Enim" },
  { src: postingan57, alt: "Takziah Di Kediaman Ibu Mertua Ketua Cabang Palembang Yang Juga Merupakan Penasihat Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan" },
  { src: postingan56, alt: "Mewakili Pengda IKS Sumsel Hj. Rita Suryani (Penasihat) Menghadiri Rapat Kordinasi Cabang Musi Rawas, Lubuk Linggau Dan Muratara" },
  { src: postingan55, alt: "IKS PI Kera Sakti Sumatera Selatan Meraih Juara Umum III Kategori Dewasa Pada Kejuaraan Pencak Silat Open Tournament Musi Bergelora Tahun 2023" },
  { src: postingan54, alt: "Ketua Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan Menghadiri Undangan Direktorat Intelkam Polda Sumsel Pada Kegiatan Forum Konsultasi Publik (FKP)" },
  { src: postingan53, alt: "Ketua Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan Beraudiensi Dengan Pengurus Cabang, Ranting Dan Warga IKS PI Kera Sakti Cabang Lahat" },
  { src: postingan52, alt: "Ketua Pengda IKS Sumsel Bersama Dewan Penasihat Pusat Menghadiri Pelaksanaan Musyawarah Cabang IKS PI Kera Sakti Ogan Ilir" },
  { src: postingan51, alt: "Pengda IKS Sumsel Bersama Pengcab Dan Ranting Cabang OKU Melaksanakan Rapat Terbatas Penunjukan Ketua Plt. IKS PI Kera Sakti Cabang OKU" },
  { src: postingan50, alt: "Ketua Pengda IKS Sumsel Bersama Perwakilan Pengurus Pusat Meninjau Dan Menghadiri Syukuran Pembangunan Sekretariat IKS PI Cabang Palembang" },
  { src: postingan49, alt: "Ketua Pengda IKS Sumsel Bersama Ketua Cabang IKS Banyuasin Menghadiri Ujian Kenaikan Tingkat Di Ranting Pulau Rimau Cabang Banyuasin" },
  { src: postingan48, alt: "Ketua Pengda IKS Sumsel Support Atlet Asal IKS PI Kera Sakti Yang Mengikuti Pekan Olahraga Provinsi Sumatera Selatan Tahun 2023 Di Kabupaten Lahat" },
  { src: postingan47, alt: "Support Kegiatan Positif Ketua Pengda IKS PI Kera Sakti Sumsel Menghadiri Kegiatan Lomba Agustusan Yang Diselenggarakan Cabang Ogan Ilir" },
  { src: postingan46, alt: "Menjalankan Tupoksi, Pengda IKS PI Kera Sakti Sumsel Membantu Menyelesaikan Masalah Yang Tidak Dapat Diselesaikan Oleh Cabang Secara Mandiri" },
  { src: postingan45, alt: "Tasyakuran Wujud Rasa Syukur Atas Juara Umum Kontingen IKS PI Kera Sakti Sumatera Selatan Pada Kejurnas IKS PI Kera Sakti Cup IV Pusat Di Madiun" },
  { src: postingan44, alt: "Penataran Wasit Juri Tingkat Provinsi Di Ikuti Perwakilan IKS PI Kera Sakti Sebanyak 3 Orang Di Rekomendasi Oleh Pengda IKS PI Kera Sakti Sumsel" },
  { src: postingan43, alt: "Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan Memberikan Reward Kepada Atlet, Pelatih Dan Cabang Yang Anggotanya (Atlet) Mendapatkan Medali" },
  { src: postingan42, alt: "Kontingen Asal Pengda IKS PI Kera Sakti Sumsel (Tim Oncak Bumi Sriwijaya) Berhasil Menjadi Juara Umum Pada Kejurnas IKS PI Kera Sakti Cup IV" },
  { src: postingan41, alt: "Atlet Binaan Pengurus Daerah IKS PI Kera Sakti Sumatera Selatan Tim Oncak Bumi Sriwijaya" },
  { src: postingan40, alt: "28 Atlet IKS PI Kera Sakti Pengda Sumatera Selatan Full Team Mengisi Semua 36 Kategori Tanding Dan Seni Pada Kejurnas IKS PI Kera Sakti Cup Pusat" },
  { src: postingan39, alt: "Siang Dan Malam Para Pelatih Mengawal Atlet Untuk Meningkatkan Fisik Dan Mengasah Teknik Secara Berkala Dan Terjadwal" },
  { src: postingan38, alt: "Pengda IKS Sumsel Konsisten Latihan Bersama Atlet Persiapan Menghadapi Kejuaraan Nasional IKS PI Kera Sakti Cup Di Pusat Madiun - Jawa Timur" },
  { src: postingan37, alt: "Pengda IKS Sumsel Dan Penasihat Pusat Berbuka Puasa Dan Melaksanakan Konsolidasi Bersama Cabang OKU, OKU Timur, OKU Selatan Dan Muara Enim" },
  { src: postingan36, alt: "Kegiatan Ini Di Ikuti Para Atlet Dari Berbagai Daerah Di Sumatera Selatan Yang Lolos Seleksi Pada Kejurda IKS PI Kera Sakti Cup Sumatera Selatan Th.2022" },
  { src: postingan35, alt: "Pengda IKS Sumsel Melaksanakan Pemusatan Latihan Daerah (Pelatda) Di Palembang Untuk Persiapan Kejurnas IKS PI Kera Sakti Cup IV Di Madiun" },
  { src: postingan34, alt: "Pengda IKS Sumsel Mendukung Semua Atlet Kejurprov Sumatera Selatan Tahun 2023. Ketua Pengda: Semua Kegiatan Yang Positif Wajib Kita Support" },
  { src: postingan33, alt: "Ketua Pengda IKS Sumsel Mengikuti Tasyakuran Pengesahan Angkatan 135/121 Cabang Palembang Bersama Penasihat Pusat Dan Penasihat Pengda" },
  { src: postingan32, alt: "Ketua Pengda IKS Sumsel Bersama Penasihat Pusat Melakukan Kunjungan Dan Sosialisasi Ke Daerah Perairan Cabang Banyuasin, Sumatera Selatan" },
  { src: postingan31, alt: "Pengda IKS Sumsel Mengirimkan Wasit & Juri Untuk Mengikuti Kegiatan Training Of Trainer Peraturan IPSI Tahun 2022 Yang Di Selenggarakan Oleh IPSI Sumsel" },
  { src: postingan30, alt: "Jarak Bukanlah Penghalang Untuk Pengda dan Pengcab IKS PI Kera Sakti Sumsel Melaksanakan Rakorda Merujuk Kegiatan Rakerpus" },
  { src: postingan29, alt: "Ketua Pengda IKS Sumsel Menyerahkan Laporan Pertanggung Jawaban (LPJ) ke Pengurus Pusat IKS PI Kera Sakti" },
  { src: postingan28, alt: "Ketua Pengda IKS Sumsel Menghadiri Perayaan Ulang Tahun (Haul) Perguruan IKS PI Kera Sakti ke 43 di Padepokan Pusat Madiun" },
  { src: postingan27, alt: "Ketua Umum dan Jajaran Bersama Para Peserta Penyegaran Wasit dan Juri Berziarah ke Makam Guru Besar di Astana Luhur" },
  { src: postingan26, alt: "Utusan Pengda IKS Sumsel Antusias Mengikuti Penyegaran Wasit dan Juri IKS PI Kera Sakti oleh Pengurus Pusat" },
  { src: postingan25, alt: "Cabang Palembang Berhasil Menjadi Juara Umum I Pada Kejuaraan Daerah IKS PI Kera Sakti Cup Sumatera Selatan" },
  { src: postingan24, alt: "Pengurus Daerah IKS PI Kera Sakti Sumsel Perdana dan Sukses Menyelenggarakan Kejuaraan Daerah IKS PI Kera Sakti Cup" },
  { src: postingan23, alt: "Pengda IKS Sumsel Bersama Ketua Cabang Muara Enim Memberikan Penjelasan dan Pembinaan Tentang AD ART dan PP Th.2022" },
  { src: postingan22, alt: "Ramah Tamah Para Ketua Pengda Dari Berbagai Provinsi Sharing Perkembangan IKS PI Kera Sakti Sebelum Pemindahan Makam" },
  { src: postingan21, alt: "Ketua Pengda IKS Sumsel Bersama Ketua Pengda Jatim, Jateng, Banten, Kalsel dan Kalteng Mengangkat Peti Jenazah Guru Besar" },
  { src: postingan20, alt: "Pengda IKS Sumsel Peduli Kepada Senior yang Sedang Sakit atau pun Tertimpa Musibah" },
  { src: postingan19, alt: "Ketua Pengda Memberikan Buku AD ART dan PP IKS PI Kera Sakti Terbaru Tahun 2022" },
  { src: postingan18, alt: "Pengda dan Pengcab IKS PI Kera Sakti Sumsel Melaksanakan Rapat Konsolidasi Merujuk Kegiatan di Pusat" },
  { src: postingan17, alt: "Bersama Pengurus Pusat Meninjau Lokasi Pemindahan Makam Guru Besar dari TPU Sobrah Menuju Padepokan IKS" },
  { src: postingan16, alt: "Pengda IKS Sumsel Menyerahkan Hasil Rakerda Sumsel Th.2022 ke Ketua Umum Pada Saat Konsolidasi di Madiun" },
  { src: postingan15, alt: "Dirgahayu Republik Indonesia - Merdeka Dalam Perjuangan Mengendalikan Diri di Dalam Beladiri" },
  { src: postingan14, alt: "Pengda IKS Sumsel Memberikan Uang Pembinaan (Reward) Kepada Pelatih Atlet yang Berprestasi" },
  { src: postingan13, alt: "Ketua Pengda IKS Sumsel Memberikan Uang Pembinaan (Reward) Kepada Atlet Berprestasi Qurrotul A'yuni" },
  { src: postingan12, alt: "Ketua Pengda IKS Sumsel Menerima Surat Keputusan Penetapan Perguruan IKS PI Kera Sakti Sebagai Anggota IPSI Sumsel" },
  { src: postingan11, alt: "Pengda IKS Sumsel dan Perwakilan Pengpus Membantu Pelaksanaan Musyawarah Cabang (Muscab) di OKU Selatan" },
  { src: postingan10, alt: "Kunjungan ke Cabang-Cabang di Wilayah Sumsel" },
  { src: postingan9, alt: "Menghadiri Undangan UKT Angkatan 133/119 di Beberapa Cabang di Sumsel" },
  { src: postingan8, alt: "Dewan Teknik Pengda IKS Sumsel Memberikan Bimbingan kepada Para Atlet" },
  { src: postingan7, alt: "Pengda IKS Sumsel Melakukan Registrasi Ulang ke IPSI Provinsi Sumsel" },
  { src: postingan6, alt: "Melupakan Segala Permasalahan dan Saling Memaafkan untuk Bersatu" },
  { src: postingan5, alt: "Pengda Melakukan Mediasi Antara Dua Kelompok Warga di Cabang Ogan Ilir" },
  { src: postingan4, alt: "Dewan Penasihat Pusat Mendukung Penuh Kegiatan Pengda Sumsel" },
  { src: postingan3, alt: "Pengda Melaksanakan Acara Buka Puasa dan Silaturahmi Bersama Cabang Terdekat" },
  { src: postingan2, alt: "Pengda IKS Sumsel Memberikan Bimbingan Kepada Pengcab Musi Banyuasin" },
  { src: postingan1, alt: "Melaksanakan Tupoksi, Pengda IKS PI Kera Sakti Sumsel Membantu Menyelesaikan Berbagai Masalah" },
];

export default function GaleriKegiatan() {
  useEffect(() => {
    document.title = "Galeri Kegiatan - IKS PI Kera Sakti Sumatera Selatan";
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
              Dokumentasi
            </span>
            <h1 className="font-heading text-2xl md:text-4xl font-bold leading-tight">
              Galeri Kegiatan & Berita
            </h1>
            <h2 className="font-heading text-lg md:text-2xl font-bold text-gold mt-2">
              IKS PI Kera Sakti Sumatera Selatan
            </h2>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-8 mt-8"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-gold">{allKegiatan.length}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Total Dokumentasi</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <Camera className="w-5 h-5 text-gold" />
          <h2 className="font-heading text-lg md:text-xl font-bold text-gold uppercase tracking-widest">
            Semua Kegiatan
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allKegiatan.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="group"
            >
              <div className="relative rounded-xl overflow-hidden border-2 border-border group-hover:border-gold/60 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_30px_hsla(45,90%,50%,0.2)]">
                <div className="aspect-square overflow-hidden bg-card">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-heading text-sm text-foreground leading-snug line-clamp-3">
                    {item.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
