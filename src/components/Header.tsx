import React, { useState } from 'react';
import { Phone, MapPin, Star, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS } from '../data/businessData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'repairs', label: 'Repairs / Services' },
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1 text-amber-400 font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.8/5 ({BUSINESS.reviewCount.toLocaleString()} reviews)</span>
            </span>
            <span className="hidden sm:inline-block text-slate-400">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>47 Rue d'Amsterdam, Paris 8 (Near Gare Saint-Lazare)</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden md:inline-block text-slate-400">In-store diagnosis & quote before intervention</span>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              id="header-top-call-link"
              className="font-semibold text-white hover:text-sky-300 transition-colors flex items-center gap-1"
              aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{BUSINESS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <button
            onClick={() => handleLinkClick('home')}
            id="brand-logo-btn"
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1"
            aria-label="PRC Phone Repair - Return to homepage"
          >
            <div className="w-11 h-11 rounded-xl bg-slate-950 flex items-center justify-center text-white shadow-sm border border-slate-800 group-hover:bg-sky-950 transition-colors">
              <ShieldCheck className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <div className="font-extrabold text-xl tracking-tight text-slate-900 leading-none">
                PRC <span className="text-sky-600 font-semibold">Phone Repair</span>
              </div>
              <div className="text-xs text-slate-600 mt-1 flex items-center gap-1 font-medium">
                <span>Paris 8</span>
                <span>•</span>
                <span>Gare Saint-Lazare</span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-slate-100 text-slate-950 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              id="header-call-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-colors"
              aria-label="Call PRC Phone Repair"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Call {BUSINESS.phone}</span>
            </a>

            <button
              onClick={() => handleLinkClick('contact')}
              id="header-get-diagnosis-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-950 text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm shadow-slate-950/10 active:scale-[0.98]"
            >
              <span>Get a Diagnosis</span>
              <ChevronRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              id="mobile-quick-call"
              className="p-2.5 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200"
              aria-label="Call PRC Phone Repair"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-slate-900 text-white font-semibold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              id="mobile-menu-call-btn"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {BUSINESS.phone}</span>
            </a>

            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-menu-directions-btn"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 transition-colors"
            >
              <MapPin className="w-4 h-4 text-sky-600" />
              <span>Get Directions to Paris 8</span>
            </a>
          </div>

          <div className="text-center pt-2 text-xs text-slate-600">
            47 Rue d'Amsterdam, 75008 Paris • Closes at 7 PM / Opens 10:30 AM Friday
          </div>
        </div>
      )}
    </header>
  );
};
