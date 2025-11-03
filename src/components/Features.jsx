import { Brain, Code2, Cpu, Shield } from "lucide-react";

const features = [
  {
    title: "AI-first Product Design",
    icon: Brain,
    desc: "From concept to launch — experiences that blend intelligence, motion, and delightful micro‑interactions.",
  },
  {
    title: "Robust Engineering",
    icon: Code2,
    desc: "Type-safe frontends, scalable APIs, and clean architectures that evolve with your business.",
  },
  {
    title: "Real-time & Voice",
    icon: Cpu,
    desc: "Voice agents, streaming UIs, and low-latency systems that feel instant and responsive.",
  },
  {
    title: "Security & Reliability",
    icon: Shield,
    desc: "Authentication, rate limiting, and observability built-in — so things just work.",
  },
];

export default function Features() {
  return (
    <section id="expertise" className="relative bg-black py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-violet-600/10 via-fuchsia-500/10 to-orange-400/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Expertise</h2>
          <p className="mt-3 text-white/60">
            Precision engineering meets elegant aesthetics. I ship work that feels
            polished, intentional, and fast.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-violet-600/30 via-fuchsia-500/30 to-orange-400/30 flex items-center justify-center text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-violet-600/10 via-fuchsia-500/10 to-orange-400/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
