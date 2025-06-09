import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="w-full py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Texto à esquerda */}
        <div className="w-full md:w-1/2 space-y-4 text-primary">
          <h2 className="text-primary text-3xl sm:text-4xl font-bold">Yuri Wu</h2>
          <p className="text-lg font-medium">- Psicoterapeuta</p>
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

          <Link
            href="/sobre"
            className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-xl hover:bg-[#5a6233] transition"
          >
            Saiba mais sobre mim
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center p-6">
            <div className="w-64 h-80 relative rounded-md overflow-hidden shadow-md">
                <Image
                src="/yuri.jpg"
                alt="Psicólogo Yuri Wu"
                layout="fill"
                objectFit="cover"
                className="object-top"
              />
            </div>
        </div>
      </div>
    </section>
  );
}
