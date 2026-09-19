import React from 'react';
import {
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  CheckCircle2,
  Cpu,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS, IMAGES } from '../data/businessData';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero */}
      <section className="bg-slate-950 text-white pt-12 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-extrabold tracking-wider text-sky-400">
              Local Workshop • Paris 8
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
              About PRC Phone Repair
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              A trusted local phone repair workshop situated at 47 Rue d'Amsterdam in the 8th arrondissement
              of Paris. Dedicated to transparent diagnostics, upfront quotes, and rigorous testing before
              any device is returned.
            </p>

            <div className="mt-6 flex items-center gap-2 text-amber-400 text-sm font-semibold">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>4.8 / 5 Rating from 1,341+ Verified Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Philosophy / Core Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-wider text-sky-600">
              Our Working Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A Local Workshop Focused on Clarity &amp; Precision
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When expensive smartphones break, customers need an honest diagnosis, straightforward
              communication, and dependable repairs. At PRC Phone Repair, our workshop is built around three
              firm operational commitments:
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    1. Direct Diagnosis Before Intervention
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    We examine your device in-person at our counter. We identify the source of the malfunction
                    before touching a single screw or replacing a component.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    2. Transparent Quote Approval
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    You are given a clear price quote before any work starts. No surprise invoices, unexpected
                    surcharges, or forced upsells. You remain in complete control.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    3. Display, Touch &amp; Sensor Testing Before Return
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    A screen replacement is only complete once the display brightness, edge-to-edge touch grid,
                    proximity sensor, and camera alignment have been thoroughly verified on our bench.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
              <img
                src={IMAGES.technicianWorkshop}
                alt="Smartphone technician performing bench diagnosis at PRC Phone Repair workshop in Paris"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-slate-900 text-white text-xs space-y-2">
                <div className="font-bold text-sm text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  47 Rue d'Amsterdam, Paris 8
                </div>
                <p className="text-slate-300">
                  Conveniently serving commuters, residents, and visitors between Saint-Lazare station and the 9th arrondissement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION ADVANTAGE: GARE SAINT-LAZARE & PARIS 9 */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-lg">
                <img
                  src={IMAGES.parisStreet}
                  alt="Street view in Paris 8 near Rue d'Amsterdam and Gare Saint-Lazare"
                  className="w-full h-72 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-sky-600">
                Location Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Minutes from Gare Saint-Lazare &amp; Paris 9
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our address at <strong>47 Rue d'Amsterdam</strong> provides an exceptional central transit
                advantage in Paris. Positioned just a few minutes on foot from Gare Saint-Lazare — one of
                the busiest commuter transit hubs in Europe — our repair workshop is easily accessible for:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <strong>Commuters &amp; Travelers:</strong> Passing through Gare Saint-Lazare needing immediate device diagnostics before journeys.
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <strong>Paris 8 &amp; 9 Residents:</strong> Local neighborhood customers looking for a dependable counter for phone issues.
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <strong>Office Workers:</strong> Nearby professionals dropping off their phone during business hours for in-store pickup.
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <strong>Multiple Transit Connections:</strong> Metro lines 3, 12, 13, 14, RER E, and Transilien lines J &amp; L.
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-directions-btn"
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm inline-flex items-center gap-2 transition-colors"
                >
                  <Compass className="w-4 h-4" />
                  <span>Open Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDEPENDENT REPAIR TRANSPARENCY NOTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 max-w-4xl mx-auto">
          <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            Clear &amp; Factual Business Standards
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            PRC Phone Repair operates as an independent, local phone repair store in Paris 8. We believe
            in direct technical accountability, fair pricing, and clear communication. All device brand
            names (such as iPhone or Apple) are mentioned solely to inform customers of hardware compatibility
            and repair services offered at our counter.
          </p>
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <span>Location: 47 Rue d'Amsterdam, 75008 Paris</span>
            <span>Phone: {BUSINESS.phone}</span>
            <button
              onClick={() => onNavigate('contact')}
              className="font-bold text-sky-600 hover:text-sky-800 inline-flex items-center gap-1"
            >
              <span>Visit our counter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
