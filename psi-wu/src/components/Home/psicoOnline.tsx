"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "../sectionWrapper";

export default function PsicoterapiaSection() {
  return (
    <SectionWrapper className="relative">
      {/* Título fora da área com imagem */}
      <div className="text-center mb-16 px-6 sm:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Psicoterapia online
        </h2>
      </div>

      {/* Container da seção com imagem de fundo */}
      <div className="relative w-full rounded-2xl overflow-hidden">
        {/* Imagem de fundo com overlay */}
        <div className="absolute inset-0">
          <Image
            src="/arteAbstrata.jpg"
            alt="Fundo abstrato representando terapia e conexão"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
            quality={85}
          />
          {/* Overlay semi-transparente */}
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>

        {/* Conteúdo sobreposto */}
        <div className="relative py-16 px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="bg-background/95 p-8 sm:p-10 rounded-xl max-w-4xl mx-auto text-center shadow-xl backdrop-blur-sm"
          >
            <div className="space-y-6">
              <blockquote className="text-xl italic text-primary">
                Pensamentos ao serem testemunhados tornam-se história
              </blockquote>

              <div className="space-y-4 text-primary">
                <p className="leading-relaxed">
                  Construir uma boa relação com a vida nem sempre é fácil, mas é possível
              quando desenvolvemos intimidade conosco. Na psicoterapia temos a oportunidade
              de refletir sobre as nossas experiências e encontrar maneiras de viver
              de modo mais saudável.
                </p>
                <p className="font-medium">
                  Se você procura esse apoio,
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <a
                  href="https://wa.me/+5581995749052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-[#5a6233] transition-colors duration-300"
                  aria-label="Agendar consulta via WhatsApp"
                >
                  Entre em contato
                </a>
                
                <Link
                  href="/psicoOnline"
                  className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="Saiba mais sobre psicoterapia online"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}