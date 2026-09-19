import { getTranslations } from 'next-intl/server';
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
      ? 'Portfolio — Pixel Digital Service'
      : 'Portfolio — Pixel Digital Service',
    description: isEn
      ? 'Browse our web platform and custom software projects and example concepts.'
      : 'Veb platformalar və xüsusi proqram təminatı üzrə layihə və konsept nümunələrimiz.',
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('portfolio');

  return (
    <div className="pt-10 sm:pt-14 pb-20 bg-[#0A0F1E] min-h-screen">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        {/* Neyrosoft Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="chip mb-4">
            <span className="bg-blue-500 h-1.5 w-1.5 rounded-full" />
            <span>{t('title')}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t('subtitle')}
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {locale === 'en'
              ? 'Explore our concept architectures and real-world system designs.'
              : 'Biznes ehtiyaclarına uyğun hazırladığımız sistem nümunələri və konsept layihələr.'}
          </p>
        </div>

        {/* Portfolio Grid with Interactive Filters & Modals */}
        <PortfolioGrid locale={locale} initialFilter="all" />
      </div>
    </div>
  );
}
