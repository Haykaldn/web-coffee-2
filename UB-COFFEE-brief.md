# UB COFFEE - Brief & Spesifikasi Website

Dokumen ini merangkum konsep, desain, isi halaman, dan langkah pengembangan website UB COFFEE. Versi ini mengikuti proyek **Next.js** yang pemesanannya diarahkan ke **WhatsApp** dan petanya memakai **Google Maps** UB Coffee.

---

## 1. Ringkasan proyek

| Hal | Isi |
|---|---|
| Nama | UB COFFEE |
| Alamat | Gedung Layanan Bersama Lantai 1, Jl. MT. Haryono No. 169, Ketawanggede, Kec. Lowokwaru, Kota Malang 65145 |
| Lokasi singkat | Di tepi Jl. MT. Haryono, dekat gerbang masuk KPRI UB |
| Instagram | @ub_coffee |
| Jenis | Website kafe (perkenalan menu + pemesanan lewat WhatsApp) |
| Target utama | Dosen |
| Target kedua | Mahasiswa / Gen Z |
| Tujuan | Memperkenalkan kafe, menampilkan menu dengan jelas, dan memudahkan pemesanan tanpa antre |

## 2. Prinsip desain

Tantangannya: **mudah dibaca oleh dosen, tetapi tetap terasa modern dan hidup untuk Gen Z.**

1. **Teks besar dan kontras tinggi.** Ukuran dasar 18 px, teks gelap di atas latar terang.
2. **Tombol besar dan berlabel jelas.** Tulisan "Pesan sekarang", bukan ikon keranjang saja.
3. **Navigasi tampil langsung**, tanpa menu hamburger, 5 tautan.
4. **Pengguna mengontrol ukuran teks** lewat tombol A- / A+ (pilihan disimpan di perangkat).
5. **Interaksi membantu, bukan sekadar hiasan.** Gerakan bisa dijeda, dan mati otomatis bila perangkat memakai pengaturan "reduce motion".
6. **Hindari:** carousel yang bergeser sendiri tanpa kontrol, popup yang mengganggu, teks kecil di atas foto, dan animasi berlebihan.

## 3. Sistem desain

### Warna

| Peran | Mode terang | Mode gelap |
|---|---|---|
| Latar halaman | `#F4F6F2` | `#0F1724` |
| Teks utama | `#16202F` | `#F1EEE6` |
| Teks pendukung | `#465163` | `#B8C0CC` |
| Permukaan kartu | `#FFFFFF` | `#18233A` |
| Garis pembatas | `#CFD6CC` | `#2C3A55` |
| Navy (header, hero, footer) | `#14213D` | `#1B2B4B` |
| Amber (tombol utama) | `#F2A900` | `#F2A900` |
| Cokelat kopi (aksen) | `#7A4A2B` | `#E3A877` |

Navy dan amber dipilih agar terasa akrab dengan nuansa kampus, dan berbeda dari kafe pada umumnya.

### Tipografi

| Peran | Font | Alasan |
|---|---|---|
| Isi teks | Atkinson Hyperlegible | Dirancang khusus agar mudah dibaca |
| Judul | Young Serif | Hangat dan berkesan akademis |

Ukuran teks bisa dipilih pengguna: 16 / 18 (bawaan) / 20 / 22 px.

### Komponen utama

- **Tombol utama:** latar amber, teks navy, tinggi minimal 3,2 rem.
- **Tombol sekunder (ghost):** hanya garis tepi.
- **Kartu menu:** garis atas amber, berisi nama, keterangan, meter rasa, kafein, harga, dan tombol Pesan.
- **Meter rasa:** 5 titik untuk pahit, manis, dan asam.
- **Indikator buka/tutup:** titik hijau berdenyut bila buka, dihitung otomatis dari jam WIB.

## 4. Struktur halaman

Satu halaman panjang dengan urutan berikut:

