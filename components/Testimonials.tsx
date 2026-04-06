"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "A estrutura chegou impecável, o atendimento foi leve e a comida saiu com uma agilidade impressionante. Virou assunto entre os convidados a noite inteira.",
    name: "Mariana S.",
    role: "Sorocaba",
    initials: "MS",
  },
  {
    id: 2,
    quote:
      "Contratamos para um evento grande e eles conseguiram manter organização, sabor e velocidade do começo ao fim. Foi uma experiência muito acima do esperado.",
    name: "Lucas R.",
    role: "Campinas",
    initials: "LR",
  },
  {
    id: 3,
    quote:
      "No casamento, queríamos algo moderno e marcante. O resultado foi um serviço bonito, prático e cheio de personalidade. Todo mundo comentou depois.",
    name: "Fernanda A.",
    role: "Itu",
    initials: "FA",
  },
  {
    id: 4,
    quote:
      "O cardápio agradou adultos e crianças, e a operação foi extremamente profissional. Foi uma das escolhas mais certeiras do nosso evento.",
    name: "Paulo M.",
    role: "Jundiaí",
    initials: "PM",
  },
  {
    id: 5,
    quote:
      "A proposta trouxe exatamente o clima que queríamos: comida feita na hora, atendimento simpático e uma presença visual que valorizou toda a festa.",
    name: "Juliana C.",
    role: "São Paulo",
    initials: "JC",
  },
];

function getVisibleCards(width: number) {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
}

export default function Testimonials() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(getVisibleCards(window.innerWidth));
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalPages = Math.ceil(testimonials.length / visibleCards);
  const safePage = Math.min(page, Math.max(totalPages - 1, 0));

  return (
    <section id="depoimentos" className="scroll-mt-28 bg-white pt-20">
      <div className="maxW">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="mt-4 font-anton text-[clamp(2.6rem,5vw,3rem)] uppercase leading-[0.95] text-[#161616]">
              Experiências que viram memória
            </h2>
          </div>
        </div>

        <div className="relative mt-12">


          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${safePage * 100}%)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const start = pageIndex * visibleCards;
                const pageItems = testimonials.slice(
                  start,
                  start + visibleCards,
                );

                return (
                  <div
                    key={pageIndex}
                    className="grid w-full shrink-0 gap-5"
                    style={{
                      gridTemplateColumns: `repeat(${visibleCards}, minmax(0, 1fr))`,
                    }}
                  >
                    {pageItems.map((item) => (
                      <article
                        key={item.id}
                        className="flex min-h-[20rem] flex-col rounded-[1.5rem] border border-[#EDE7E8] px-8 py-8 transition duration-300 hover:-translate-y-1  md:px-9 md:py-9"
                      >
                        <p className="mt-12 flex-1 font-body text-[1.05rem] leading-9 text-[#1E1E1E] md:text-[1.12rem]">
                          “{item.quote}”
                        </p>

                        <div className="mt-10 flex items-center gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F6D6DE,#B1263D)] font-body text-sm font-bold uppercase tracking-[0.14em] text-white">
                            {item.initials}
                          </div>

                          <div>
                            <h3 className="font-anton text-[1.9rem] uppercase leading-none text-[#141414]">
                              {item.name}
                            </h3>
                            <p className="mt-1 font-body text-base text-[#3A3A3A]">
                              {item.role}
                            </p>
                            <div className="mt-3 flex items-center gap-1 text-[#FF922E]">
                              {Array.from({ length: 5 }).map(
                                (__, starIndex) => (
                                  <svg
                                    key={starIndex}
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4 fill-current"
                                  >
                                    <path d="M12 2.8l2.7 5.48 6.05.88-4.38 4.27 1.03 6.03L12 16.9l-5.4 2.84 1.03-6.03L3.25 9.16l6.05-.88L12 2.8Z" />
                                  </svg>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>


        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => setPage(dotIndex)}
              className={`h-2.5 rounded-full transition ${
                dotIndex === safePage
                  ? "w-7 bg-[#B1263D]"
                  : "w-2.5 bg-[#F2DDE2] hover:bg-[#D9B1BB]"
              }`}
              aria-label={`Ir para depoimentos ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
