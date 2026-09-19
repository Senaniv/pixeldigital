'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import type { PortfolioItem } from '@/data/types';
import PortfolioModal from './PortfolioModal';

interface PortfolioCardProps {
  item: PortfolioItem;
  locale: string;
}

export default function PortfolioCard({ item, locale }: PortfolioCardProps) {
  const t = useTranslations('portfolio');
  const [isOpen, setIsOpen] = useState(false);

  const title = locale === 'en' ? item.titleEn : item.titleAz;
  const description = locale === 'en' ? item.descriptionEn : item.descriptionAz;
  const categoryLabel =
    item.category === 'web'
      ? locale === 'en' ? 'Web Platform' : 'Veb platforma'
      : locale === 'en' ? 'Custom Software' : 'Xüsusi proqram';

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="card card-hover group block overflow-hidden rounded-[24px] cursor-pointer"
      >
        {/* Neyrosoft aspect-16/10 visual box */}
        <div className="relative aspect-16/10 w-full overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#121D38] to-[#0A0F1E] border-b border-white/10 p-5 flex flex-col justify-between">
          
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#3B82F6 1.2px, transparent 1.2px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Top badges */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/10 text-gray-200 border border-white/10 backdrop-blur-md">
              {categoryLabel}
            </span>

            {item.isExample && (
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                {t('example_badge')}
              </span>
            )}
          </div>

          {/* Center Graphic representation */}
          <div className="relative z-10 mx-auto w-full max-w-[280px] bg-[#0A0F1E]/90 rounded-xl p-3.5 border border-white/10 shadow-xl transition-transform duration-500 group-hover:scale-[1.04]">
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[10px] text-gray-500 font-mono truncate">
                {item.id}.pixel-digital.az
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-4/5 bg-blue-500/40 rounded" />
              <div className="h-2 w-3/5 bg-purple-500/30 rounded" />
            </div>
          </div>

          {/* Bottom tag inside graphic */}
          <div className="relative z-10 flex items-center gap-1.5 text-[11px] text-gray-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>{item.technologies.slice(0, 3).join(' • ')}</span>
          </div>
        </div>

        {/* Neyrosoft Card Bottom strip */}
        <div className="flex items-center justify-between gap-3 p-5 sm:p-6">
          <div className="min-w-0 flex-1">
            <h3 className="text-white truncate text-base font-semibold group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 mt-1 truncate text-xs sm:text-sm">
              {item.isExample ? `${categoryLabel} · ${t('example_badge')}` : categoryLabel}
            </p>
          </div>

          {/* Circular Neyrosoft arrow plate */}
          <span className="icon-plate h-10 w-10 rounded-full shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <PortfolioModal
          item={item}
          locale={locale}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