1. **Header:** logo, 5 tautan (Terlaris, Suasana, Menu, Paket, Lokasi), tombol A- / A+.
2. **Hero:** tulisan "UB COFFEE" besar samar di belakang, gambar secangkir kopi di tengah dengan uap bergerak, judul "Jeda kopi di sela kelas", dua tombol (Pesan lewat WhatsApp, Lihat menu), dan indikator buka.
3. **Menu terlaris:** 3 kartu besar bernomor.
4. **Suasana di UB COFFEE:** galeri 4 tempat (ruang diskusi dosen, sudut nugas, teras luar, bar kopi).
5. **Semua menu (berjalan):** dua baris menu, baris atas bergerak ke kiri dan baris bawah ke kanan. Bisa digeser dengan jari atau kursor, berhenti saat disentuh atau kursor di atasnya, ada tombol Jeda gerakan.
6. **Lihat menu satu per satu:** satu menu per layar, tombol Sebelumnya / Berikutnya, penanda "Menu 3 dari 11", filter Semua / Kopi / Non-kopi / Makanan.
7. **Kuis "Bingung memilih kopi?":** 3 pertanyaan, hasilnya rekomendasi menu dengan tombol pesan.
8. **Paket:** pesan sebelum kelas, paket rapat, paket nugas.
9. **Peta lokasi:** embed Google Maps UB Coffee, alamat, dan tombol "Buka di Google Maps".
10. **Footer:** alamat, jam buka, tombol chat WhatsApp dan Instagram.

Tombol **"Pesan sekarang"** melayang di pojok layar dan selalu terlihat.

### Transisi

- **Pindah bagian:** saat tautan menu diklik, layar navy bertuliskan "UB COFFEE" naik menutupi halaman, lalu terbuka di bagian tujuan.
- **Saat digulir:** setiap bagian muncul perlahan.
- Keduanya mati otomatis pada pengguna dengan pengaturan "reduce motion".

## 5. Daftar menu (contoh, perlu disesuaikan)

Nama menu Es Kopi Susu, Ice UB Coffee, Cappuccino, Vietnam Drip, Wedang Uwuh, dan Crepe Cake diambil dari menu yang disebut di ulasan publik UB Coffee. **Harga, angka rasa, dan kafein adalah contoh.**

### Kopi

| Menu | Harga | Pahit | Manis | Asam | Kafein |
|---|---|---|---|---|---|
| Es Kopi Susu | Rp 22.000 | 2 | 4 | 1 | ~95 mg |
| Ice UB Coffee | Rp 24.000 | 3 | 3 | 1 | ~100 mg |
| Cappuccino | Rp 24.000 | 2 | 3 | 1 | ~95 mg |
| Vietnam Drip | Rp 26.000 | 4 | 4 | 1 | ~130 mg |
| Americano | Rp 20.000 | 4 | 1 | 2 | ~150 mg |

### Non-kopi

| Menu | Harga | Pahit | Manis | Asam | Kafein |
|---|---|---|---|---|---|
| Matcha Latte | Rp 28.000 | 1 | 3 | 0 | ~70 mg |
| Cokelat Panas | Rp 24.000 | 1 | 4 | 0 | ~10 mg |
| Wedang Uwuh | Rp 15.000 | 1 | 2 | 0 | 0 mg |

### Makanan

| Menu | Harga |
|---|---|
| Roti Bakar Cokelat Keju | Rp 20.000 |
| Croissant Mentega | Rp 25.000 |
| Crepe Cake | Rp 28.000 |

### Menu terlaris (contoh)

1. Es Kopi Susu (favorit dosen)
2. Ice UB Coffee (andalan UB COFFEE)
3. Cappuccino (favorit sore hari)

## 6. Logika kuis rekomendasi

| Suasana hari ini | Pahit dan tegas | Manis dan lembut | Ringan dan segar |
|---|---|---|---|
| Fokus | Americano | Cappuccino | Matcha Latte |
| Santai | Cappuccino | Es Kopi Susu | Wedang Uwuh |
| Semangat | Vietnam Drip | Es Kopi Susu | Ice UB Coffee |

Pertanyaan ketiga (panas atau dingin) menambahkan keterangan "(panas)" atau "(dingin)" pada hasil.

## 7. Pemesanan lewat WhatsApp

Semua tombol **Pesan** membuka WhatsApp dengan pesan yang sudah terisi, contohnya:

```
Halo UB COFFEE, saya ingin memesan 1 Cappuccino.
```

- Nomor tujuan diatur lewat variabel `NEXT_PUBLIC_WA_NUMBER` (format `62812...`, tanpa `+`).
- Nomor bawaan diambil dari listing publik UB Coffee di Apple Maps (+62 821 3224 5897). **Wajib dipastikan** bahwa itu nomor WhatsApp yang aktif menerima pesanan.
- Alasan memakai WhatsApp: cepat dibuat, murah, dan sudah akrab bagi hampir semua pengguna.

## 8. Lokasi dan peta

