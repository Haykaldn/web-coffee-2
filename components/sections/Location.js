import { FaLocationDot } from "react-icons/fa6";
import { cafe, openingHours } from "@/lib/config";

export default function Location() {
  return (
    <section className="location" id="lokasi">
      <div className="location-copy">
        <p className="eyebrow" data-reveal="up">
          Temui kami
        </p>
        <h2 data-reveal="text" style={{ "--delay": "80ms" }}>
          Di mana jeda
          <br />
          <i>bermula.</i>
        </h2>
        <p data-reveal="up" style={{ "--delay": "200ms" }}>
          {cafe.address}
        </p>
        <p className="muted" data-reveal="up" style={{ "--delay": "260ms" }}>
          {cafe.shortAddress}
        </p>
        <a
          data-reveal="up"
          style={{ "--delay": "320ms" }}
          className="button"
          href={cafe.maps}
          target="_blank"
          rel="noreferrer"
        >
          Buka di Google Maps <span>↗</span>
        </a>

        <div className="hours">
          <h3 data-reveal="up">Jam buka</h3>
          {openingHours.map(({ label, open, close }, index) => (
            <div key={label} data-reveal="left" style={{ "--i": index + 1 }}>
              <span>{label}</span>
              <strong>
                {open} - {close}
              </strong>
            </div>
          ))}
        </div>
      </div>

      <div className="location-visual">
        {/* Dekorasi */}
        <span className="map-glow" aria-hidden="true" />
        <span className="map-ring" aria-hidden="true" />
        <span className="map-bean bean-one" aria-hidden="true" />
        <span className="map-bean bean-two" aria-hidden="true" />
        <span className="map-bean bean-three" aria-hidden="true" />

        <div className="map-card" data-reveal="zoom" style={{ "--delay": "150ms" }}>
          <div className="map-frame">
            <iframe title="Peta lokasi UB Coffee" src={cafe.mapsEmbed} loading="lazy" />
          </div>

          <p className="map-pin">
            <i aria-hidden="true" />
            UB Coffee
          </p>

          <div className="map-address">
            <FaLocationDot aria-hidden="true" />
            <div>
              <strong>Jl. MT. Haryono No.169</strong>
              <span>Lowokwaru, Kota Malang</span>
            </div>
            <a href={cafe.directions} target="_blank" rel="noreferrer">
              Rute <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
