import React from 'react';
import {
  Phone,
  MapPin,
  Star,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  AlertTriangle,
  Smartphone,
  Cpu,
  Clock,
  Navigation,
  Compass,
  Zap,
} from 'lucide-react';
import { PageId } from '../types';
import {
  BUSINESS,
  SERVICES,
  SCREEN_REPAIR_STEPS,
  COMMON_PROBLEMS,
  REVIEW_THEMES,
  TRUST_PILLARS,
  IMAGES,
} from '../data/businessData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(#38bdf8 1px, transparent 1px), radial-gradient(#38bdf8 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-200">
                <div className="flex items-center text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="ml-1 font-bold text-white">4.8 / 5</span>
                </div>
                <span className="text-slate-400">•</span>
                <span>{BUSINESS.reviewCount.toLocaleString()} Verified Reviews</span>
                <span className="text-slate-400">•</span>
                <span className="text-sky-300 font-medium">Paris 8 (Saint-Lazare)</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Professional Phone &amp; iPhone Repair in{' '}
                <span className="text-sky-400 underline decoration-sky-500/40 decoration-4 underline-offset-4">
                  Paris 8
                </span>
              </h1>

              {/* Trust-Building Paragraph */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Specialized in iPhone screen replacement and smartphone diagnostics. Located at{' '}
                <strong className="text-white font-semibold">47 Rue d'Amsterdam</strong>, a few minutes'
                walk from Gare Saint-Lazare. Every device receives an upfront inspection and transparent quote
                prior to repair, followed by comprehensive display, touch, and sensor testing before return.
              </p>

              {/* Core Commitments Pill Row */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  Diagnosis before intervention
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  Clear quote prior to work
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  Display &amp; sensor testing before collection
                </span>
              </div>

              {/* CTA Row */}
              <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  id="hero-get-diagnosis-cta"
                  className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all active:scale-[0.98]"
                >
                  <span>Get a Diagnosis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  id="hero-call-now-cta"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm sm:text-base flex items-center gap-2 transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call {BUSINESS.phone}</span>
                </a>

                <button
                  onClick={() => onNavigate('repairs')}
                  id="hero-our-repairs-cta"
                  className="px-5 py-3.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 font-medium text-sm sm:text-base flex items-center gap-1.5 transition-colors"
                >
                  <span>Our Repairs</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Right Column: Workshop Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                <img
                  src={IMAGES.technicianWorkshop}
                  alt="Professional technician at PRC Phone Repair workshop in Paris 8 servicing a smartphone"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs">
                  <div className="flex items-center justify-between text-slate-200">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-sky-400" />
                      In-Store Workshop • Paris 8
                    </span>
                    <span className="text-slate-400">47 Rue d'Amsterdam</span>
                  </div>
                  <p className="text-slate-400 mt-1">
                    Hands-on technician evaluation with clear diagnosis and direct counter pickup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / BUSINESS SNAPSHOT (VISUALLY PROMINENT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200 p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {TRUST_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${idx > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''} space-y-1`}
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {pillar.stat}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  {pillar.label}
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PHONE REPAIR SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-sky-600">
              Workshop Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Phone Repair Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2">
              Transparent, in-store repair services based strictly on verifiable diagnostics. We inspect your
              phone first, confirm the issue, and provide a clear quote before beginning.
            </p>
          </div>
          <button
            onClick={() => onNavigate('repairs')}
            id="view-all-services-btn"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors shrink-0"
          >
            <span>View detailed repair breakdown</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl p-6 transition-all border flex flex-col justify-between ${
                service.isFeatured
                  ? 'bg-gradient-to-br from-slate-900 to-slate-950 text-white border-slate-800 shadow-xl'
                  : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      service.isFeatured ? 'bg-sky-500 text-slate-950' : 'bg-slate-100 text-slate-800'
                    }`}
                  >
                    <Smartphone className="w-5 h-5" />
                  </div>
                  {service.isFeatured && (
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
                      Core Specialty
                    </span>
                  )}
                </div>

                <h3
                  className={`text-lg font-bold tracking-tight mb-2 ${
                    service.isFeatured ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-xs mb-4 ${
                    service.isFeatured ? 'text-slate-300' : 'text-slate-600'
                  } leading-relaxed`}
                >
                  {service.description}
                </p>

                {/* Symptoms bulleted */}
                <div className="space-y-1.5 mb-5">
                  <div
                    className={`text-[11px] font-semibold uppercase tracking-wider ${
                      service.isFeatured ? 'text-slate-400' : 'text-slate-400'
                    }`}
                  >
                    Recognized Symptoms:
                  </div>
                  {service.symptoms.slice(0, 3).map((sym, i) => (
                    <div
                      key={i}
                      className={`text-xs flex items-start gap-1.5 ${
                        service.isFeatured ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          service.isFeatured ? 'text-sky-400' : 'text-sky-600'
                        }`}
                      />
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div
                className={`pt-4 border-t ${
                  service.isFeatured ? 'border-slate-800' : 'border-slate-100'
                } flex items-center justify-between`}
              >
                <span
                  className={`text-xs ${
                    service.isFeatured ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  Diagnosis before quote
                </span>
                <button
                  onClick={() => onNavigate('contact')}
                  className={`text-xs font-bold inline-flex items-center gap-1 transition-colors ${
                    service.isFeatured
                      ? 'text-sky-400 hover:text-sky-300'
                      : 'text-sky-600 hover:text-sky-800'
                  }`}
                >
                  <span>Request Diagnosis</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED IPHONE SCREEN REPAIR: 7-STEP PROCESS */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-sky-400">
                Detailed Screen Replacement Protocol
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Featured iPhone Screen Repair Workflow
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether dealing with cracked glass, an unresponsive digitizer, a complete black screen, or
                vertical colored lines, our repair workflow follows a strict sequential protocol. We test
                the display, touch matrix, and hardware sensors before your phone is returned.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Independent Repair Standard:</strong> We provide independent, professional
                  smartphone repairs. Every intervention is verified on our bench with active hardware testing
                  before in-store handover.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                <img
                  src={IMAGES.screenRepairMacro}
                  alt="Precision iPhone screen replacement closeup showing display ribbon and technician micro tools"
                  className="w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Process Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3">
            {SCREEN_REPAIR_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold flex items-center justify-center border border-sky-400/30">
                      {step.step}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono uppercase">Step 0{step.step}</span>
                  </div>
                  <h3 className="font-bold text-sm text-white mb-1">{step.title}</h3>
                  <div className="text-[11px] text-sky-300 font-medium mb-2">{step.subtitle}</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">{step.description}</p>
                </div>
                <div className="pt-2 border-t border-slate-900 text-[10px] text-slate-300 font-medium">
                  {step.highlight}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('repairs')}
              id="view-full-repair-guide-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-sm font-semibold text-white transition-colors"
            >
              <span>Learn more about our diagnostic and testing criteria</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. COMMON PROBLEMS & DIRECT CTAs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-sky-600">
            Troubleshooting Guide
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Common Phone Problems
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Recognize what happened to your device? Connect your specific malfunction directly to our in-store
            evaluation at 47 Rue d'Amsterdam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {COMMON_PROBLEMS.map((prob) => (
            <div
              key={prob.id}
              className="bg-white rounded-xl p-5 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-3">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{prob.title}</h3>
                <p className="text-xs text-slate-500 mb-3">{prob.subtitle}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{prob.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                >
                  <span>{prob.actionText}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHY CUSTOMERS CHOOSE PRC (FACTUAL TRUST POINTS) */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-sky-600">
              Verified Standards
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Why Customers Choose PRC Phone Repair
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Based on verified customer feedback and consistent shop practices in Paris 8. We prioritize
              upfront clarity, technical rigor, and central accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Star className="w-5 h-5 fill-sky-500 text-sky-500" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">4.8 / 5 Rating from 1,341+ Reviews</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A substantial volume of verified public reviews reflects consistent repair satisfaction from
                neighborhood residents, professionals, and travelers across Paris.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Efficient Service &amp; Urgent Handoffs</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Customers frequently highlight swift assistance when faced with emergency device breakdowns,
                missed alarms, or time-sensitive travel arrangements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Diagnosis Before Intervention</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You receive a concrete quote and explanation of the problem before any repair commences. No
                hidden fees or unauthorized work.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Thorough Testing Before Return</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every screen repair undergoes display calibration, touch responsiveness check, and hardware
                sensor testing before customer collection.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Central Paris 8 Proximity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conveniently situated at 47 Rue d'Amsterdam, a short walk from Gare Saint-Lazare hub (lines 3,
                12, 13, 14, RER E, trains) and adjacent to Paris 9.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">In-Store Direct Counter Service</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Speak face-to-face with an experienced technician. Hand over your device and collect it
                directly at our dedicated Paris counter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-2xl text-slate-900">4.8 / 5</span>
              <span className="text-slate-500 text-sm">({BUSINESS.reviewCount.toLocaleString()} reviews)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Customer Feedback Themes
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mt-1">
              Representative review themes from real customer feedback. Many reviews explicitly praise rapid
              turnaround, clear communication, and successful repairs before travel.
            </p>
          </div>

          <button
            onClick={() => onNavigate('reviews')}
            id="see-all-reviews-btn"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors"
          >
            <span>Explore all review metrics</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEW_THEMES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                    Customer Sentiment
                  </span>
                  <span className="text-xs font-semibold text-slate-500">Theme {idx + 1}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 italic">
                "{item.customerSentiment}"
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. LOCATION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Location Details */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs text-sky-400 font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Paris 8 • Gare Saint-Lazare</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                  Visit PRC Phone Repair
                </h2>
                <p className="text-lg text-slate-300 font-medium mt-1">{BUSINESS.address}</p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Located on Rue d'Amsterdam in Paris 8, just minutes on foot from Gare Saint-Lazare and right
                next to Paris 9. Convenient for local residents, office workers, and travelers needing quick
                diagnostic help or screen replacement.
              </p>

              {/* Transit & Schedule info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-sky-400" />
                    Proximity
                  </div>
                  <div className="text-slate-400">
                    A few minutes' walk from Gare Saint-Lazare (Metro 3, 12, 13, 14, RER E) &amp; close to Paris 9.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    Hours Notice
                  </div>
                  <div className="text-slate-400">
                    Closes at 7:00 PM • Opens 10:30 AM Friday. In-store counter assistance.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="home-get-directions-btn"
                  className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm inline-flex items-center gap-2 transition-colors"
                >
                  <Compass className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  id="home-call-prc-btn"
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call {BUSINESS.phone}</span>
                </a>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src={IMAGES.parisStreet}
                alt="Rue d'Amsterdam street atmosphere in Paris 8 near Gare Saint-Lazare"
                className="w-full h-full object-cover min-h-[300px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-950 lg:via-transparent lg:to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-xs text-slate-300">
                47 Rue d'Amsterdam • Paris 8e Arrondissement
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CONVERSION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-14 text-center text-white border border-sky-800/40 shadow-xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-wider text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 inline-block">
              In-Store Repair Assistance
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Phone damaged? Let PRC diagnose the problem before repair.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              No guesswork. Bring your device to 47 Rue d'Amsterdam in Paris 8. We inspect the issue, provide
              a clear quote, and only proceed once you approve.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                id="final-call-now-btn"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm sm:text-base inline-flex items-center gap-2 shadow-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Now: {BUSINESS.phone}</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                id="final-get-diagnosis-btn"
                className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm sm:text-base inline-flex items-center gap-2 transition-colors"
              >
                <span>Get a Diagnosis</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="final-visit-store-btn"
                className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm sm:text-base inline-flex items-center gap-2 transition-colors"
              >
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Visit the Store</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 pt-2">
              47 Rue d'Amsterdam, 75008 Paris • Closes at 7 PM / Opens 10:30 AM Friday
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
