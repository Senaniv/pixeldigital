'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from '@/i18n/navigation';

const WHATSAPP = 'https://wa.me/994558121400?text=Salam%2C%20layih%C9%99m%20haqq%C4%B1nda%20m%C9%99lumat%20almaq%20istirdim.';

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#0d1530] to-[#0A0F1E]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.10),transparent_60%)]" />

      {/* Pixel grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-400 text-sm font-medium">Pixel Digital Service</span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
          {t('title')}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30 hover:scale-[1.02] min-h-[56px]"
          >
            <MessageCircle size={20} />
            {t('cta_primary')}
          </a>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[56px]"
          >
            {t('cta_secondary')}
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Stats / trust signals */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: '24h', label: locale === 'az' ? 'Cavab müddəti' : 'Response time' },
            { value: '100%', label: locale === 'az' ? 'Fərdi həll' : 'Custom solution' },
            { value: '∞', label: locale === 'az' ? 'Dəstək' : 'Support' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
