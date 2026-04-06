"use client";


const schedule = [
  "SEG - TER : FECHADO",
  "QUA - SEX : 16H - 22H",
  "SAB - DOM : 12H - 22H",
];

const marqueeItems = [
  "CREPEARIA",
  "CREPEARIA",
  "CREPEARIA",
  "CREPEARIA",
  "CREPEARIA",
  "CREPEARIA",
];

export default function Info() {
  return (
    <section id="contato" className="scroll-mt-28 bgEvents overflow-hidden pt-10 pb-5">
      <div className="maxW">
        <article className="mx-auto rounded-[22px] bg-white p-6 shadow-sm lg:max-w-[950px] lg:p-10">
          <h2 className="text-center font-anton text-[clamp(2.4rem,5vw,3.5rem)] uppercase leading-[0.95] text-[#161616]">
            Comida boa. Ambiente leve. Atendimento ágil.
          </h2>

          <div className="mt-6 flex flex-col gap-4">
            {schedule.map((item, index) => (
              <p
                key={index}
                className="flex min-h-[58px] items-center justify-center rounded-[12px] bg-[#B63149] px-4 text-center font-anton text-[clamp(1.4rem,2.5vw,2.1rem)] uppercase leading-none text-white"
              >
                {item}
              </p>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-10 overflow-hidden">
        <div className="flex w-max animate-[marquee_18s_linear_infinite] gap-6">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <h2
              key={index}
              className="shrink-0 text-7xl font-anton tracking-wider text-white/80 md:text-8xl lg:text-9xl"
            >
              {item}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
}
