import { whatsappUrl } from "@/lib/config";

export default function OrderButton({ item, children = "Pesan sekarang", secondary = false }) {
  return (
    <a
      className={secondary ? "button button-ghost" : "button"}
      href={whatsappUrl(item)}
      target="_blank"
      rel="noreferrer"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}