- Tombol "Buka di Google Maps" memakai place ID Google milik UB Coffee.
- Peta di halaman memakai embed Google Maps berdasarkan nama dan alamat.
- Untuk pin yang persis, ambil kode dari Google Maps (Bagikan > Sematkan peta) lalu tempel ke `mapsEmbed` di `lib/config.js`.

## 9. Jam buka

Sumber publik berbeda-beda, jadi **perlu dikonfirmasi**. Yang dipakai saat ini:

| Hari | Jam |
|---|---|
| Senin - Jumat | 07.30 - 22.30 |
| Sabtu | 09.00 - 22.30 |
| Minggu | 12.00 - 20.00 |

## 10. Aksesibilitas

- Ukuran teks bisa diubah pengguna (A- / A+).
- Kontras warna tinggi, mode gelap mengikuti pengaturan perangkat.
- Fokus keyboard terlihat jelas (garis amber).
- Menu satu per satu bisa dioperasikan dengan tombol panah keyboard.
- Gerakan otomatis bisa dijeda, dan mati pada pengaturan "reduce motion".
- Label ARIA dipasang pada tombol, gambar, dan area geser.

## 11. Teknologi

- **Framework:** Next.js (App Router), JavaScript, tanpa library tambahan.
- **Gaya:** CSS global dengan variabel warna (mendukung mode terang dan gelap).
- **Font:** Atkinson Hyperlegible dan Young Serif dari Google Fonts.
- **Hosting yang disarankan:** Vercel.

### Struktur folder

```
app/          layout, halaman utama, CSS global
components/   Header, Sections (Hero, Terlaris, Suasana, Paket, Peta, Footer),
              MenuMarquee (menu berjalan + bisa digeser), OneByOne (satu per satu),
              Quiz, PageEffects (transisi antar bagian), OpenStatus
lib/          config.js (info kafe, jam, WhatsApp, peta), menu.js (data menu)
```

### Tempat mengubah isi

| Apa | Di mana |
|---|---|
| Nomor WhatsApp | `.env.local` -> `NEXT_PUBLIC_WA_NUMBER` |
| Alamat, Instagram, tautan peta, jam buka | `lib/config.js` |
| Menu, harga, rasa, kafein | `lib/menu.js` |
| Urutan menu terlaris | `components/Sections.js` -> `BEST` |
| Jawaban kuis | `components/Quiz.js` -> `R` |
| Warna dan gaya | `app/globals.css` |

## 12. Yang masih perlu diganti atau dipastikan

- [ ] Nomor WhatsApp pesanan (pastikan aktif)
- [ ] Jam buka yang benar
- [ ] Harga, angka rasa, dan kafein tiap menu
- [ ] Menu terlaris berdasarkan data penjualan nyata
- [ ] **Foto asli** tempat dan menu (galeri sekarang masih ilustrasi)
- [ ] Logo resmi UB COFFEE
- [ ] Pin peta yang persis (opsional, lihat bagian 8)
- [ ] Ketentuan paket rapat dan paket nugas (jumlah minimal, harga, cara verifikasi email UB)

## 13. Rencana pengembangan

### Tahap 1: rilis awal
- Ganti semua data contoh dengan data asli, termasuk foto.
- Pasang di domain sendiri, uji di HP dan komputer.
- Pastikan pemesanan lewat WhatsApp berjalan.

### Tahap 2: perbaikan
- Tambah Tailwind CSS atau pindah ke TypeScript bila tim developer menginginkannya.
- Kelola menu dari CMS agar mudah diubah pemilik.
- Formulir pesan untuk paket rapat.
- Optimasi gambar dengan `next/image`.

### Tahap 3: fitur lanjutan
- Pre-order dengan pilihan jam ambil.
- Pembayaran online (QRIS / Midtrans).
- Menu favorit "Pesan seperti biasa" untuk pelanggan langganan.
- Poin loyalitas atau kartu stempel digital.
- Promo mahasiswa dengan verifikasi email UB.
- Info lengkap gula dan alergen per menu.

## 14. Pertanyaan yang masih terbuka

1. Apakah pemesanan akan tetap lewat WhatsApp, atau perlu sistem pemesanan sendiri?
2. Apakah tersedia layanan antar ke ruangan dosen atau fakultas?
3. Apakah kafe punya identitas visual (logo, warna) yang harus diikuti?
4. Siapa yang akan mengubah menu dan harga dari waktu ke waktu?
5. Apakah perlu versi bahasa Inggris?
