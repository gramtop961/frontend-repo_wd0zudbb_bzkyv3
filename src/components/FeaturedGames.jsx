import { Info, Gamepad2 } from "lucide-react";

const games = [
  { id: 1, title: "Neon Reels", category: "Video" },
  { id: 2, title: "Pyramid Riches", category: "Jackpot" },
  { id: 3, title: "Ocean Spins", category: "Video" },
  { id: 4, title: "Wild West 7s", category: "Classic" },
  { id: 5, title: "Dragon Fortune", category: "Video" },
  { id: 6, title: "Candy Stars", category: "Video" },
  { id: 7, title: "Jungle Rush", category: "Video" },
  { id: 8, title: "Galactic Gold", category: "Jackpot" },
  { id: 9, title: "Mythic Ways", category: "Video" },
  { id: 10, title: "Royal Spins", category: "Classic" },
  { id: 11, title: "Sun Temple", category: "Video" },
  { id: 12, title: "Turbo Fruits", category: "Classic" },
];

export default function FeaturedGames() {
  return (
    <section className="py-16" id="featured">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured Games</h2>
            <p className="mt-2 text-slate-600">A curated selection of our top performers.</p>
          </div>
          <a href="#games" className="text-sm font-semibold text-violet-700 hover:text-violet-900">View All Games →</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((g) => (
            <div key={g.id} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                <span className="text-slate-400 text-sm">{g.title}</span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">{g.title}</h3>
                    <p className="text-xs text-slate-500">{g.category}</p>
                  </div>
                  <div className="flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <button className="inline-flex items-center gap-1 rounded-md border border-slate-300 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
                      <Gamepad2 className="h-3.5 w-3.5" /> Demo
                    </button>
                    <button className="inline-flex items-center gap-1 rounded-md bg-violet-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700">
                      <Info className="h-3.5 w-3.5" /> Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
