import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Monitor, Smartphone, Search, Zap, Shield, Check, MessageCircle, ArrowLeft } from 'lucide-react';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Web Platforms Development — Pixel Digital Service'
      : 'Veb Platformaların Hazırlanması — Pixel Digital Service',
    description: isEn
      ? 'Custom web platforms, admin panels, customer portals, and SaaS solutions in Baku.'
      : 'Fərdi veb platformalar, admin panellər, müştəri portalları və SaaS həlləri — Bakı.',
  };
}

const WHATSAPP_BASE = 'https://wa.me/994558121400';

export default async function WebPlatformsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('service_pages.web');
  const tCommon = await getTranslations('common');

  const backLink = locale === 'en' ? '/en/xidmetler' : '/xidmetler';
  const whatsappUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    locale === 'en'
      ? 'Hello, I would like to discuss building a Web Platform.'
      : 'Salam, Veb Platforma hazırlanması layihəsini müzakirə etmək istərdim.'
  )}`;

  const includes = t.raw('includes') as string[];
  const features = t.raw('features') as { title: string; description: string }[];

  const featureIcons = [Smartphone, Search, Zap, Shield];

  return (
    <div className="pt-28 pb-20 bg-[#0A0F1E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href={backLink}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          {tCommon('back')}
        </Link>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
            <Monitor size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
              {locale === 'en' ? 'Web Platforms' : 'Veb Platformalar'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
            {t('hero')}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:scale-[1.02]"
          >
            <MessageCircle size={20} />
            {t('cta')}
          </a>
        </div>

        {/* What's Included & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Includes */}
          <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              {t('includes_title')}
            </h2>
            <div className="space-y-3.5">
              {includes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              {t('features_title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => {
                const Icon = featureIcons[idx] || Zap;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{feat.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{feat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Portfolio Samples for Web Platforms */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {locale === 'en' ? 'Example Web Platform Projects' : 'Veb Platforma Nümunələri'}
            </h2>
            <p className="text-gray-400 text-sm">
              {locale === 'en'
                ? 'Sample concepts demonstrating our platform capabilities.'
                : 'Platforma imkanlarımızı nümayiş etdirən nümunə konseptlər.'}
            </p>
          </div>

          <PortfolioGrid locale={locale} initialFilter="web" hideFilter={true} />
        </div>

        {/* Pricing Note & Final CTA */}
        <div className="bg-gradient-to-r from-blue-950/40 via-blue-900/20 to-[#0F172A] border border-blue-500/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-300 text-base mb-6">
            {t('pricing_note')}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:scale-[1.02]"
          >
            <MessageCircle size={20} />
            {t('cta')}
          </a>
        </div>
      </div>
    </div>
  );
}
