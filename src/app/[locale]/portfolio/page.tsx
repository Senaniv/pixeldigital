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
    <div className="pt-28 pb-20 bg-[#0A0F1E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
              {t('title')}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('subtitle')}
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
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
