import OrderButton from "@/components/OrderButton";
import SectionHeading from "@/components/SectionHeading";
import { bestSellers } from "@/lib/content";
import { findMenuItem } from "@/lib/menu";
import { twoDigits } from "@/lib/utils";

export default function BestSellers() {
  return (
    <section className="section best-section" id="terlaris">
      <SectionHeading eyebrow="Yang sering kembali" title="Favorit di meja sebelah.">
        Tiga racikan untuk memulai hari, menemani rapat, atau mengubah sore biasa menjadi sedikit
        lebih baik.
      </SectionHeading>

      <div className="best-grid">
        {bestSellers.map(({ name, tag }, index) => {
          const item = findMenuItem(name);
          return (
            <article className="best-card" key={name} data-reveal="up" style={{ "--i": index }}>
              <span className="card-number">{twoDigits(index + 1)}</span>
              <div className="best-image" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="card-body">
                <p className="card-tag">{tag}</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="card-bottom">
                  <strong>{item.price}</strong>
                  <OrderButton item={item.name} secondary>
                    Pesan
                  </OrderButton>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
