import SectionHeading from "@/components/SectionHeading";
import { aboutText, gallery } from "@/lib/content";
import { twoDigits } from "@/lib/utils";

export default function Atmosphere() {
  return (
    <section className="section atmosphere" id="suasana">
      <SectionHeading
        className="about-heading"
        eyebrow="UB Coffee"
        title={
          <>
            About
            <br />
            <i>our company.</i>
          </>
        }
      >
        {aboutText}
      </SectionHeading>

      <div className="gallery">
        {gallery.map(({ title, text, image }, index) => (
          <article
            className={`gallery-item gallery-${index + 1}`}
            key={title}
            data-reveal="zoom"
            style={{ backgroundImage: `url(${image})`, "--i": index }}
          >
            <div>
              <span>{twoDigits(index + 1)}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
