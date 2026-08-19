'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { X, Check, MessageCircle, Code, ShieldCheck } from 'lucide-react';
import type { PortfolioItem } from '@/data/types';

interface PortfolioModalProps {
  item: PortfolioItem;
  locale: string;
  onClose: () => void;
}

export default function PortfolioModal({ item, locale, onClose }: PortfolioModalProps) {
  const t = useTranslations('portfolio');
  const tCommon = useTranslations('common');

  const title = locale === 'en' ? item.titleEn : item.titleAz;
  const description = locale === 'en' ? item.descriptionEn : item.descriptionAz;
  const features = locale === 'en' ? item.featuresEn : item.featuresAz;
  const categoryLabel =
    item.category === 'web'
      ? locale === 'en' ? 'Web Platform' : 'Veb platforma'
      : locale === 'en' ? 'Custom Software' : 'Xüsusi proqram təminatı';

  // WhatsApp order message
  const whatsappMsg =
    locale === 'en'
      ? encodeURIComponent(`Hello, I would like to discuss ordering a project like "${item.titleEn}".`)
      : encodeURIComponent(`Salam, "${item.titleAz}" tipli layihə sifariş etmək və müzakirə etmək istərdim.`);

  const whatsappUrl = `https://wa.me/994558121400?text=${whatsappMsg}`;

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0F172A] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 text-left">
        {/* Header with Close */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {categoryLabel} {item.isExample && `· ${t('example_badge')}`}
              </span>
              {item.isExample && (
                <span className="text-xs text-gray-400">
                  ({tCommon('example_note')})
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Description */}
        <div className="py-5">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features Checklist */}
        <div className="py-4 border-t border-white/10">
          <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-3">
            {t('features_title')}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Check size={11} strokeWidth={3} />
                </div>
                <span className="text-sm text-gray-300 leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="py-4 border-t border-white/10">
          <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-2.5">
            {t('tech_title')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-3 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-6 mt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 text-sm font-medium text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
          >
            {tCommon('close')}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-green-900/30 hover:scale-[1.02]"
          >
            <MessageCircle size={18} />
            {t('order_btn')}
          </a>
        </div>
      </div>
    </div>
  );
}
