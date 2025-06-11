import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "../sectionWrapper";

export function AboutSection() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16 px-6 sm:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Sobre mim</h2>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-10">
        <div className="w-full md:w-1/2 space-y-6 text-primary">
          <h2 className="text-primary text-3xl sm:text-4xl font-bold">Yuri Wu</h2>
          <p className="text-lg font-medium">- Psicoterapeuta</p>
          
          <div className="space-y-4">
            <p className="text-base leading-relaxed">
              Olá! Sou psicólogo voltado para expressões de sofrimento existencial e
              possibilidades de cuidado frente a essas manifestações com jovens e adultos.
              Na minha prática utilizo da abordagem fenomenológica-existencial (em que hoje
              me especializo), busco ajudar as pessoas a se compreenderem melhor, visando
              uma vida leve e com sentido.
            </p>
            <p className="text-base leading-relaxed">
              Vejo nas artes uma grande ferramenta expressiva para o desenvolvimento humano.
              Não muito diferente disso, encaro o meu trabalho como algo poético e artesanal.
              Escutar ativamente e costurar palavras me são umas das mais belas artes.
            </p>
          </div>

          <Link
            href="/sobre"
            className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-[#5a6233] transition"
          >
            Saiba mais sobre mim
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative aspect-[3/4] w-full max-w-xs rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/yuri.jpg"
              alt="Psicólogo Yuri Wu"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 90vw, 400px"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}