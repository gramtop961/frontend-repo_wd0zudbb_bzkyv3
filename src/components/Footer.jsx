import { Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500" />
              <span className="font-semibold tracking-tight text-slate-900">Just Slots</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Focused slot games for modern operators.</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-slate-700"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="text-slate-500 hover:text-slate-700"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Games</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#games" className="hover:text-slate-900">All Games</a></li>
              <li><a href="#" className="hover:text-slate-900">Classic</a></li>
              <li><a href="#" className="hover:text-slate-900">Video</a></li>
              <li><a href="#" className="hover:text-slate-900">Jackpot</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-slate-900">About Us</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#news" className="hover:text-slate-900">News</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-slate-900">Terms of Use</a></li>
              <li><a href="#" className="hover:text-slate-900">Responsible Gaming</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <p className="text-xs text-slate-500">© {year} Just Slots. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>Licensed by MGA</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>BeGambleAware.org</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
