import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
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

  const whatsappUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    locale === 'en'
      ? 'Hello, I would like to discuss building a Web Platform.'
      : 'Salam, Veb Platforma hazırlanması layihəsini müzakirə etmək istərdim.'
  )}`;

  const includes = t.raw('includes') as string[];
  const features = t.raw('features') as { title: string; description: string }[];
  const featureIcons = [Smartphone, Search, Zap, Shield];

  return (
    <div className="pt-10 sm:pt-14 pb-20 bg-[#0A0F1E] min-h-screen">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        {/* Back Link */}
        <Link
          href="/xidmetler"
          className="btn btn-ink text-xs py-2 px-4 mb-8 inline-flex items-center gap-2"
        >
          <ArrowLeft size={14} />
          <span>{tCommon('back')}</span>
        </Link>

        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <span className="chip mb-4">
            <Monitor size={14} className="text-blue-400" />
            <span>{locale === 'en' ? 'Web Platforms' : 'Veb Platformalar'}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            {t('title')}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            {t('hero')}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <MessageCircle size={18} />
            <span>{t('cta')}</span>
          </a>
        </div>

        {/* What's Included & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Includes Card */}
          <div className="card p-7 sm:p-8 rounded-[28px]">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              <span>{t('includes_title')}</span>
            </h2>
            <div className="space-y-3.5">
              {includes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Card */}
          <div className="card p-7 sm:p-8 rounded-[28px]">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              <span>{t('features_title')}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => {
                const Icon = featureIcons[idx] || Zap;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="icon-plate h-10 w-10 rounded-xl mb-3 text-blue-400">
                      <Icon size={18} />
                    </span>
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
        <div className="card rounded-[28px] p-8 sm:p-12 text-center max-w-3xl mx-auto border-blue-500/20">
          <p className="text-gray-300 text-base mb-6">
            {t('pricing_note')}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <MessageCircle size={18} />
            <span>{t('cta')}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
