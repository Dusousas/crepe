"use client";

const services = [
  {
    id: 1,
    title: "Eventos Particulares",
    description:
      "Ideal para aniversários, confraternizações e festas em casa. Levamos estrutura completa e um cardápio irresistível para surpreender seus convidados.",
    cta: "Ver mais",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 11V9a5 5 0 0 1 10 0v2" />
        <path d="M5 11h14" />
        <path d="M6 11v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4" />
        <path d="M12 6v11" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Eventos e Festivais",
    description:
      "Perfeito para grandes públicos, feiras e eventos ao ar livre. Atendimento ágil, organização e variedade que agradam todos os gostos.",
    cta: "Ver mais",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 18h16" />
        <path d="M6 18v-5l6-4 6 4v5" />
        <path d="M9 9V6h6v3" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Casamentos e Ocasiões Especiais",
    description:
      "Transforme seu grande dia em uma experiência única com um serviço diferenciado, moderno e cheio de sabor para seus convidados.",
    cta: "Ver mais",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M12 21s-6.7-4.35-9.2-8.17C.75 9.7 2.29 5.5 6.4 5.5c2.22 0 3.62 1.28 4.33 2.53.71-1.25 2.11-2.53 4.33-2.53 4.11 0 5.65 4.2 3.6 7.33C18.7 16.65 12 21 12 21Z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos" className="scroll-mt-28 bg-[#fff8fa] py-20">
      <div className="maxW">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 font-anton text-[clamp(2.8rem,5vw,3rem)] uppercase leading-[0.95] text-[#161616]">
            Experiências que elevam o seu evento
          </h2>
          <p className="mt-4 font-body text-base leading-7 text-[#675258] md:text-lg">
            Estruturamos cada formato de atendimento para que sua festa tenha
            presença, agilidade e uma experiência memorável do primeiro ao último
            pedido.
          </p>
        </div>

        <article className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-[1.1rem] border border-[#F1D1D8] bg-[#FDEDF0] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#E3A3B1] hover:shadow-[0_26px_60px_rgba(182,49,73,0.14)] md:p-7"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.85),transparent_34%)] opacity-70" />
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#F7C6D1]/55 blur-2xl transition duration-500 group-hover:scale-125" />

              <div className="relative flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-[0.95rem] bg-[#B63149] text-white shadow-[0_14px_28px_rgba(182,49,73,0.2)] transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
                </div>

                <div className="mt-12 flex-1">
                  <h3 className=" font-anton text-4xl  uppercase leading-[0.95] text-[#111111]">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-[34ch] font-body text-[1.02rem] leading-8 text-[#5F4C52]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-2">
                  <button
                    type="button"
                    className="inline-flex items-center cursor-pointer gap-3 rounded-[1rem] bg-[#B63149] px-5 py-3 font-body text-sm font-semibold uppercase tracking-[0.12em] text-white transition duration-300 group-hover:bg-[#97263c]"
                  >
                    {service.cta}
                    <span className="transition duration-300 group-hover:translate-x-1">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
