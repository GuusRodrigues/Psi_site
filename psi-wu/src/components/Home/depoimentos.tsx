"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";

export default function DepoimentoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-16">
      <div className="w-full md:w-1/2 relative h-80 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/ArteBege.jpeg"
          alt="Paciente satisfeito"
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
      </div>

      {/* Texto à direita com scroll animation */}
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full md:w-1/2 text-primary space-y-8"
      >
        <div className="relative p-6 rounded-md border-l-4 border-primary">
          <Quote className="absolute -top-3 -left-3 w-6 h-6 text-primary opacity-70" />
          <p className="text-lg italic text-primary">
            Yuri, uma pessoa muito especial. Estar em acompanhamento psicológico com ele tem me feito bastante bem. Ele permite se moldar de acordo com as minhas necessidades. Isso tem feito toda diferença no meu tratamento. Agora em 2024, vamos para o segundo ano de acompanhamento. Recomendo a todos.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/depoimentos"
            className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-xl hover:bg-[#5a6233] transition"
          >
            Ver mais depoimentos
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
