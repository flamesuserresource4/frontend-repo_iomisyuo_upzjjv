import { Rocket, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-orange-400 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">Ocky Arfian</p>
            <p className="text-xs text-white/60">AI Vibe App Developer</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="text-white/70 hover:text-white transition">Work</a>
          <a href="#expertise" className="text-white/70 hover:text-white transition">Expertise</a>
          <a href="#contact" className="text-white/70 hover:text-white transition">Contact</a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white text-black font-medium hover:bg-white/90 transition"
          >
            <Rocket className="h-4 w-4" /> Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
