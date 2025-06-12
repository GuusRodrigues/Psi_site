import Image from "next/image";
import { SectionWrapper } from "@/components/sectionWrapper";

export default function SobrePage() {
  return (
    <SectionWrapper className="py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">SOBRE MIM</h2>
          <div className="space-y-4 text-primary">
            <p className="leading-relaxed">
              Olá! Sou psicólogo voltado para expressões de sofrimento existencial e possibilidades de cuidado frente a essas manifestações com jovens e adultos.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="flex gap-4">
            {/* Primeira foto (mantida) */}
            <div className="w-3/5 relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/YuriSobre1.jpg"
                alt="Yuri Wu em sessão"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            
            {/* Segunda foto (agora mais larga) */}
            <div className="w-2/5 relative -ml-12 mt-16 aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/YuriSobre2.jpg"
                alt="Yuri Wu em ambiente profissional"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 30vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}