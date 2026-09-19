'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';

export default function AboutSummary() {
  const t = useTranslations('about');

  return (
    <section className="mx-auto mt-20 sm:mt-24 max-w-6xl px-5 lg:px-8">
      <div className="card p-8 sm:p-12 rounded-[28px] text-center max-w-4xl mx-auto border border-white/10 shadow-xl">
        <span className="chip mb-4">
          <span>Pixel Digital Service</span>
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          {t('short_title')}
        </h2>
        <p className="text-gray-200 text-base sm:text-lg mb-3 leading-relaxed max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          {t('description')}
        </p>
        <Link
          href="/haqqimizda"
          className="btn btn-outline inline-flex items-center gap-2 text-sm"
        >
          <span>{t('read_more')}</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
