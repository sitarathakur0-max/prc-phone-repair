import React from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Compass,
  Navigation,
  Globe,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Smartphone,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS, IMAGES } from '../data/businessData';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-950 text-white pt-12 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-extrabold tracking-wider text-sky-400">
              PRC Phone Repair • Paris 8
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
              Contact &amp; Visit Our Workshop
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              We operate an in-store repair counter at 47 Rue d'Amsterdam in Paris 8. Walk in directly for
              a hands-on diagnosis and an upfront quote prior to any intervention.
            </p>
          </div>
        </div>
      </section>

      {/* PRIMARY CONTACT DETAILS & LOCATION CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Essential Contact Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {BUSINESS.name}
                  </h2>
                  <div className="text-xs text-sky-600 font-bold uppercase tracking-wider mt-0.5">
                    {BUSINESS.category}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                  <Smartphone className="w-6 h-6" />
                </div>
              </div>

              {/* Direct Phone Call Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-slate-500">Telephone Contact</span>
                  <span className="text-xs text-sky-600 font-semibold">Direct Call</span>
                </div>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  id="contact-page-phone-btn"
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 hover:text-sky-600 transition-colors flex items-center gap-3 tracking-tight"
                >
                  <Phone className="w-6 h-6 text-sky-600 shrink-0" />
                  <span>{BUSINESS.phone}</span>
                </a>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Call our workshop for instant inquiries about screen availability or repair diagnostics.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Click to Call {BUSINESS.phone}</span>
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-sky-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs uppercase font-bold text-slate-500">Workshop Address</div>
                    <div className="font-bold text-base sm:text-lg text-slate-900">
                      {BUSINESS.address}
                    </div>
                    <p className="text-xs text-slate-600">
                      {BUSINESS.locationAdvantage}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={BUSINESS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-page-directions-btn"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-800 font-bold text-xs transition-colors"
                  >
                    <Compass className="w-4 h-4 text-sky-600" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Verified Hours Information (Strictly as supplied) */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                  <Clock className="w-4 h-4 text-amber-700" />
                  <span>Verified Operating Hours Notice</span>
                </div>
                <div className="text-slate-800 space-y-1">
                  <div>
                    • <strong>Closes at 7:00 PM</strong>
                  </div>
                  <div>
                    • <strong>Opens 10:30 AM Friday</strong>
                  </div>
                  <div className="text-slate-600 text-[11px] pt-1">
                    In-store pickup and direct walk-in assistance during workshop operational hours.
                  </div>
                </div>
              </div>

              {/* Official Website */}
              <div className="flex items-center justify-between pt-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-slate-500" />
                  <span>Official Website:</span>
                </div>
                <a
                  href={`https://${BUSINESS.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                >
                  <span>{BUSINESS.website}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Map / Transit Access Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* Interactive Map Visual */}
            <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 text-white shadow-sm flex flex-col justify-between">
              <div className="relative h-64 sm:h-72">
                <img
                  src={IMAGES.parisStreet}
                  alt="Street facade in Paris 8 near Rue d'Amsterdam and Gare Saint-Lazare"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Map Pin Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 flex items-center justify-between gap-2">
                  <div>
                    <div className="font-bold text-sm text-white flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-sky-400" />
                      PRC Phone Repair
                    </div>
                    <div className="text-xs text-slate-400">47 Rue d'Amsterdam, 75008 Paris</div>
                  </div>
                  <a
                    href={BUSINESS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-sky-500 text-slate-950 font-bold text-xs hover:bg-sky-400 transition-colors shrink-0"
                  >
                    Open Map
                  </a>
                </div>
              </div>

              {/* Transit & Commute Details */}
              <div className="p-6 sm:p-8 space-y-4 bg-slate-950">
                <div className="flex items-center gap-2 text-xs uppercase font-bold text-sky-400">
                  <Navigation className="w-4 h-4" />
                  <span>Public Transit &amp; Access</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="font-bold text-white mb-1">Gare Saint-Lazare</div>
                    <div className="text-slate-400">
                      3-5 minutes walk. Metro Lines 3, 12, 13, 14, RER E, and Transilien trains.
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="font-bold text-white mb-1">Paris 9th Border</div>
                    <div className="text-slate-400">
                      Directly adjacent to the 9th arrondissement, easily walkable from Place de Clichy / Liège.
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-400">
                  <strong>Service Model:</strong> In-store pickup and direct walk-in diagnostic counter.
                </div>
              </div>
            </div>

            {/* Visit Checklist */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-600" />
                What to Expect When You Visit Our Counter
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>1. Direct Intake:</strong> Bring your damaged device into our workshop at 47 Rue d'Amsterdam.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>2. Diagnosis &amp; Transparent Quote:</strong> Our technician inspects the damage and gives you a clear quote before touching the device.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>3. Screen Replacement &amp; Multi-Check:</strong> We perform the intervention and rigorously test the display, touch grid, and sensors.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>4. Counter Collection:</strong> You review the working phone and collect it in-store.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL VISIT REMINDER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white text-center space-y-3 border border-slate-800">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Ready to have your phone diagnosed?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            Visit PRC Phone Repair at 47 Rue d'Amsterdam, 75008 Paris. Walk-in diagnosis and upfront quote
            before repair.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BUSINESS.phone}</span>
            </a>
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors"
            >
              <Compass className="w-4 h-4 text-sky-400" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
