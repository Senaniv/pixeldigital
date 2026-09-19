'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, PhoneCall, Check, Sparkles, CheckCircle2 } from 'lucide-react';

const WHATSAPP = 'https://wa.me/994558121400?text=Salam%2C%20layih%C9%99m%20haqq%C4%B1nda%20m%C9%99lumat%20almaq%20istirdim.';

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden pt-4 sm:pt-6">
      {/* Neyrosoft SVG Circuit Trace Animation Background */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] opacity-35 lg:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 460 340" className="text-blue-500/50 h-full w-full" fill="none">
          <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path
              className="animate-trace"
              style={{ '--trace-length': '820' } as React.CSSProperties}
              d="M6 56h140a14 14 0 0114 14v52a14 14 0 0014 14h96a14 14 0 0014-14V70a14 14 0 0114-14h140"
            />
            <path
              className="animate-trace"
              style={{ '--trace-length': '620', animationDelay: '180ms' } as React.CSSProperties}
              d="M6 170h84a14 14 0 0114 14v112a14 14 0 0014 14h250"
            />
            <path
              className="animate-trace"
              style={{ '--trace-length': '430', animationDelay: '350ms' } as React.CSSProperties}
              d="M64 6v46a14 14 0 0014 14h116a14 14 0 0114 14v54"
            />
          </g>
          <circle cx="146" cy="56" r="4.5" fill="currentColor" opacity="0.5" />
          <circle cx="274" cy="70" r="4.5" fill="currentColor" opacity="0.5" />
          <circle cx="104" cy="184" r="4.5" fill="currentColor" opacity="0.5" />
          <circle cx="368" cy="310" r="4.5" fill="currentColor" opacity="0.5" />
          <circle cx="208" cy="134" r="4.5" fill="currentColor" opacity="0.5" />
          <circle cx="426" cy="56" r="6" fill="#3B82F6" className="animate-node" />
        </svg>
      </div>

      {/* Main Grid Layout */}
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pt-12 pb-16 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:px-8 lg:pt-16 lg:pb-24">
        
        {/* Left: Text & Action */}
        <div className="flex flex-col justify-center">
          {/* Location / Status Chip */}
          <span className="chip w-fit">
            <span className="bg-blue-500 h-2 w-2 rounded-full animate-pulse" aria-hidden="true" />
            <span>Bakı, Azərbaycan • Pixel Digital Service</span>
          </span>

          {/* Heading */}
          <h1 className="text-white mt-6 max-w-[17ch] text-[2.15rem] leading-[1.08] sm:text-[2.75rem] lg:text-[3.35rem] font-bold tracking-tight">
            {t('title')}
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 mt-5 max-w-lg text-base sm:text-lg leading-relaxed">
            {t('subtitle')}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>{t('cta_primary')}</span>
              <ArrowRight size={17} />
            </a>

            <a
              href="tel:+994558121400"
              className="btn btn-ink"
            >
              <PhoneCall size={16} />
              <span>+994 55 812 14 00</span>
            </a>
          </div>

          {/* Guarantee / Reassurance Note */}
          <p className="text-gray-400 mt-6 inline-flex items-center gap-2 text-sm">
            <Check size={16} className="text-blue-500 stroke-[2.5]" />
            <span>
              {locale === 'az'
                ? '24 saat ərzində cavab, heç bir öhdəlik yaratmır.'
                : 'Response within 24 hours, creates no obligation.'}
            </span>
          </p>
        </div>

        {/* Right: Modern Visual Platform Card + Floating Metric Card */}
        <div className="relative min-h-[320px] lg:min-h-[420px]">
          {/* Main Visual Box */}
          <div className="card relative h-full w-full overflow-hidden lg:absolute lg:inset-y-4 lg:right-0 lg:w-[92%] border border-white/10 bg-gradient-to-br from-[#0F172A] via-[#121D38] to-[#0A0F1E] p-6 sm:p-7 shadow-2xl flex flex-col justify-between">
            {/* Top Bar of Mockup */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-gray-500">pixeldigital.app/admin</span>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Live System
                </span>
              </div>

              {/* Mock Dashboard Widgets */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                      ⚡
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Avtomatlaşdırılmış Proses</div>
                      <div className="text-[11px] text-gray-400">Anbar sayımı & Sifariş sinxronizasiyası</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400">Aktiv</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                      📊
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Hesabat & Müştəri Portalı</div>
                      <div className="text-[11px] text-gray-400">Real vaxt analitika dashboard</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-400">Hazır</span>
                </div>
              </div>
            </div>

            {/* Bottom info strip in visual box */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-blue-400" />
                Veb Platformalar & Proqram
              </span>
              <span className="font-mono text-gray-500">v2.4</span>
            </div>
          </div>

          {/* Neyrosoft Floating Metric Card at bottom-left */}
          <div className="card absolute bottom-0 left-0 hidden items-center gap-3 px-5 py-4 lg:flex bg-[#0F172A]/95 backdrop-blur-xl border border-white/15 shadow-2xl z-20">
            <span className="icon-plate h-11 w-11 text-blue-400">
              <Sparkles size={22} />
            </span>
            <span>
              <span className="text-white font-bold block text-2xl leading-none">100%</span>
              <span className="text-gray-400 mt-1 block text-xs">
                {locale === 'az' ? 'Fərdi biznes həlli' : 'Custom business solution'}
              </span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
