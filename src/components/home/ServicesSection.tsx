'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Monitor, Code2, Bot, Smartphone, Palette } from 'lucide-react';

const FOCUS_COLORS = {
  software: 'from-purple-600/20 to-purple-800/10 border-purple-500/30 hover:border-purple-500/50',
  web: 'from-blue-600/20 to-blue-800/10 border-blue-500/30 hover:border-blue-500/50',
};

const GROWING_ITEMS = [
  { key: 'ai', icon: Bot, color: 'text-emerald-400' },
  { key: 'mobile', icon: Smartphone, color: 'text-yellow-400' },
  { key: 'design', icon: Palette, color: 'text-pink-400' },
];

export default function ServicesSection() {
  const t = useTranslations('services');
  const locale = useLocale();

  const softwareLink = locale === 'en' ? '/en/xidmetler/xususi-proqram-teminati' : '/xidmetler/xususi-proqram-teminati';
  const webLink = locale === 'en' ? '/en/xidmetler/veb-platformalar' : '/xidmetler/veb-platformalar';

  return (
    <section className="py-16 md:py-24 bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('main_title')}</h2>
          <p className="text-gray-400 max-w-xl mx-auto">{t('subtitle')}</p>
        </div>

        {/* Main focus — 2 big cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Software */}
          <Link
            href={softwareLink}
            className={`group relative bg-gradient-to-br ${FOCUS_COLORS.software} border rounded-2xl p-8 md:p-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-900/20`}
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
              <Code2 size={28} className="text-purple-400" />
            </div>
            <span className="inline-flex items-center text-xs font-semibold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full mb-3">
              {t('items.software.badge')}
            </span>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
              {t('items.software.title')}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t('items.software.description')}
            </p>
            <span className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all">
              {t('detail_link')} <ArrowRight size={16} />
            </span>
          </Link>

          {/* Web */}
          <Link
            href={webLink}
            className={`group relative bg-gradient-to-br ${FOCUS_COLORS.web} border rounded-2xl p-8 md:p-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/20`}
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
              <Monitor size={28} className="text-blue-400" />
            </div>
            <span className="inline-flex items-center text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full mb-3">
              {t('items.web.badge')}
            </span>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
              {t('items.web.title')}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t('items.web.description')}
            </p>
            <span className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
              {t('detail_link')} <ArrowRight size={16} />
            </span>
          </Link>
        </div>

        {/* Growing directions — 3 small cards */}
        <div className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-gray-300 font-semibold">{t('growing_title')}</h3>
            <span className="text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full">
              {t('growing_badge')}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {GROWING_ITEMS.map(({ key, icon: Icon, color }) => (
              <div
                key={key}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]"
              >
                <Icon size={20} className={`${color} mt-0.5 flex-shrink-0`} />
                <div>
                  <p className="text-white text-sm font-medium mb-1">
                    {t(`items.${key}.title`)}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
