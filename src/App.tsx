/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Phone, MapPin, ShieldCheck, ChevronUp } from 'lucide-react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RepairsPage } from './pages/RepairsPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { BUSINESS } from './data/businessData';

export default function App() {
  // Read initial page from hash if present
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    if (['home', 'repairs', 'about', 'reviews', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync hash and update SEO meta on page change
  useEffect(() => {
    window.location.hash = currentPage;

    const titles: Record<PageId, string> = {
      home: "PRC Phone Repair – Professional Phone & iPhone Repair Paris 8",
      repairs: "Phone Repair & iPhone Screen Replacement Services – PRC Phone Repair Paris 8",
      about: "About PRC Phone Repair – Professional Phone Repair Workshop in Paris 8",
      reviews: "Customer Reviews (4.8/5, 1,341 reviews) – PRC Phone Repair Paris 8",
      contact: "Contact & Location (47 Rue d'Amsterdam) – PRC Phone Repair Paris 8",
    };

    const descriptions: Record<PageId, string> = {
      home: "Professional phone repair in Paris 8 near Gare Saint-Lazare. iPhone screen replacement, transparent diagnosis & quote, display and sensor testing before return.",
      repairs: "Explore our iPhone screen replacement and smartphone repair services in Paris 8. Diagnosis and quote prior to intervention with display, touch, and sensor verification.",
      about: "Learn about PRC Phone Repair, an independent local phone repair workshop at 47 Rue d'Amsterdam in Paris 8 near Gare Saint-Lazare.",
      reviews: "Read verified customer review themes for PRC Phone Repair. Rated 4.8/5 from 1,341 reviews for quick repairs, helpful service, and display replacements.",
      contact: "Visit PRC Phone Repair at 47 Rue d'Amsterdam, 75008 Paris. Telephone: +33 1 45 26 82 07. Near Gare Saint-Lazare and Paris 9.",
    };

    document.title = titles[currentPage];

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[currentPage]);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', titles[currentPage]);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', descriptions[currentPage]);
    }
  }, [currentPage]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'repairs', 'about', 'reviews', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Track scroll position for Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
      {/* Top Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
            {currentPage === 'repairs' && <RepairsPage onNavigate={handleNavigate} />}
            {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
            {currentPage === 'reviews' && <ReviewsPage onNavigate={handleNavigate} />}
            {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent Mobile Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-lg">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            id="mobile-bottom-call-btn"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call PRC</span>
          </a>

          <a
            href={BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-bottom-directions-btn"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-colors"
          >
            <MapPin className="w-4 h-4 text-sky-400" />
            <span>Directions</span>
          </a>
        </div>
      </div>

      {/* Scroll to Top floating button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          className="fixed bottom-20 md:bottom-8 right-5 z-40 p-3 rounded-full bg-slate-900/90 text-white hover:bg-slate-800 shadow-lg border border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-sky-500"
          aria-label="Scroll back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
