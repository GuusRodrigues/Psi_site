import Image from "next/image";

export function HeroSection() {
  return (  
    <div className="relative h-[70vh] sm:h-[60vh] md:h-[50vh] xl:h-[500px] w-full mb-10">
      <div className="absolute inset-0">
        <Image
          src="/colagemHome.jpeg"
          alt="Colagem artística de homem com girassóis"
          fill
          className="object-cover object-left"
          priority
          sizes="100vw"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/30 flex items-center justify-end">
        <div className="absolute right-0 h-full w-full sm:w-1/2 bg-[#6C733C]/90 text-textbranco flex items-center px-6 sm:px-12">
          <div className="max-w-md space-y-6">
            <h1 className="text-3xl sm:text-4xl font-semibold leading-snug">
              Aqui, você não é apenas um visitante
            </h1>
            <p className="text-base sm:text-lg leading-relaxed">
              Mas um convidado especial. Você merece alguém ao seu lado disposto a
              te conhecer, te escutar e te acompanhar em sua jornada existencial.
            </p>
            <p className="italic text-sm sm:text-base mt-4">Seja muito bem-vindo (a).</p>
            <p className="text-sm sm:text-base font-semibold">Psicólogo Yuri Wu</p>
            
            <div className="absolute bottom-6 right-6 z-10" >
                <a
                href="https://wa.me/+5581995749052"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-soft text-soft rounded-lg hover:bg-soft hover:text-primary transition-colors duration-300"
                aria-label="Agendar consulta via WhatsApp"
              >
                Entre em contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}