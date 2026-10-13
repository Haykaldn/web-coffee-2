export const cafe = {
  name: "UB COFFEE",
  address: "Jl. MT. Haryono No.169, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
  // Google Maps: rute dari lokasi pengguna ke kafe
  directions: "https://www.google.com/maps/dir/?api=1&destination=UB%20Coffee%20Malang",
  shortAddress: "Tepi Jl. MT. Haryono, dekat gerbang masuk KPRI UB",
  instagram: "https://instagram.com/ub_coffee",
  instagramLabel: "@ub_coffee",
  // Isi link Facebook & TikTok di sini; ikon yang link-nya kosong tidak ditampilkan.
  facebook: "",
  tiktok: "",
  maps: "https://www.google.com/maps/search/?api=1&query=UB%20Coffee%20Malang",
  mapsEmbed: "https://www.google.com/maps?q=UB%20Coffee%20Malang&output=embed",
  whatsapp: process.env.NEXT_PUBLIC_WA_NUMBER || "6282132245897",
  timeZone: "Asia/Jakarta",
};

// days: 0 = Minggu, 1 = Senin, ..., 6 = Sabtu
export const openingHours = [
  { label: "Senin - Jumat", days: [1, 2, 3, 4, 5], open: "07.30", close: "22.30" },
  { label: "Sabtu", days: [6], open: "09.00", close: "22.30" },
  { label: "Minggu", days: [0], open: "12.00", close: "20.00" },
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const toMinutes = (time) => {
  const [hours, minutes] = time.split(".").map(Number);
  return hours * 60 + minutes;
};

export function isOpenAt(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
    timeZone: cafe.timeZone,
  }).formatToParts(date);
  const get = (type) => parts.find((part) => part.type === type)?.value;

  const day = WEEKDAYS.indexOf(get("weekday"));
  const now = Number(get("hour")) * 60 + Number(get("minute"));
  const today = openingHours.find((entry) => entry.days.includes(day));

  return Boolean(today) && now >= toMinutes(today.open) && now < toMinutes(today.close);
}

export function whatsappUrl(item = "") {
  const message = item
    ? `Halo UB COFFEE, saya ingin memesan 1 ${item}.`
    : "Halo UB COFFEE, saya ingin memesan.";
  return `https://wa.me/${cafe.whatsapp}?text=${encodeURIComponent(message)}`;
}
