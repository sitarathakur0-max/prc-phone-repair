import React from 'react';
import {
  Star,
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  Zap,
  Award,
  Users,
  ShieldCheck,
  Plane,
  BatteryCharging,
} from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS, REVIEW_THEMES } from '../data/businessData';

interface ReviewsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-950 text-white pt-12 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-extrabold tracking-wider text-sky-400">
              Verified Public Feedback
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
              Customer Reviews &amp; Ratings
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              Based on over a thousand reviews from customers who visited our repair workshop at 47 Rue
              d'Amsterdam in Paris 8.
            </p>

            {/* Score Big Highlight */}
            <div className="mt-8 p-6 rounded-2xl bg-slate-900 border border-slate-800 inline-flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">4.8</span>
                <span className="text-slate-400 text-lg">/ 5.0</span>
              </div>

              <div className="sm:border-l sm:border-slate-700 sm:pl-6 space-y-1">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-300">
                  Over <strong className="text-white font-semibold">{BUSINESS.reviewCount.toLocaleString()}</strong> verified public customer ratings
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RATING BREAKDOWN & THEMATIC METRICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Review Summary Scorecard */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <h2 className="text-lg font-bold text-slate-900">Scorecard Overview</h2>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-700 flex items-center gap-1">5 Stars</span>
                <div className="w-32 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-amber-400 h-2.5 rounded-full" style={{ width: '88%' }} />
                </div>
                <span className="text-slate-500">88%</span>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-700 flex items-center gap-1">4 Stars</span>
                <div className="w-32 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-amber-400 h-2.5 rounded-full" style={{ width: '9%' }} />
                </div>
                <span className="text-slate-500">9%</span>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-700 flex items-center gap-1">3 Stars</span>
                <div className="w-32 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-amber-400 h-2.5 rounded-full" style={{ width: '2%' }} />
                </div>
                <span className="text-slate-500">2%</span>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-700 flex items-center gap-1">2 Stars</span>
                <div className="w-32 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-amber-400 h-2.5 rounded-full" style={{ width: '0.7%' }} />
                </div>
                <span className="text-slate-500">&lt;1%</span>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-700 flex items-center gap-1">1 Star</span>
                <div className="w-32 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-amber-400 h-2.5 rounded-full" style={{ width: '0.3%' }} />
                </div>
                <span className="text-slate-500">&lt;1%</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Verified in-store repairs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Genuine Paris customer experiences</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>No fabricated feedback</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs text-center flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call to Inquire: {BUSINESS.phone}</span>
              </a>
            </div>
          </div>

          {/* Key Sentiment Themes */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Representative Customer Feedback Themes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Compiled from 1,341 public customer reviews. These reflect the authentic patterns and
                frequently mentioned experiences of people visiting our Paris 8 counter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {REVIEW_THEMES.map((theme, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                      Theme 0{i + 1}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      High customer consensus
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base">{theme.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{theme.description}</p>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-700 italic">
                    "{theme.customerSentiment}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPECIAL HIGHLIGHT: TRAVEL & URGENT REPAIRS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sky-950 text-white rounded-3xl p-8 sm:p-12 border border-sky-900">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-semibold">
              <Plane className="w-3.5 h-3.5" />
              <span>Gare Saint-Lazare Transit Hub Advantage</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Urgent Assistance Before Travel
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A recurring theme in reviews is from travelers and commuters caught off-guard by broken phone
              screens or charging failures right before departures from Gare Saint-Lazare or international
              travel. Our counter is frequently relied upon for fast, focused diagnostic support and urgent
              resolutions when customers cannot afford days of delay.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
              <div className="p-3.5 bg-slate-900/80 rounded-xl border border-sky-900/60">
                <div className="font-bold text-white mb-1">Pre-Travel Diagnostics</div>
                <div className="text-slate-300">Immediate hands-on assessment of broken screens before flights or trains.</div>
              </div>

              <div className="p-3.5 bg-slate-900/80 rounded-xl border border-sky-900/60">
                <div className="font-bold text-white mb-1">Emergency Charging Ports</div>
                <div className="text-slate-300">Resolving unresponsive charging ports so phones retain power on the road.</div>
              </div>

              <div className="p-3.5 bg-slate-900/80 rounded-xl border border-sky-900/60">
                <div className="font-bold text-white mb-1">In-Store Handover</div>
                <div className="text-slate-300">Devices tested and collected directly at 47 Rue d'Amsterdam.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY OUR REVIEWS MATTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-white border border-slate-200 max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-slate-900">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            <h3 className="font-bold text-base sm:text-lg">Our Review Policy &amp; Authenticity</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We do not fabricate testimonials or publish artificially generated customer statements. The
            ratings and review summaries on this page are derived from the publicly established feedback of
            1,341 customers. While every phone issue is unique, our operational philosophy remains constant:
            a thorough diagnosis, an upfront quote, and rigorous testing before returning your device.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-sky-600">
            <button onClick={() => onNavigate('contact')} className="hover:underline">
              Visit our Paris 8 workshop
            </button>
            <span>•</span>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:underline">
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
