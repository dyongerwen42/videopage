import ScrollVideo from "./components/ScrollVideo";

export default function Home() {
  return (
    <main className="relative text-white">
      <ScrollVideo />

      {/* HERO */}
      <section className="min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/60 mb-4">
          Daria Studio · Amsterdam
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight">
          Daria
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-white/80 max-w-md sm:max-w-xl">
          Web designer crafting bold, elegant digital experiences.
        </p>
        <div className="mt-10 sm:mt-12 text-xs sm:text-sm uppercase tracking-widest text-white/60 animate-pulse">
          Scroll ↓
        </div>
      </section>

      {/* INTRO */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-2xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            01 — Intro
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-6 leading-tight">
            Ik bouw websites die <em className="not-italic text-white/60">voelen</em> als jouw merk.
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-4">
            Sinds 2019 ontwerp en ontwikkel ik digitale ervaringen voor
            ondernemers, studio&apos;s en merken die opvallen. Geen templates,
            geen shortcuts — elk project begint bij een wit canvas en jouw
            verhaal.
          </p>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Mijn werk balanceert tussen rust en lef: typografie als anker,
            beweging als richting, details die blijven hangen.
          </p>
        </div>
      </section>

      {/* WERK */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-3xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            02 — Werk
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-8">
            Recente projecten
          </h2>
          <div className="space-y-px">
            {[
              { title: "Maison Lumière", tag: "Branding · Webdesign", year: "2026" },
              { title: "Atelier Noord", tag: "E-commerce · Shopify", year: "2025" },
              { title: "Studio Vink", tag: "Webdesign · Next.js", year: "2025" },
              { title: "Bureau Vier", tag: "Identity · Web", year: "2024" },
              { title: "Café Origine", tag: "Webdesign · CMS", year: "2024" },
            ].map((p) => (
              <div
                key={p.title}
                className="flex items-baseline justify-between border-t border-white/10 py-4 sm:py-5 hover:bg-white/5 transition px-2 -mx-2"
              >
                <div>
                  <h3 className="text-lg sm:text-2xl font-light">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-white/50">{p.tag}</p>
                </div>
                <span className="text-xs sm:text-sm text-white/50 tabular-nums">
                  {p.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AANPAK */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-3xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            03 — Aanpak
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-10">
            Hoe ik werk
          </h2>
          <div className="space-y-8">
            {[
              {
                n: "01",
                title: "Onderzoek & strategie",
                body: "We beginnen met de vragen die er echt toe doen: voor wie, waarom nu, en hoe meten we succes? Geen aannames, wel duidelijkheid.",
              },
              {
                n: "02",
                title: "Ontwerp & prototyping",
                body: "Schetsen, moodboards, Figma-prototypes. Ik werk in korte iteraties zodat je vroeg kunt voelen waar het naartoe gaat.",
              },
              {
                n: "03",
                title: "Ontwikkeling in Next.js",
                body: "Razendsnelle, toegankelijke sites. Server-rendered waar nodig, statisch waar het kan. Animaties die het verhaal versterken — niet vertragen.",
              },
              {
                n: "04",
                title: "Lancering & doorontwikkeling",
                body: "Na launch blijf ik betrokken: analytics, A/B-tests, content-updates. Een site is geen eindpunt maar een levend product.",
              },
            ].map((s) => (
              <div key={s.n} className="grid grid-cols-[auto_1fr] gap-4 sm:gap-8">
                <span className="text-white/40 text-sm sm:text-base tabular-nums pt-1">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-light mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIENSTEN */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-3xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            04 — Diensten
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-8">
            Wat ik aanbied
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-white/80">
            {[
              {
                t: "Webdesign",
                d: "Op maat, modern en uniek voor jouw merk. Van one-pager tot complete site.",
              },
              {
                t: "Development",
                d: "Snelle, schaalbare sites met Next.js, TypeScript en Tailwind.",
              },
              {
                t: "Branding",
                d: "Logo, kleur, typografie en tone of voice — een identiteit die past bij jouw verhaal.",
              },
              {
                t: "Motion & 3D",
                d: "Subtiele animaties, scroll-driven storytelling en WebGL-experimenten.",
              },
              {
                t: "SEO & Analytics",
                d: "Vindbaar én meetbaar. Technisch SEO, structured data, dashboards.",
              },
              {
                t: "CMS",
                d: "Sanity, Payload of Contentful — jij past content aan, ik bouw de basis.",
              },
            ].map((s) => (
              <div
                key={s.t}
                className="border border-white/20 p-5 sm:p-6 backdrop-blur-sm bg-black/30 hover:bg-black/50 transition"
              >
                <h3 className="text-lg sm:text-xl mb-2">{s.t}</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KLANTEN */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-3xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            05 — Vertrouwd door
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-10">
            Klanten & samenwerkingen
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              "Lumière",
              "Noord",
              "Vink",
              "Vier",
              "Origine",
              "Kade 8",
              "Maison",
              "Bureau",
              "Atelier",
            ].map((n) => (
              <div
                key={n}
                className="bg-black/40 backdrop-blur-sm aspect-[3/2] flex items-center justify-center text-white/60 text-sm sm:text-base font-light tracking-wide"
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-2xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            06 — Reviews
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-10">
            Wat klanten zeggen
          </h2>
          <div className="space-y-10">
            <blockquote className="border-l-2 border-white/30 pl-5 sm:pl-6">
              <p className="text-lg sm:text-xl font-light leading-relaxed text-white/90">
                &ldquo;Daria denkt mee als een partner, niet als een leverancier.
                Onze nieuwe site voelt eindelijk als ons.&rdquo;
              </p>
              <footer className="mt-3 text-sm text-white/50">
                — Eva de Wit, Maison Lumière
              </footer>
            </blockquote>
            <blockquote className="border-l-2 border-white/30 pl-5 sm:pl-6">
              <p className="text-lg sm:text-xl font-light leading-relaxed text-white/90">
                &ldquo;Strak, snel en zonder gedoe. Conversie ging binnen een
                maand met 38% omhoog.&rdquo;
              </p>
              <footer className="mt-3 text-sm text-white/50">
                — Tom Bakker, Atelier Noord
              </footer>
            </blockquote>
            <blockquote className="border-l-2 border-white/30 pl-5 sm:pl-6">
              <p className="text-lg sm:text-xl font-light leading-relaxed text-white/90">
                &ldquo;Het beste oog voor detail dat ik ooit heb meegemaakt in
                een samenwerking.&rdquo;
              </p>
              <footer className="mt-3 text-sm text-white/50">
                — Sanne Vink, Studio Vink
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-2xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            07 — FAQ
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-10">
            Veelgestelde vragen
          </h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {[
              {
                q: "Wat kost een website gemiddeld?",
                a: "Een one-pager begint rond €2.500, een uitgebreide site met CMS zit doorgaans tussen €6.000 en €15.000. Ik maak altijd een offerte op maat.",
              },
              {
                q: "Hoe lang duurt een traject?",
                a: "Reken op 4 tot 8 weken voor een standaardproject, afhankelijk van scope en hoe snel content beschikbaar is.",
              },
              {
                q: "Werk je alleen of in een team?",
                a: "Ik werk solo aan ontwerp en development. Voor copy, fotografie of complexe backends werk ik samen met een vast netwerk.",
              },
              {
                q: "Kan ik zelf de site beheren?",
                a: "Ja — ik bouw standaard met een headless CMS zodat je teksten, foto&apos;s en pagina&apos;s zelf kunt aanpassen.",
              },
            ].map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer flex items-start justify-between gap-4 list-none">
                  <span className="text-base sm:text-lg font-light">{f.q}</span>
                  <span className="text-white/50 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            08 — Contact
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-light mb-6 leading-tight">
            Laten we iets moois bouwen.
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-10 max-w-md mx-auto">
            Heb je een idee, een merk, of een vage wens? Stuur een bericht —
            ik antwoord binnen een dag.
          </p>
          <a
            href="mailto:hello@daria.design"
            className="inline-block border border-white/40 px-7 sm:px-10 py-3 sm:py-4 text-sm sm:text-base tracking-wide hover:bg-white hover:text-black transition"
          >
            hello@daria.design
          </a>
          <div className="mt-10 flex justify-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Dribbble</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-4 sm:px-6 text-center text-xs sm:text-sm text-white/40">
        © {new Date().getFullYear()} Daria Studio · KvK 00000000 · Amsterdam
      </footer>
    </main>
  );
}
