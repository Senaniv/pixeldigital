'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ExternalLink, Check, Layers, Code } from 'lucide-react';
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
        className="group relative cursor-pointer bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.2] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 flex flex-col justify-between"
      >
        {/* Visual Graphic Header / Mockup Preview */}
        <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 via-[#0d1733] to-[#0A0F1E] border-b border-white/[0.05] p-5 flex flex-col justify-between overflow-hidden">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Top badges */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10 backdrop-blur-md">
              {categoryLabel}
            </span>

            {/* Example Badge - only shown if isExample is true */}
            {item.isExample && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                {t('example_badge')}
              </span>
            )}
          </div>

          {/* Mini UI Representation */}
          <div className="relative z-10 bg-slate-950/80 rounded-xl p-3 border border-white/10 shadow-lg backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-2 text-[10px] text-gray-500 font-mono">pixel-platform.app</span>
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-3/4 bg-blue-500/40 rounded" />
              <div className="h-2 w-1/2 bg-purple-500/30 rounded" />
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
              {description}
            </p>
          </div>

          <div>
            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {item.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5"
                >
                  {tech}
                </span>
              ))}
              {item.technologies.length > 3 && (
                <span className="text-[11px] font-medium px-1.5 py-0.5 rounded-md bg-white/5 text-gray-500">
                  +{item.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Action link */}
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <span className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors flex items-center gap-1">
                {t('view_btn')} <ExternalLink size={13} />
              </span>
              <span className="text-xs text-gray-500">
                {locale === 'en' ? 'Details' : 'Ətraflı'}
              </span>
            </div>
          </div>
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
