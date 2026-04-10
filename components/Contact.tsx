"use client";

import Image from "next/image";
import Form from "./subc/Form";

export default function Contact() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="maxW flex flex-col gap-y-10 lg:flex-row">
          <div className="lg:flex lg:w-1/2">
            <Form />
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[1.4rem] lg:w-1/2">
            <Image
              src="/contact.jpg"
              alt="Atendimento da crepearia em evento"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
