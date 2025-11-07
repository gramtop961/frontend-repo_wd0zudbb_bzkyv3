import { ShieldCheck, Phone, Wrench, Cable } from "lucide-react";

const items = [
  {
    icon: Cable,
    title: "Single API",
    text: "Integrate once and access the full portfolio with robust docs and SDKs.",
  },
  {
    icon: ShieldCheck,
    title: "Certified & Licensed",
    text: "Tested by leading labs and compliant in key jurisdictions.",
  },
  {
    icon: Phone,
    title: "Mobile-first",
    text: "Lightning-fast loading and touch-optimized gameplay on any device.",
  },
  {
    icon: Wrench,
    title: "Promo Tools",
    text: "Free spins, tournaments, jackpots and flexible campaign controls.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-16" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Why Just Slots</h2>
          <p className="mt-2 text-slate-600">Focused product, enterprise-grade delivery.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <Icon className="h-6 w-6 text-violet-600" />
              <h3 className="mt-3 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
