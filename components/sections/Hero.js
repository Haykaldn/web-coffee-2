import OpenStatus from "@/components/OpenStatus";
import OrderButton from "@/components/OrderButton";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-watermark">
        UB
        <br />
        COFFEE
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Kopi kampus, dibuat dengan jeda</p>
        <h1>
          Jeda kopi
          <br />
          <i>di sela kelas.</i>
        </h1>
        <p className="hero-lead">
          Ruang kecil untuk berpikir lebih jernih, ngobrol lebih lama, dan menikmati racikan yang
          dibuat dekat dengan kehidupan kampus.
        </p>
        <div className="hero-actions">
          <OrderButton />
          <a className="button button-ghost light" href="#menu">
            Lihat menu <span>↓</span>
          </a>
        </div>
        <OpenStatus />
      </div>

      <div className="hero-cup" aria-label="Ilustrasi secangkir kopi">
        <div className="steam steam-one" />
        <div className="steam steam-two" />
        <div className="cup">
          <div className="coffee" />
        </div>
        <div className="saucer" />
      </div>

      <div className="hero-note">
        JL. MT. HARYONO NO.169
        <br />
        KETAWANGGEDE · MALANG
      </div>
    </section>
  );
}
