export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Bem-vindo ao site do psicólogo Yuri Wu
      </h1>
      <p className="text-lg md:text-xl max-w-xl mb-8">
        Oferecemos psicoterapia online e presencial para ajudar você a viver melhor.
      </p>
      <a
        href="/psicoterapia-online"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition"
      >
        Saiba mais sobre psicoterapia online
      </a>
    </section>
  );
}
