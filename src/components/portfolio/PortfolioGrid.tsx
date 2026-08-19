'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { portfolioItems } from '@/data/portfolio';
import PortfolioCard from './PortfolioCard';

interface PortfolioGridProps {
  locale: string;
  initialFilter?: 'all' | 'web' | 'software';
  hideFilter?: boolean;
}

export default function PortfolioGrid({
  locale,
  initialFilter = 'all',
  hideFilter = false,
}: PortfolioGridProps) {
  const t = useTranslations('portfolio');
  const [filter, setFilter] = useState<'all' | 'web' | 'software'>(initialFilter);

  const filteredItems = portfolioItems.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div>
      {/* Filter Tabs */}
      {!hideFilter && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {t('filter_all')}
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              filter === 'web'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {t('filter_web')}
          </button>
          <button
            onClick={() => setFilter('software')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              filter === 'software'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {t('filter_software')}
          </button>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => (
          <PortfolioCard key={item.id} item={item} locale={locale} />
        ))}
      </div>
    </div>
  );
}
