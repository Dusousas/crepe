import Branding from "@/components/Branding";
import Cardapio from "@/components/Cardapio";
import Contact from "@/components/Contact";
import Galeria from "@/components/Galeria";
import Hero from "@/components/Hero";
import Info from "@/components/Info";

import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "Crepearia das Meninas",
    image: `${siteUrl}/logo.png`,
    url: siteUrl,
    description:
      "Crepearia em Torrinha - SP com buffet para eventos, crepes doces, crepes salgados, crepe suico, algodao doce e batata no cone.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Senador Lacerda Franco, 482",
      addressLocality: "Torrinha",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    servesCuisine: ["Crepes", "Doces", "Salgados", "Buffet para eventos"],
    areaServed: "Torrinha - SP",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday", "Friday"],
        opens: "16:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "12:00",
        closes: "22:00",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Cardapio />
      <Services />
      <Branding />
      <Testimonials />
      <Galeria />
      <Info />
      <Contact />
    </>
  );
}
