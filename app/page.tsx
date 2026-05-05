import ScrollVideo from "./components/ScrollVideo";

export default function Home() {
  return (
    <main className="relative text-white">
      <ScrollVideo />

      <section className="min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight">
          Daria
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-white/80 max-w-md sm:max-w-xl">
          Web designer crafting bold, elegant digital experiences.
        </p>
        <div className="mt-10 sm:mt-12 text-xs sm:text-sm uppercase tracking-widest text-white/60 animate-pulse">
          Scroll
        </div>
      </section>

      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="max-w-2xl w-full">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6">
            Werk
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            Ik ontwerp websites die opvallen — minimalistisch, gebruikersgericht
            en met aandacht voor elk detail. Van concept tot lancering.
          </p>
        </div>
      </section>

      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="max-w-2xl w-full">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6">
            Aanpak
          </h2>
          <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-white/80">
            <li>01 — Onderzoek &amp; strategie</li>
            <li>02 — Ontwerp &amp; prototyping</li>
            <li>03 — Ontwikkeling in Next.js</li>
            <li>04 — Lancering &amp; optimalisatie</li>
          </ul>
        </div>
      </section>

      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="max-w-2xl w-full">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6">
            Diensten
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-white/80">
            <div className="border border-white/20 p-5 sm:p-6 backdrop-blur-sm bg-black/20">
              <h3 className="text-lg sm:text-xl mb-2">Webdesign</h3>
              <p className="text-sm sm:text-base">Op maat, modern en uniek voor jouw merk.</p>
            </div>
            <div className="border border-white/20 p-5 sm:p-6 backdrop-blur-sm bg-black/20">
              <h3 className="text-lg sm:text-xl mb-2">Development</h3>
              <p className="text-sm sm:text-base">Snelle, schaalbare sites met Next.js.</p>
            </div>
            <div className="border border-white/20 p-5 sm:p-6 backdrop-blur-sm bg-black/20">
              <h3 className="text-lg sm:text-xl mb-2">Branding</h3>
              <p className="text-sm sm:text-base">Identiteit die past bij jouw verhaal.</p>
            </div>
            <div className="border border-white/20 p-5 sm:p-6 backdrop-blur-sm bg-black/20">
              <h3 className="text-lg sm:text-xl mb-2">SEO</h3>
              <p className="text-sm sm:text-base">Vindbaar en relevant in zoekmachines.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6">
            Contact
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-8">
            Klaar om iets moois te bouwen? Neem contact op.
          </p>
          <a
            href="mailto:hello@daria.design"
            className="inline-block border border-white/40 px-6 sm:px-8 py-3 text-sm sm:text-base hover:bg-white hover:text-black transition"
          >
            hello@daria.design
          </a>
        </div>
      </section>
    </main>
  );
}
