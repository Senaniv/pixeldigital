'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { portfolioItems } from '@/data/portfolio';
import PortfolioCard from '@/components/portfolio/PortfolioCard';

export default function PortfolioPreview() {
  const t = useTranslations('portfolio');
  const locale = useLocale();
  const featured = portfolioItems.slice(0, 3);

  return (
    <section className="mx-auto mt-20 sm:mt-24 max-w-6xl px-5 lg:px-8">
      {/* Neyrosoft Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-white text-2xl sm:text-[2rem] font-bold">
            {locale === 'az' ? 'Son işlərimiz' : 'Recent projects'}
          </h2>
          <p className="text-gray-400 mt-3 leading-relaxed max-w-xl text-sm sm:text-base">
            {locale === 'az'
              ? 'Biznes proseslərini sadələşdirən platforma və xüsusi proqram nümunələrimiz.'
              : 'Our platform and custom software implementations that streamline business workflows.'}
          </p>
        </div>
        <div className="shrink-0">
          <Link href="/portfolio" className="btn btn-outline text-xs sm:text-sm">
            {locale === 'az' ? 'Hamısına bax' : 'View all'}
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((item) => (
          <PortfolioCard key={item.id} item={item} locale={locale} />
        ))}
      </div>
    </section>
  );
}
