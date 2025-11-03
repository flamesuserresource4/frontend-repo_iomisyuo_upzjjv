import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black pt-24">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle gradient vignettes on top of Spline for depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full bg-gradient-to-tr from-violet-600/20 via-fuchsia-500/10 to-orange-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Futuristic • Elegant • Minimal
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/70">
            Crafting AI‑powered experiences with a futuristic vibe
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/70">
            I’m Ocky Arfian — a professional AI Vibe app developer. I build
            sleek, intelligent products that feel alive: fluid motion, elegant
            interfaces, and thoughtful AI woven into every interaction.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:brightness-110 transition"
            >
              Start a project
            </a>
            <a
              href="#expertise"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Explore expertise
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
