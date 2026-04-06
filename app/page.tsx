import Branding from "@/components/Branding";
import Cardapio from "@/components/Cardapio";
import Events from "@/components/Events";
import Galeria from "@/components/Galeria";
import Hero from "@/components/Hero";
import Info from "@/components/Info";

import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Cardapio />
      <Services />
      <Events />
      <Branding />
      <Testimonials />
      <Galeria />
      <Info />
    </>
  );
}
