"use client";

const eventTypes = [
  "Aniversario",
  "Casamento",
  "Cha de bebe / cha revelacao",
  "Formatura",
  "Evento corporativo",
  "Confraternizacao",
  "Feira / festival",
  "Outro",
];

const inputClassName =
  "w-full rounded-[14px] border border-[#E5C5CC] bg-white px-4 py-3 font-body text-[0.98rem] text-[#3A2B30] outline-none transition placeholder:text-[#9E7E86] focus:border-[#B63149] focus:ring-4 focus:ring-[#B63149]/10";

const labelClassName =
  "mb-2 block font-body text-sm font-semibold text-[#7A2436]";

export default function Form() {
  return (
    <form className="rounded-[1.4rem] border border-[#F0D6DC] bg-white p-6 shadow-[0_22px_55px_rgba(182,49,73,0.08)] md:p-8">
      <div>
        <p className="font-anton text-sm uppercase tracking-[0.18em] text-[#B63149]">
          Orçamento
        </p>
        <h2 className="mt-3 font-anton text-[clamp(2rem,4vw,3rem)] uppercase leading-none text-[#161616]">
          Solicite uma proposta
        </h2>
        <p className="mt-3 max-w-[48ch] font-body text-[0.98rem] leading-7 text-[#6C565D]">
          Preencha os dados abaixo e entraremos em contato com uma proposta para o seu evento.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClassName}>
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Seu nome"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClassName}>
            Telefone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="city" className={labelClassName}>
            Cidade
          </label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="Ex: Itu"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="eventType" className={labelClassName}>
            Tipo de evento
          </label>
          <select
            id="eventType"
            name="eventType"
            className={inputClassName}
            defaultValue=""
          >
            <option value="" disabled>
              Selecione
            </option>
            {eventTypes.map((eventType) => (
              <option key={eventType} value={eventType}>
                {eventType}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="guestCount" className={labelClassName}>
            Quantidade de pessoas
          </label>
          <input
            id="guestCount"
            name="guestCount"
            type="text"
            placeholder="Ex: 80 convidados"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="eventDate" className={labelClassName}>
            Data do evento
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            className={inputClassName}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className={labelClassName}>
            Detalhes
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Conte um pouco sobre o evento, local, horario e o que voce gostaria de contratar."
            className={`${inputClassName} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-[14px] bg-[#B63149] px-6 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#98273d]"
      >
        Solicitar orcamento
      </button>
    </form>
  );
}
