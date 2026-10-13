import RevealOnScroll from "@/components/RevealOnScroll";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Atmosphere from "@/components/sections/Atmosphere";
import BestSellers from "@/components/sections/BestSellers";
import CoffeeQuiz from "@/components/sections/CoffeeQuiz";
import Hero from "@/components/sections/Hero";
import Location from "@/components/sections/Location";
import MenuSection from "@/components/sections/MenuSection";
import Packages from "@/components/sections/Packages";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <BestSellers />
      <Atmosphere />
      <MenuSection />
      <CoffeeQuiz />
      <Packages />
      <Location />
      <SiteFooter />
      <RevealOnScroll />
    </main>
  );
}
