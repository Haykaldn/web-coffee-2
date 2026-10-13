import MenuShowcase from "@/components/MenuShowcase";
import SectionHeading from "@/components/SectionHeading";

export default function MenuSection() {
  return (
    <section className="section menu-section" id="menu">
      <SectionHeading
        className="menu-heading"
        eyebrow="Dari bar kami"
        title="Menu untuk ritmemu."
      />
      <MenuShowcase />
    </section>
  );
}
