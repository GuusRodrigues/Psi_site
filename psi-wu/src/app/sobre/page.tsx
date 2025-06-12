import Image from "next/image";
import { SectionWrapper } from "@/components/sectionWrapper";

export default function SobrePage() {
  return (
    <SectionWrapper className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">SOBRE MIM</h2>
          
          <div className="space-y-4 md:space-y-6 text-primary">
            <p className="leading-relaxed text-base md:text-lg">
              Olá! Sou psicólogo voltado para expressões de sofrimento existencial e possibilidades de cuidado frente a essas manifestações com jovens e adultos. Formado pela Universidade do Vale do Ipojuca e Especializando em Psicologia Clínica Fenomenológica-Existencial.
            </p>
            
            <p className="leading-relaxed text-base md:text-lg">
              Acredito que é no testemunho durante a escuta que meros pensamentos se transformam em histórias. E, se me permitem dizer, é uma honra ser convidado para participar como coautor na história de alguém.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 md:px-0">
          <div className="flex gap-3 md:gap-4">
            <div className="w-1/2 relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/YuriSobre1.jpg"
                alt="Yuri Wu em sessão clínica"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 40vw, 25vw"
              />
            </div>
            
            <div className="w-2/5 relative -ml-8 mt-16 md:mt-20 aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/YuriSobre2.jpg"
                alt="Yuri Wu em ambiente profissional"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 30vw, 20vw"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-28">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="w-full max-w-[250px] md:max-w-[300px]">
  <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
    <Image
      src="/yuritrabalho.jpeg"
      alt="Yuri em trabalho"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 80vw, 250px"
    />
  </div>
</div>


          <div className="w-full md:w-3/5 space-y-6">
            <div className="space-y-4 md:space-y-6 text-primary">
              <p className="leading-relaxed text-base md:text-lg">
                Iniciei minha trajetória acadêmica com foco em psicologia infantil, mas isso mudou. Estudando a infância despertei o meu olhar para jovens e adultos com o questionamento: "O que aconteceu com a criança que um dia fomos?".
              </p>
              <p className="leading-relaxed text-base md:text-lg">
                A partir disso, surge um compromisso em ajudar aqueles que enfrentaram desafios ou experiências que comprometeram sua capacidade de viver uma vida plena e significativa.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          {/* Texto no topo */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="space-y-4 text-primary">
              <p className="leading-relaxed text-base md:text-lg">
                Aprofundei-me na fenomenologia-existencial, uma abordagem psicológica. Através dela, penso que, com gentileza, podemos tocar nas partes mais sensíveis de cada um.
              </p>
              <p className="leading-relaxed text-base md:text-lg">
                Meus aperfeiçoamentos na profissão me levam a encontrar pessoas que acreditam no meu trabalho. Tenho apreço pelo que faço e encontro razões diárias na clínica para continuar.
              </p>
            </div>
          </div>

          {/* Grid de 4 fotos */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={`/evento-${item}.jpg`}
                    alt={`Yuri Wu participando de evento ${item}`}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                  />
                </div>
                <div className="mt-3 text-center text-sm md:text-base text-primary italic">
                  {item === 1 && "Palestra sobre Fenomenologia"}
                  {item === 2 && "Workshop para jovens"}
                  {item === 3 && "Aula na universidade"}
                  {item === 4 && "Participação em congresso"}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </SectionWrapper>
  );
}