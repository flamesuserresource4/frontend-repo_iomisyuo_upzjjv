export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Let’s build your next AI experience</h3>
            <p className="mt-3 text-white/70 max-w-md">
              Tell me about your product and goals. I’ll design and develop a
              polished, performant experience with an unmistakable vibe.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a
              href="mailto:hello@ocky.dev"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:brightness-110 transition"
            >
              Email: hello@ocky.dev
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Ocky Arfian. All rights reserved.</p>
          <div className="text-xs text-white/50">Built with care • Futuristic • Minimal • Elegant</div>
        </div>
      </div>
    </footer>
  );
}
