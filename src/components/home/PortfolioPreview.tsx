'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { portfolioItems } from '@/data/portfolio';
import PortfolioCard from '@/components/portfolio/PortfolioCard';

export default function PortfolioPreview() {
  const t = useTranslations('portfolio');
  const locale = useLocale();
  const featured = portfolioItems.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-[#060B17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t('selected_title')}</h2>
            <p className="text-gray-400">{t('subtitle')}</p>
          </div>
          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors whitespace-nowrap"
          >
            {t('view_all')} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => (
            <PortfolioCard key={item.id} item={item} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
