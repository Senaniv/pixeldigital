import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight, Code2, Monitor, Bot, Smartphone, Palette, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Services — Pixel Digital Service'
      : 'Xidmətlər — Pixel Digital Service',
    description: isEn
      ? 'Custom software, web platforms, business automation and digital systems in Baku.'
      : 'Xüsusi proqram təminatı, veb platformalar, biznes avtomatlaşdırması və rəqəmsal həllər — Bakı.',
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('services');

  const otherServices = [
    {
      key: 'ai',
      icon: Bot,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      key: 'mobile',
      icon: Smartphone,
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10 border-yellow-500/20',
    },
    {
      key: 'design',
      icon: Palette,
      color: 'text-pink-400',
      bg: 'bg-pink-500/10 border-pink-500/20',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0A0F1E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
              {t('title')}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {t('subtitle')}
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            {locale === 'en'
              ? 'We build customized software and digital platforms designed to replace manual, repetitive workflows.'
              : 'Gündəlik əl ilə görülən işləri avtomatlaşdırmaq və biznes proseslərinizi sadələşdirmək üçün fərdi həllər hazırlayırıq.'}
          </p>
        </div>

        {/* 2 Primary Focus Services (Prominent) */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            {t('main_title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Custom Software Card */}
            <div className="bg-gradient-to-br from-purple-950/40 via-purple-900/20 to-[#0F172A] border border-purple-500/30 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-purple-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                    <Code2 size={30} className="text-purple-400" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                    {t('items.software.badge')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t('items.software.title')}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {t('items.software.description')}
                </p>

                <ul className="space-y-2.5 mb-8 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-purple-400 flex-shrink-0" />
                    <span>{locale === 'en' ? 'Warehouse & stock management panels' : 'Anbar və stok idarəetmə sistemləri'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-purple-400 flex-shrink-0" />
                    <span>{locale === 'en' ? 'Order and sales tracking software' : 'Sifariş və satış qeydiyyat proqramları'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-purple-400 flex-shrink-0" />
                    <span>{locale === 'en' ? 'Custom CRM and client management' : 'Müştəri idarəetməsi (CRM) panelləri'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-purple-400 flex-shrink-0" />
                    <span>{locale === 'en' ? 'Analytics & automated reporting' : 'Hesabat və analitika dashboard-ları'}</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/xidmetler/xususi-proqram-teminati"
                className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-purple-900/30"
              >
                <span>{locale === 'en' ? 'View Custom Software Solutions' : 'Xüsusi Proqram Həllərinə Bax'}</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Web Platforms Card */}
            <div className="bg-gradient-to-br from-blue-950/40 via-blue-900/20 to-[#0F172A] border border-blue-500/30 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <Monitor size={30} className="text-blue-400" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
                    {t('items.web.badge')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t('items.web.title')}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {t('items.web.description')}
                </p>

                <ul className="space-y-2.5 mb-8 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0" />
                    <span>{locale === 'en' ? 'Custom admin panels & dashboards' : 'Fərdi admin panellər və dashboard-lar'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0" />
                    <span>{locale === 'en' ? 'Customer and client portals' : 'Müştəri portalları və şəxsi kabinetlər'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0" />
                    <span>{locale === 'en' ? 'E-commerce & corporate platforms' : 'Korporativ saytlar və e-ticarət platformaları'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0" />
                    <span>{locale === 'en' ? 'Scalable SaaS web applications' : 'SaaS tipli çoxistifadəçili məhsullar'}</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/xidmetler/veb-platformalar"
                className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-900/30"
              >
                <span>{locale === 'en' ? 'View Web Platform Solutions' : 'Veb Platforma Həllərinə Bax'}</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Growing Directions */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold text-white">{t('growing_title')}</h2>
            <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
              {t('growing_badge')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map(({ key, icon: Icon, color, bg }) => (
              <div
                key={key}
                className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${bg}`}>
                    <Icon size={24} className={color} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 text-xs text-gray-500">
                  {locale === 'en' ? 'Direction in progress' : 'Genişlənməkdə olan sahə'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
