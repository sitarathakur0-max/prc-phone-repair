import React from 'react';
import {
  Phone,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Smartphone,
  Eye,
  Hand,
  Cpu,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { PageId } from '../types';
import {
  BUSINESS,
  SERVICES,
  SCREEN_REPAIR_STEPS,
  COMMON_PROBLEMS,
  IMAGES,
} from '../data/businessData';

interface RepairsPageProps {
  onNavigate: (page: PageId) => void;
}

export const RepairsPage: React.FC<RepairsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-slate-950 text-white pt-12 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-extrabold tracking-wider text-sky-400">
              PRC Phone Repair • Paris 8 Services
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
              Phone Repair &amp; iPhone Screen Replacement
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              We specialize in iPhone screen replacement and hardware troubleshooting for common smartphone
              defects. Receive an in-store diagnosis and a clear quote before any intervention begins,
              followed by comprehensive testing before collection.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                id="repairs-call-cta"
                className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm inline-flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS.phone}</span>
              </a>

              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="repairs-visit-cta"
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium text-sm inline-flex items-center gap-2 transition-colors"
              >
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Visit Store: 47 Rue d'Amsterdam</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED: IPHONE SCREEN REPAIR PROMINENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="p-8 sm:p-12 border-b border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 inline-block">
                  Primary Workshop Specialty
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  iPhone Screen Replacement in Paris 8
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Screen damage is the most common reason customers visit our workshop at 47 Rue
                  d'Amsterdam. Whether caused by an accidental drop, pressure fracture, or digitizer wear,
                  we diagnose the exact problem before proposing a repair.
                </p>

                {/* 4 Core Screen Defects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mb-1">
                      <Layers className="w-4 h-4 text-sky-600" />
                      Broken / Cracked Glass
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Spiderweb cracks or splintered glass. We assess whether the internal display panel is intact or requires a full assembly replacement.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mb-1">
                      <Hand className="w-4 h-4 text-sky-600" />
                      Touch Problems
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Unresponsive areas, dead zones, laggy swiping, or erratic "ghost touches" that trigger apps without human contact.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mb-1">
                      <Eye className="w-4 h-4 text-sky-600" />
                      Black Display Failures
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The phone powers on, vibrates, or chimes, but the panel stays completely pitch black due to display panel shock.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mb-1">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      Vertical Display Lines
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Green, white, pink, or multicolored vertical stripes across the screen indicating broken row/column display traces.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <img
                    src={IMAGES.screenRepairMacro}
                    alt="Precision closeup of smartphone display screen replacement module and tools"
                    className="w-full h-72 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-4 bg-slate-900 text-white text-xs space-y-1">
                    <div className="font-semibold flex items-center gap-1.5 text-sky-400">
                      <ShieldCheck className="w-4 h-4" />
                      Tested Before Device Return
                    </div>
                    <p className="text-slate-300">
                      Every replacement screen is tested across 3 crucial metrics: Display clarity, Touch responsiveness, and Sensor integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TRIPLE TESTING EXPLANATION */}
          <div className="p-8 sm:p-12 bg-slate-50/70">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Post-Intervention Testing Protocol
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mb-8">
              We never return a repaired phone without thorough verification. Before you collect your device
              at our Paris 8 workshop, our technician performs 3 dedicated hardware tests:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">1. Display Testing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We verify illumination across the full panel, test maximum and minimum brightness, inspect for dead pixels or color cast, and confirm zero vertical or horizontal artifacts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                  <Hand className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">2. Touch Testing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We run full digitizer surface checks including corner typing, edge swiping, multi-touch pinch-to-zoom gestures, and continuous drag across all coordinates to guarantee zero dead zones.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">3. Sensor Testing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We check the ear-speaker proximity sensor (ensuring screen blanks during calls), ambient light sensor adjustment, front camera focus alignment, and biometric hardware sensors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-STEP DETAILED REPAIR TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-wider text-sky-600">Step-by-Step</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            How Screen Repair Works at PRC
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            A structured, transparent workflow so you always know what happens to your device.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3">
          {SCREEN_REPAIR_STEPS.map((s) => (
            <div
              key={s.step}
              className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 text-xs font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">STEP 0{s.step}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-0.5">{s.title}</h3>
                <div className="text-[11px] text-sky-600 font-medium mb-2">{s.subtitle}</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">{s.description}</p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-500 font-medium">
                {s.highlight}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OTHER SUPPORTED REPAIR SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs uppercase font-bold tracking-wider text-sky-600">
            Comprehensive Workshop
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Other Supported Repair Categories
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mt-2">
            In addition to iPhone screen replacements, we evaluate and repair other common physical and
            hardware issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{serv.title}</h3>
                <p className="text-xs text-sky-700 font-medium mb-3">{serv.tagline}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{serv.description}</p>

                <div className="space-y-1.5 mb-5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-[11px] font-semibold uppercase text-slate-500">
                    Diagnostic check:
                  </div>
                  <p className="text-xs text-slate-700">{serv.diagnosticCheck}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">In-store diagnosis</span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-bold text-sky-600 hover:text-sky-800 inline-flex items-center gap-1"
                >
                  <span>Request Diagnosis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLEAN WORKSPACE VISUAL & COUNTER ADVICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative min-h-[280px]">
              <img
                src={IMAGES.cleanWorkspace}
                alt="Organized smartphone repair workstation with inspection lamp and precision micro-tools"
                className="w-full h-full object-cover min-h-[280px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                In-Store Best Practices
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Preparing for Your Visit to PRC Phone Repair
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                To make your in-store diagnosis as smooth as possible, here is what you can do before
                walking into our shop at 47 Rue d'Amsterdam:
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Back up data if possible:</strong> While screen replacements typically preserve your storage, making a standard iCloud or computer backup beforehand is always good practice.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Keep passcode handy:</strong> Our technician will ask you to unlock the phone in your presence during collection to verify touch grid and sensor performance.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Walk in directly:</strong> No appointment or online registration needed. Simply visit our counter during opening hours for direct technician evaluation.
                  </span>
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm inline-flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS.phone}</span>
                </a>
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-white font-medium text-sm inline-flex items-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span>Get Directions to Paris 8</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REPAIR FAQ / IMPORTANT NOTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-sky-600" />
            <h3 className="text-lg font-bold text-slate-900">
              Important Service &amp; Quote Information
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-900 mb-1">How is the repair quote established?</p>
              <p className="leading-relaxed">
                When you bring your device to our counter, a technician performs a physical inspection. We verify the exact component needed (glass, digitizer, OLED/LCD matrix, or connector) and give you a clear, fixed quote before commencing any work.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-1">Independent Repair Workshop</p>
              <p className="leading-relaxed">
                PRC Phone Repair is an independent local electronics and smartphone repair store in Paris 8. We are not affiliated with, sponsored by, or authorized by Apple Inc. All brand names are mentioned strictly to describe repair compatibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
