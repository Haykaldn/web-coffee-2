import SectionHeading from "@/components/SectionHeading";
import { whatsappUrl } from "@/lib/config";
import { packages } from "@/lib/content";
import { twoDigits } from "@/lib/utils";

export default function Packages() {
  return (
    <section className="section packages" id="paket">
      <SectionHeading
        eyebrow="Untuk lebih dari satu"
        title={
          <>
            Paket yang mengerti
            <br />
            <i>jadwalmu.</i>
          </>
        }
      >
        Pesan lebih awal untuk rapat, kelas, atau sesi nugas yang tidak boleh terputus.
      </SectionHeading>

      <div className="package-grid">
        {packages.map(({ title, text }, index) => (
          <article key={title} data-reveal="up" style={{ "--i": index }}>
            <span>{twoDigits(index + 1)}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href={whatsappUrl(title)} target="_blank" rel="noreferrer">
              Tanya paket <b>↗</b>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
