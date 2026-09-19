'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowRight, Monitor, Code2, Bot, Smartphone, Palette } from 'lucide-react';

export default function ServicesSection() {
  const t = useTranslations('services');
  const locale = useLocale();

  const services = [
    {
      href: '/xidmetler/xususi-proqram-teminati',
      icon: Code2,
      title: t('items.software.title'),
      description: t('items.software.description'),
      badge: t('items.software.badge'),
      accent: 'text-purple-400',
      isPrimary: true,
    },
    {
      href: '/xidmetler/veb-platformalar',
      icon: Monitor,
      title: t('items.web.title'),
      description: t('items.web.description'),
      badge: t('items.web.badge'),
      accent: 'text-blue-400',
      isPrimary: true,
    },
    {
      href: '/xidmetler',
      icon: Bot,
      title: t('items.ai.title'),
      description: t('items.ai.description'),
      accent: 'text-emerald-400',
    },
    {
      href: '/xidmetler',
      icon: Smartphone,
      title: t('items.mobile.title'),
      description: t('items.mobile.description'),
      accent: 'text-amber-400',
    },
    {
      href: '/xidmetler',
      icon: Palette,
      title: t('items.design.title'),
      description: t('items.design.description'),
      accent: 'text-pink-400',
    },
  ];

  return (
    <section className="mx-auto mt-20 sm:mt-24 max-w-6xl px-5 lg:px-8">
      {/* Neyrosoft Section Header with "Hamısına bax" */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-white text-2xl sm:text-[2rem] font-bold">
            {locale === 'az' ? 'Nə qururuq' : 'What we build'}
          </h2>
          <p className="text-gray-400 mt-3 leading-relaxed max-w-xl text-sm sm:text-base">
            {locale === 'az'
              ? 'Gündəlik təkrarlanan işləri avtomatlaşdıran proqramlar, daxili sistemlər və müasir veb platformalar.'
              : 'Software that automates repetitive workflows, internal tools, and modern web platforms.'}
          </p>
        </div>
        <div className="shrink-0">
          <Link href="/xidmetler" className="btn btn-outline text-xs sm:text-sm">
            {locale === 'az' ? 'Hamısına bax' : 'View all'}
          </Link>
        </div>
      </div>

      {/* Neyrosoft Cards Grid */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              href={item.href}
              className={`card card-hover group flex flex-col p-6 rounded-[24px] justify-between ${
                item.isPrimary ? 'border-blue-500/25 hover:border-blue-500/50' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`icon-plate h-12 w-12 rounded-2xl ${item.accent} group-hover:scale-105 transition-transform`}>
                    <Icon size={24} />
                  </span>
                  {item.badge && (
                    <span className="chip text-[11px] py-0.5 px-2.5 bg-blue-500/10 border-blue-500/20 text-blue-300">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-white text-lg font-semibold leading-snug group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 mt-2.5 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <span className="text-blue-400 mt-6 inline-flex items-center gap-1.5 text-sm font-semibold pt-4 border-t border-white/5">
                {locale === 'az' ? 'Ətraflı' : 'Learn more'}
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
