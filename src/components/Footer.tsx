import React from 'react';
import { Phone, MapPin, Globe, Star, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS } from '../data/businessData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner inside Footer */}
      <div className="border-b border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-sky-400">Paris 8 • Gare Saint-Lazare</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Need your phone inspected? Visit PRC in Paris 8.
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-2">
              Receive an upfront diagnosis and transparent quote before any intervention begins, with full display, touch, and sensor testing before return.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              id="footer-call-btn"
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{BUSINESS.phone}</span>
            </a>
           
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Business Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <span className="font-bold text-base">PRC</span>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">PRC Phone Repair</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional phone repair workshop in Paris 8, specializing in iPhone screen replacement, cracked glass repairs, and touch diagnostics.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-amber-400">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">4.8 / 5</span>
              <span className="text-slate-400">from 1,341 verified customer reviews</span>
            </div>
          </div>

          {/* Column 2: Supported Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Repair Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('repairs')}
                  className="hover:text-white transition-colors text-left"
                >
                  iPhone Screen Replacement
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('repairs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Broken Screen Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('repairs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Touchscreen Issues & Calibration
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('repairs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Black Display & Vertical Lines
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('repairs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Charging Problems
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('repairs')}
                  className="hover:text-white transition-colors text-left"
                >
                  General Phone Repair
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('repairs')} className="hover:text-white transition-colors">
                  Repairs / Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About PRC Phone Repair
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reviews')} className="hover:text-white transition-colors">
                  Customer Reviews (1,341)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Workshop Hours */}
          <div className="space-y-3.5">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Workshop Location
            </h3>
            <div className="text-sm space-y-2.5">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS.address}
                  <span className="block text-xs text-slate-400 mt-0.5">
                    Minutes from Gare Saint-Lazare & close to Paris 9
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-sky-400 transition-colors font-medium">
                  {BUSINESS.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
               
                 
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
              <div className="font-medium text-slate-300 mb-1">Operating Hours Notice:</div>
              <div>Closes at 7:00 PM</div>
              <div>Opens 10:30 AM Friday</div>
              <div className="text-slate-400 mt-1">In-store pickup & direct workshop service</div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-start gap-2 max-w-2xl">
            <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              PRC Phone Repair is an independent local electronics and smartphone repair facility located at 47 Rue d'Amsterdam, Paris 8. Apple, iPhone, and associated trademarks are the property of Apple Inc. PRC Phone Repair is an independent repair service and is not affiliated with or authorized by Apple Inc.
            </p>
          </div>

          <div className="text-right shrink-0">
            © {new Date().getFullYear()} PRC Phone Repair. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
