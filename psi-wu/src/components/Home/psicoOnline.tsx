"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PsicoterapiaSection() {
  return (
    <section className="relative py-20 px-4 flex items-center justify-center">
      <div className="absolute inset-0 -z-10 ">
        <Image
          src="/arteAbstrata.jpg" 
          alt="Fundo artístico"
          fill
          className="object-cover opacity-90"
        />
      </div>

      {/* Quadro central com animação */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-[#ECE4D7] p-10 rounded-xl max-w-4xl w-full text-center shadow-md relative"
      >
        <h2 className="text-3xl md:text-4xl text-primary font-semibold mb-6">
          Psicoterapia online
        </h2>

        <p className="text-xl italic text-primary mb-6">
          Pensamentos ao serem testemunhados tornam-se história
        </p>

        <p className="text-primary mb-4">
          Construir uma boa relação com a vida nem sempre é fácil, mas é possível
          quando desenvolvemos intimidade conosco. Na psicoterapia temos a oportunidade
          de refletir sobre as nossas experiências e encontrar maneiras de viver
          de modo mais saudável.
        </p>

        <p className="text-primary mb-4">
          Se você procura esse apoio,
        </p>

        <a
          href="https://wa.me/+5581995749052"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-6 py-2 bg-primary text-white rounded-xl hover:bg-[#5a6233] transition"
        >
          Entre em contato
        </a>

        <Link
          href="/psicoterapia-online"
          className="absolute bottom-4 right-4 text-sm text-black underline hover:text-primary"
        >
          Saiba mais sobre o serviço
        </Link>
      </motion.div>
    </section>
  );
}