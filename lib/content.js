// Teks dan data statis untuk tiap bagian halaman.

export const aboutText =
  "UB Coffee merupakan salah satu unit bisnis di bawah PT. Brawijaya Multi Usaha yang melayani Food & Beverage, yang memiliki fungsi akademik dengan mengenalkan produk-produk kopi asli Indonesia dan menu makanan yang beragam.";

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=85`;

export const navLinks = [
  { href: "#terlaris", label: "Terlaris" },
  { href: "#suasana", label: "Suasana" },
  { href: "#menu", label: "Menu" },
  { href: "#paket", label: "Paket" },
  { href: "#lokasi", label: "Lokasi" },
];

export const bestSellers = [
  { name: "Es Kopi Susu", tag: "Favorit dosen" },
  { name: "Ice UB Coffee", tag: "Andalan UB COFFEE" },
  { name: "Cappuccino", tag: "Favorit sore hari" },
];

export const gallery = [
  {
    title: "Ruang diskusi dosen",
    text: "Ruang untuk menyusun ide sebelum rapat berikutnya.",
    image: unsplash("1497366754035-f200968a6e72"),
  },
  {
    title: "Sudut nugas",
    text: "Colokan, koneksi, dan meja yang siap menemani fokus.",
    image: unsplash("1497366811353-6870744d04b2"),
  },
  {
    title: "Teras luar",
    text: "Udara Malang dan obrolan ringan di sela jadwal.",
    image: unsplash("1445116572660-236099ec97a0"),
  },
  {
    title: "Bar kopi",
    text: "Lihat minumanmu diracik dengan pelan dan teliti.",
    image: unsplash("1442512595331-e89e73853f31"),
  },
];

export const packages = [
  {
    title: "Pesan sebelum kelas",
    text: "Mulai pagi tanpa antre. Pilih kopi dan camilan favoritmu, lalu ambil saat tiba di kampus.",
  },
  {
    title: "Paket rapat",
    text: "Kopi untuk satu meja, dengan pilihan manis yang bisa disesuaikan kebutuhan tim.",
  },
  {
    title: "Paket nugas",
    text: "Teman fokus untuk sesi panjang. Tanyakan pilihan paket dan ketersediaannya via WhatsApp.",
  },
];

export const quizQuestions = [
  { key: "mood", label: "Suasana hari ini", options: ["Fokus", "Santai", "Semangat"] },
  {
    key: "taste",
    label: "Rasa yang dicari",
    options: ["Pahit dan tegas", "Manis dan lembut", "Ringan dan segar"],
  },
  { key: "temp", label: "Sajikan", options: ["Panas", "Dingin"] },
];

export const quizDefaults = { mood: "Santai", taste: "Manis dan lembut", temp: "Dingin" };

// recommendations[mood][taste] -> nama menu
export const recommendations = {
  Fokus: {
    "Pahit dan tegas": "Americano",
    "Manis dan lembut": "Cappuccino",
    "Ringan dan segar": "Matcha Latte",
  },
  Santai: {
    "Pahit dan tegas": "Cappuccino",
    "Manis dan lembut": "Es Kopi Susu",
    "Ringan dan segar": "Wedang Uwuh",
  },
  Semangat: {
    "Pahit dan tegas": "Vietnam Drip",
    "Manis dan lembut": "Es Kopi Susu",
    "Ringan dan segar": "Ice UB Coffee",
  },
};
