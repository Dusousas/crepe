"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Crepes Salgados",
    image: "/produtos/crepe1.png",
    flavors: ["Frango com Catupiry", "Presunto e Queijo", "Calabresa", "4 Queijos"],
  },
  {
    id: 3,
    name: "Algodão Doce",
    image: "/produtos/algodao.png",
    flavors: ["Tradicional", "Morango", "Uva", "Tutti-Frutti"],
  },
  {
    id: 4,
    name: "Batata no Cone",
    image: "/produtos/batata.png",
    flavors: ["Cheddar e Bacon", "Parmesão", "Calabresa", "Molho Especial"],
  },
  {
    id: 5,
    name: "Crepe Suiço",
    image: "/produtos/crepe3.png",
    flavors: ["Queijo", "Pizza", "Chocolate", "Romeu e Julieta"],
  },
  {
    id: 6,
    name: "Crepe Especial",
    image: "/produtos/crepe2.png",
    flavors: ["Nutella com Morango", "Brigadeiro", "Leite Ninho", "Frango Premium"],
  },
];

function getVisibleCards(width: number) {
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
}

export default function Cardapio() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedProductId, setExpandedProductId] = useState<number | null>(null);

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(getVisibleCards(window.innerWidth));
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = Math.max(products.length - visibleCards, 0);
  const safeCurrentIndex = Math.min(currentIndex, maxIndex);

  const totalPages = Math.max(maxIndex + 1, 1);
  const progressLabel = `${String(safeCurrentIndex + 1).padStart(2, "0")} / ${String(
    totalPages
  ).padStart(2, "0")}`;

  return (
    <section id="cardapio" className="scroll-mt-28 bg-white py-20">
      <div className="maxW">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-anton text-4xl uppercase text-[#2b2b2b]">
              O Que Levamos para Sua Festa
            </h2>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="font-anton text-xl uppercase text-[#B63149]">
              {progressLabel}
            </span>

            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
              disabled={safeCurrentIndex === 0}
              className="flex h-12 w-12 items-center cursor-pointer justify-center rounded-full border border-dashed border-[#D95C71] text-[#B63149] transition disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Ver produtos anteriores"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() =>
                setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
              }
              disabled={safeCurrentIndex === maxIndex}
              className="flex h-12 w-12 items-center cursor-pointer justify-center rounded-full border border-dashed border-[#D95C71] text-[#B63149] transition disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Ver mais produtos"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden border border-dashed border-[#D95C71]">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${safeCurrentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {products.map((product) => (
              <article
                key={product.id}
                className="group relative flex h-[32rem] shrink-0 flex-col overflow-hidden border-r border-dashed border-[#D95C71] px-5 py-8 last:border-r-0 md:px-8 md:py-10"
                style={{ width: `${100 / visibleCards}%` }}
                onMouseEnter={() => setExpandedProductId(product.id)}
                onMouseLeave={() =>
                  setExpandedProductId((current) =>
                    current === product.id ? null : current
                  )
                }
              >
                <div className="relative z-10 flex h-[300px] items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={430}
                    height={430}
                    className="h-auto w-full max-w-[200px] object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                <div className="relative z-10 mt-auto flex min-h-[4.5rem] flex-col justify-end">
                  <h3 className="font-anton text-[clamp(1.8rem,3vw,2.8rem)] text-center uppercase leading-none text-[#131313]">
                    {product.name}
                  </h3>

                  <button
                    type="button"
                    className="mx-auto mt-4 rounded-full border border-dashed border-[#D95C71] bg-white/90 px-4 py-2 font-anton text-sm uppercase tracking-[0.12em] text-[#B63149] backdrop-blur-sm md:hidden"
                    aria-expanded={expandedProductId === product.id}
                    aria-controls={`sabores-${product.id}`}
                    onClick={() =>
                      setExpandedProductId((current) =>
                        current === product.id ? null : product.id
                      )
                    }
                  >
                    {expandedProductId === product.id ? "Ocultar sabores" : "Ver sabores"}
                  </button>
                </div>

                <div
                  id={`sabores-${product.id}`}
                  className={`absolute inset-0 z-20 flex flex-col bg-white/82 p-5 backdrop-blur-md transition duration-400 ease-out md:p-6 ${
                    expandedProductId === product.id
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-full opacity-0"
                  }`}
                >
                  <button
                    type="button"
                    className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-[#D95C71] text-[#B63149] md:hidden"
                    aria-label={`Fechar sabores de ${product.name}`}
                    onClick={() => setExpandedProductId(null)}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6L6 18" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-[17rem] text-center">
                      <div className="border-t border-dashed border-[#D95C71] pt-5">
                        <p className="font-anton text-xs uppercase tracking-[0.18em] text-[#B63149]">
                      Sabores disponiveis
                        </p>
                        <ul className="mt-5 flex flex-col items-center gap-3 text-sm font-semibold text-[#7A2436]">
                          {product.flavors.map((flavor) => (
                            <li
                              key={flavor}
                              className="w-full rounded-full border border-dashed border-[#D95C71] bg-white/90 px-4 py-2 text-center"
                            >
                              {flavor}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
