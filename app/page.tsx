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

      {/* MANIFEST */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-2xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            09 — Manifest
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-8 leading-tight">
            Wat ik geloof
          </h2>
          <ul className="space-y-6 text-base sm:text-lg text-white/80 leading-relaxed">
            <li><span className="text-white/40 mr-3">—</span> Minder is bijna altijd meer.</li>
            <li><span className="text-white/40 mr-3">—</span> Snelheid is een ontwerpkeuze, geen bijproduct.</li>
            <li><span className="text-white/40 mr-3">—</span> Typografie doet 80% van het werk.</li>
            <li><span className="text-white/40 mr-3">—</span> Toegankelijkheid is geen extra; het is de basis.</li>
            <li><span className="text-white/40 mr-3">—</span> Een goede website voelt onzichtbaar — totdat je hem mist.</li>
            <li><span className="text-white/40 mr-3">—</span> Animatie ondersteunt het verhaal, of het hoort er niet.</li>
          </ul>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-3xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            10 — Case study
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-2">
            Maison Lumière
          </h2>
          <p className="text-sm sm:text-base text-white/50 mb-10">
            Branding + e-commerce · 2026
          </p>
          <div className="space-y-8 text-base sm:text-lg text-white/80 leading-relaxed">
            <p>
              Maison Lumière kwam bij me met een uitdaging: hun handgemaakte
              keramiek werd geliefd in showrooms, maar de website voelde als een
              digitale catalogus. Geen ziel, geen verhaal.
            </p>
            <p>
              We zijn begonnen met de vraag: hoe vertaal je de stilte van een
              atelier naar een scherm? Het antwoord lag in ritme — pauzes,
              ruimte, en typografie die zwijgt waar nodig.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 py-6 border-y border-white/10">
              <div>
                <div className="text-2xl sm:text-4xl font-light">+38%</div>
                <div className="text-xs text-white/50 mt-1">conversie</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-light">2.1s</div>
                <div className="text-xs text-white/50 mt-1">load tijd</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-light">98</div>
                <div className="text-xs text-white/50 mt-1">Lighthouse</div>
              </div>
            </div>
            <p>
              Drie maanden na lancering: 38% meer conversie, gemiddelde
              sessieduur verdubbeld, en een Pinterest-feature die voor een
              uitverkochte collectie zorgde.
            </p>
          </div>
        </div>
      </section>

      {/* PROCES IN DETAIL */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-3xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            11 — Tijdlijn
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-10">
            Een typisch traject
          </h2>
          <div className="space-y-px">
            {[
              { w: "Week 1", t: "Kickoff & onderzoek", d: "Workshops, doelgroep, concurrentie, KPI's." },
              { w: "Week 2", t: "Strategie & sitemap", d: "Informatiearchitectuur en content-skelet." },
              { w: "Week 3–4", t: "Wireframes", d: "Low-fi layouts, gebruikersflows, eerste copy." },
              { w: "Week 5–6", t: "Visueel ontwerp", d: "Hi-fi mockups in Figma, designsysteem." },
              { w: "Week 7–9", t: "Development", d: "Next.js build, animaties, integraties." },
              { w: "Week 10", t: "QA & launch", d: "Cross-browser, performance, SEO checks." },
              { w: "Daarna", t: "Doorontwikkeling", d: "Maandelijkse retainer voor updates en groei." },
            ].map((s) => (
              <div
                key={s.w}
                className="grid grid-cols-[90px_1fr] sm:grid-cols-[140px_1fr] gap-4 sm:gap-6 border-t border-white/10 py-5"
              >
                <span className="text-xs sm:text-sm text-white/50 tabular-nums pt-1">
                  {s.w}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-light mb-1">{s.t}</h3>
                  <p className="text-sm text-white/60">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVER MIJ */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-2xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            12 — Over mij
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-8">
            Hi, ik ben Daria
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-white/80 leading-relaxed">
            <p>
              Ik ben opgegroeid in Rotterdam, studeerde Communication &amp; Multimedia
              Design in Den Haag en werk nu vanuit een klein atelier in
              Amsterdam-Noord.
            </p>
            <p>
              Voordat ik voor mezelf begon werkte ik bij twee design studios in
              Berlijn en Amsterdam, waar ik leerde dat de beste websites niet
              opvallen omdat ze schreeuwen, maar omdat ze precies zijn.
            </p>
            <p>
              Buiten werk: keramiek, lange wandelingen, slechte koffie in goede
              cafés, en te veel tijd op archive.org.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS DETAILS / TOOLS */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-3xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            13 — Stack
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-10">
            Tools waar ik mee werk
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4 text-white/70">
            {[
              ["Ontwerp", "Figma · Adobe CC"],
              ["Code", "Next.js · TypeScript"],
              ["Styling", "Tailwind · CSS"],
              ["CMS", "Sanity · Payload"],
              ["E-commerce", "Shopify · Stripe"],
              ["Animatie", "GSAP · Framer Motion"],
              ["3D / WebGL", "Three.js · R3F"],
              ["Hosting", "Vercel · Cloudflare"],
              ["Analytics", "Plausible · GA4"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-xs uppercase tracking-widest text-white/40 mb-1">
                  {k}
                </div>
                <div className="text-sm sm:text-base">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIJZEN */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-3xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            14 — Tarieven
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-10">
            Pakketten
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                t: "Essentials",
                p: "vanaf €2.500",
                l: ["One-pager", "Tot 3 secties", "Mobile-first", "2 revisierondes"],
              },
              {
                t: "Studio",
                p: "vanaf €6.500",
                l: ["Tot 8 pagina's", "Headless CMS", "Custom animaties", "SEO basis"],
                hl: true,
              },
              {
                t: "Custom",
                p: "op aanvraag",
                l: ["E-commerce", "WebGL / 3D", "Integraties", "Doorlopende ondersteuning"],
              },
            ].map((p) => (
              <div
                key={p.t}
                className={`border p-6 sm:p-7 backdrop-blur-sm transition ${
                  p.hl
                    ? "border-white/60 bg-white/5"
                    : "border-white/20 bg-black/30"
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-light mb-1">{p.t}</h3>
                <p className="text-sm text-white/60 mb-5">{p.p}</p>
                <ul className="space-y-2 text-sm text-white/80">
                  {p.l.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-white/40">·</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/40 mt-8">
            Alle prijzen excl. BTW. Maatwerk altijd mogelijk.
          </p>
        </div>
      </section>

      {/* MEER TESTIMONIALS */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-2xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            15 — Nog meer reviews
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-10">
            Wat anderen zeggen
          </h2>
          <div className="space-y-10">
            {[
              { q: "Ik kreeg precies wat ik nodig had — en dingen waar ik zelf nooit aan had gedacht.", a: "Mira Janssen, Bureau Vier" },
              { q: "Strakke communicatie, geen verrassingen, en een eindresultaat dat boven verwachting was.", a: "Lukas Berger, Kade 8" },
              { q: "Daria luistert eerst, ontwerpt daarna. Zeldzaam in deze industrie.", a: "Anouk de Bruin, Café Origine" },
              { q: "Drie jaar later vragen mensen nog steeds wie onze site heeft gemaakt.", a: "Jasper Vos, Atelier" },
            ].map((r) => (
              <blockquote key={r.a} className="border-l-2 border-white/30 pl-5 sm:pl-6">
                <p className="text-lg sm:text-xl font-light leading-relaxed text-white/90">
                  &ldquo;{r.q}&rdquo;
                </p>
                <footer className="mt-3 text-sm text-white/50">— {r.a}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* MEER FAQ */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-2xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            16 — Nog meer FAQ
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-10">
            Praktisch
          </h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {[
              { q: "Werk je met klanten buiten Nederland?", a: "Ja, regelmatig. Calls in het Engels of Duits, alles asynchroon waar mogelijk." },
              { q: "Wat heb je van mij nodig om te starten?", a: "Een korte briefing, eventuele bestaande merkmaterialen en een idee van wanneer het live moet." },
              { q: "Bouw je in WordPress?", a: "Niet meer. Ik werk met moderne stacks (Next.js + headless CMS) voor betere snelheid en flexibiliteit." },
              { q: "Hosting en domeinnamen — regel je dat ook?", a: "Yes, van A tot Z. Of we leveren het op aan jouw eigen team — wat jij prettig vindt." },
              { q: "Wat als ik later nieuwe pagina's wil toevoegen?", a: "Met een CMS doe je dat zelf. Voor grotere uitbreidingen werken we met een retainer of losse opdracht." },
              { q: "Krijg ik de broncode?", a: "Altijd. Jij bent eigenaar van het ontwerp én de code." },
            ].map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer flex items-start justify-between gap-4 list-none">
                  <span className="text-base sm:text-lg font-light">{f.q}</span>
                  <span className="text-white/50 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* JAARTALLEN / TIMELINE */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-2xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            17 — Tot nu toe
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-10">
            Een korte geschiedenis
          </h2>
          <div className="space-y-8">
            {[
              ["2019", "Daria Studio opgericht na 4 jaar in design studios in Berlijn en Amsterdam."],
              ["2020", "Eerste e-commerce launch: Atelier Noord. 5 jaar later nog steeds klant."],
              ["2022", "Verhuisd naar atelier in Amsterdam-Noord. Eerste retainer-klanten."],
              ["2024", "Volledig overgestapt naar Next.js + headless CMS als standaard stack."],
              ["2026", "Vandaag: 40+ projecten gelanceerd, 12 langdurige klanten."],
            ].map(([y, t]) => (
              <div key={y} className="grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr] gap-4 sm:gap-6">
                <span className="text-white/40 text-sm sm:text-base tabular-nums">{y}</span>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            18 — Contact
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
            <a href="#" className="hover:text-white transition">Are.na</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-4 sm:px-6 text-center text-xs sm:text-sm text-white/40">
        © {new Date().getFullYear()} Daria Studio · KvK 00000000 · Amsterdam
      </footer>
    </main>
  );
}
