import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-white to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Exclusively Slots. Exceptionally Fun.</h1>
            <p className="mt-4 text-lg text-slate-600">
              The dedicated slot provider for operators who want a focused, high-performance portfolio. 
              Simple API. Mobile-first. Certified and ready to scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#games"
                className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              >
                Explore Our Games <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#featured"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Watch Demos <PlayCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Visual showcase */}
          <div className="grid grid-cols-3 gap-4">
            {["/images/slot1.jpg","/images/slot2.jpg","/images/slot3.jpg","/images/slot4.jpg","/images/slot5.jpg","/images/slot6.jpg"].map((src, i) => (
              <div key={i} className="aspect-[3/4] rounded-xl overflow-hidden shadow-md ring-1 ring-slate-200 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                <span className="text-slate-400 text-xs">Game Art {i+1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
