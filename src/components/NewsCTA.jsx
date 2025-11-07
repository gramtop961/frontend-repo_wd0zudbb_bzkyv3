import { Newspaper, ArrowRight, Mail } from "lucide-react";

const posts = [
  { id: 1, title: "Just Slots launches Neon Reels", date: "Sep 24, 2025" },
  { id: 2, title: "Q3 Platform Update: tournaments & more", date: "Sep 10, 2025" },
  { id: 3, title: "Just Slots partners with Apex Casino", date: "Aug 30, 2025" },
];

export default function NewsCTA() {
  return (
    <section className="py-16 border-t border-slate-200" id="news">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-violet-600" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Latest News</h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <article key={p.id} className="rounded-lg border border-slate-200 p-4 hover:shadow-sm bg-white">
                  <p className="text-xs text-slate-500">{p.date}</p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900">{p.title}</h3>
                  <a href="#" className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-violet-700">Read more <ArrowRight className="h-3 w-3" /></a>
                </article>
              ))}
            </div>
            <a href="#" className="mt-6 inline-block text-sm font-semibold text-violet-700">View all news →</a>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-6 text-white">
            <h3 className="text-xl font-bold">Ready to partner with Just Slots?</h3>
            <p className="mt-2 text-violet-100">Let’s talk integrations, roadmaps, and growth. Our team will follow up within 24 hours.</p>
            <form className="mt-4 grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="Your work email" className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white" />
              <button className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-violet-700 hover:bg-violet-50">
                <Mail className="h-4 w-4" /> Get in touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
