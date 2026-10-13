import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import Logo from "@/components/Logo";
import { cafe, whatsappUrl } from "@/lib/config";
import { aboutText } from "@/lib/content";

const socials = [
  { label: "WhatsApp", href: whatsappUrl(), Icon: FaWhatsapp },
  { label: "Instagram", href: cafe.instagram, Icon: FaInstagram },
  { label: "Facebook", href: cafe.facebook, Icon: FaFacebook },
  { label: "TikTok", href: cafe.tiktok, Icon: FaTiktok },
].filter((social) => social.href);

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand" data-reveal="up">
        <Logo aria-label="UB Coffee, kembali ke atas" />
        <p>{aboutText}</p>
        <ul className="footer-socials" aria-label="Media sosial UB Coffee">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div data-reveal="up" style={{ "--i": 1 }}>
        <p className="eyebrow">Alamat</p>
        <p>{cafe.address}</p>
      </div>
      <div data-reveal="up" style={{ "--i": 2 }}>
        <p className="eyebrow">Ikuti cerita kami</p>
        <a href={cafe.instagram} target="_blank" rel="noreferrer">
          {cafe.instagramLabel} ↗
        </a>
      </div>
    </footer>
  );
}
