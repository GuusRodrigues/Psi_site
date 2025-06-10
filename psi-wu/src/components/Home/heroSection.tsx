import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[70vh] sm:h-[60vh] md:h-[50vh] xl:h-[500px] w-full">
      <Image
        src="/colagemHome.jpeg"
        alt="Consultório ou imagem simbólica"
        layout="fill"
        objectFit="cover"
        className="object-left"
        priority
      />

      {/* Bloco de texto sobreposto */}
      <div className="absolute top-0 right-0 h-full w-full sm:w-1/2 bg-[#6C733C]/80 text-[#FAFAFA] flex items-center px-6 sm:px-12">
        <div className="max-w-md space-y-4">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-snug">
           Aqui, você não é apenas um visitante
          </h1>
          <p className="text-base sm:text-lg leading-relaxed">
            Mas um convidado especial. Você merece alguém ao seu lado disposto a
            te conhecer, te escutar e te acompanhar em sua jornada existencial.
          </p>
          <p className="italic text-sm sm:text-base mt-2">Seja muito bem-vindo (a).</p>
          <p className="text-sm sm:text-base font-semibold">Psicólogo Yuri Wu</p>
        </div>
      </div>
    </section>
  );
}
