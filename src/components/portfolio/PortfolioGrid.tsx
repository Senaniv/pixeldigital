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
      {/* Neyrosoft Pill Filter Tabs */}
      {!hideFilter && (
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#1E293B]/90 border border-white/10 rounded-full p-1.5 shadow-lg">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('filter_all')}
            </button>
            <button
              type="button"
              onClick={() => setFilter('web')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === 'web'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('filter_web')}
            </button>
            <button
              type="button"
              onClick={() => setFilter('software')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === 'software'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('filter_software')}
            </button>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredItems.map((item) => (
          <PortfolioCard key={item.id} item={item} locale={locale} />
        ))}
      </div>
    </div>
  );
}
