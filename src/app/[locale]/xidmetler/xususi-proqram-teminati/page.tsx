import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Code2, ArrowLeft, MessageCircle, Check, Package, ShoppingBag, Users, BarChart3, Sparkles } from 'lucide-react';
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
      ? 'Custom Software Development — Pixel Digital Service'
      : 'Xüsusi Proqram Təminatı — Pixel Digital Service',
    description: isEn
      ? 'Custom warehouse systems, CRM, order platforms and business automation software in Baku.'
      : 'Anbar idarəetmə sistemləri, CRM, sifariş və biznes avtomatlaşdırma proqramları — Bakı.',
  };
}

const WHATSAPP_BASE = 'https://wa.me/994558121400';

export default async function CustomSoftwarePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('service_pages.software');
  const tCommon = await getTranslations('common');
  const tPortfolio = await getTranslations('portfolio');

  const backLink = locale === 'en' ? '/en/xidmetler' : '/xidmetler';
  const whatsappUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    locale === 'en'
      ? 'Hello, I would like to discuss building Custom Software for my business.'
      : 'Salam, biznesim üçün Xüsusi Proqram Təminatı hazırlanmasını müzakirə etmək istərdim.'
  )}`;

  const solutions = t.raw('solutions') as { icon: string; title: string; description: string }[];
  const icons = [Package, ShoppingBag, Users, BarChart3];

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
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-4">
            <Code2 size={14} className="text-purple-400" />
            <span className="text-purple-400 text-xs font-semibold uppercase tracking-wider">
              {locale === 'en' ? 'Custom Software' : 'Xüsusi Proqram Təminatı'}
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
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-purple-900/30 hover:scale-[1.02]"
          >
            <MessageCircle size={20} />
            {t('cta')}
          </a>
        </div>

        {/* 4 Sub-solutions Cards */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            {t('solutions_title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((sol, idx) => {
              const Icon = icons[idx] || Package;
              return (
                <div
                  key={idx}
                  className="bg-white/[0.02] border border-white/[0.07] hover:border-purple-500/30 rounded-2xl p-6 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{sol.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{sol.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlighted Featured Sample: Warehouse Management System */}
        <div className="mb-20 bg-gradient-to-br from-purple-950/40 via-purple-900/10 to-[#0F172A] border border-purple-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              <Sparkles size={12} />
              {t('featured_title')}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {tPortfolio('example_badge')}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {locale === 'en' ? 'Warehouse & Inventory Management System' : 'Anbar və Stok İdarəetmə Sistemi'}
              </h3>
              <div className="space-y-4 text-sm text-gray-300 mb-6 leading-relaxed">
                <p>
                  <strong className="text-white">
                    {locale === 'en' ? 'The Problem: ' : 'Problem: '}
                  </strong>
                  {locale === 'en'
                    ? 'Manually counting stock in notebook or Excel leads to missing items, discrepancies in records, and slow daily operations.'
                    : 'Dəftərdə və ya Excel-də əl ilə stok saymaq itkilərə, qeydlərdə uyğunsuzluqlara və hər gün saatlarla vaxt itkisinə səbəb olur.'}
                </p>
                <p>
                  <strong className="text-white">
                    {locale === 'en' ? 'Our Solution: ' : 'Həllimiz: '}
                  </strong>
                  {locale === 'en'
                    ? 'A simple, intuitive web interface allowing staff to register entries/exits in seconds, monitor live inventory, and receive automated notifications when stock is low.'
                    : 'Sadə, anlaşıqlı veb panel — işçilər bir neçə saniyədə məhsul giriş-çıxışını qeyd edir, rəhbərlik real vaxtda stok sayını görür və məhsul bitəndə avtomatik xəbərdarlıq alır.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {[
                  locale === 'en' ? 'Real-time stock counting' : 'Real vaxt stok sayımı',
                  locale === 'en' ? 'Product entry & exit logging' : 'Giriş / çıxış qeydləri',
                  locale === 'en' ? 'Low stock alert threshold' : 'Minimum say xəbərdarlığı',
                  locale === 'en' ? 'Excel & PDF report exports' : 'Excel / PDF hesabat ixracı',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check size={14} className="text-purple-400 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                  locale === 'en'
                    ? 'Hello, I want to discuss a Warehouse Management System project.'
                    : 'Salam, Anbar İdarəetmə Sistemi tipli layihə haqqında danışmaq istərdim.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-purple-900/30"
              >
                <MessageCircle size={18} />
                {tPortfolio('order_btn')}
              </a>
            </div>

            {/* Visual preview box */}
            <div className="bg-[#0A0F1E] border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs text-gray-500 font-mono">anbar-panel.local</span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-white/5 flex justify-between items-center">
                  <span className="text-gray-300">Stok: Məhsul A (SKU-102)</span>
                  <span className="text-emerald-400 font-bold">142 ədəd</span>
                </div>
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 flex justify-between items-center">
                  <span className="text-amber-300">⚠️ Məhsul B (SKU-205)</span>
                  <span className="text-amber-400 font-bold">3 ədəd (Kritik)</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 flex justify-between items-center">
                  <span className="text-gray-300">Gündəlik çıxış: 34 əməliyyat</span>
                  <span className="text-blue-400 font-bold">Tamamlandı</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Samples Grid */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {locale === 'en' ? 'Custom Software Examples' : 'Xüsusi Proqram Nümunələri'}
            </h2>
            <p className="text-gray-400 text-sm">
              {locale === 'en'
                ? 'Sample concepts demonstrating our software development capabilities.'
                : 'Proqram təminatı imkanlarımızı nümayiş etdirən nümunə konseptlər.'}
            </p>
          </div>

          <PortfolioGrid locale={locale} initialFilter="software" hideFilter={true} />
        </div>

        {/* Pricing Note & Final CTA */}
        <div className="bg-gradient-to-r from-purple-950/40 via-purple-900/20 to-[#0F172A] border border-purple-500/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-300 text-base mb-6">
            {t('pricing_note')}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-purple-900/30 hover:scale-[1.02]"
          >
            <MessageCircle size={20} />
            {t('cta')}
          </a>
        </div>
      </div>
    </div>
  );
}
