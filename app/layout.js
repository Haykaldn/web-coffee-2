import "./globals.css";

export const metadata = {
  title: "UB COFFEE | Jeda kopi di sela kelas",
  description: "Kopi kampus UB COFFEE di Malang. Lihat menu dan pesan lewat WhatsApp.",
};

export const viewport = {
  themeColor: "#14213d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
