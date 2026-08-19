'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutSummary() {
  const t = useTranslations('about');
  const locale = useLocale();
  const aboutLink = locale === 'en' ? '/en/haqqimizda' : '/haqqimizda';

  return (
    <section className="py-16 md:py-20 bg-[#060B17]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t('short_title')}</h2>
        <p className="text-gray-300 text-lg mb-3 leading-relaxed">{t('subtitle')}</p>
        <p className="text-gray-400 leading-relaxed mb-8">{t('description')}</p>
        <Link
          href={aboutLink}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
        >
          {t('read_more')} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
