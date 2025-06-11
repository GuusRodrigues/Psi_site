"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import { SectionWrapper } from "../sectionWrapper";

export default function DepoimentoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      {/* Título fora da seção com bg-soft */}
      <div className="text-center mb-16 px-6 sm:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Depoimentos
        </h2>
      </div>
      
      {/* Seção de conteúdo com bg-soft */}
      <SectionWrapper className="bg-soft">
        <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl mx-auto px-6 sm:px-12">
          <div className="w-full md:w-1/2 relative aspect-square rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/ArteBege.jpeg"
              alt="Arte de homem com flores"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 90vw, 50vw"
            />
          </div>
          
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full md:w-1/2 space-y-8"
          >
            <div className="relative p-8 rounded-lg bg-white shadow-md">
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary opacity-70 bg-soft rounded-full p-1" />
              <p className="text-lg italic text-primary">
                Yuri, uma pessoa muito especial. Estar em acompanhamento psicológico com ele tem me feito bastante bem. Ele permite se moldar de acordo com as minhas necessidades. Isso tem feito toda diferença no meu tratamento. Agora em 2024, vamos para o segundo ano de acompanhamento. Recomendo a todos.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/depoimentos"
                className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-[#5a6233] transition-colors duration-300"
                aria-label="Ver mais depoimentos"
              >
                Ver mais depoimentos
              </Link>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}