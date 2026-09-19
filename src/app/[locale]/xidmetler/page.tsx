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
    },
    {
      key: 'mobile',
      icon: Smartphone,
      color: 'text-amber-400',
    },
    {
      key: 'design',
      icon: Palette,
      color: 'text-pink-400',
    },
  ];

  return (
    <div className="pt-10 sm:pt-14 pb-20 bg-[#0A0F1E] min-h-screen">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="chip mb-4">
            <span className="bg-blue-500 h-1.5 w-1.5 rounded-full" />
            <span>{t('title')}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t('subtitle')}
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {locale === 'en'
              ? 'We build customized software and digital platforms designed to replace manual, repetitive workflows.'
              : 'Gündəlik əl ilə görülən işləri avtomatlaşdırmaq və biznes proseslərinizi sadələşdirmək üçün fərdi həllər hazırlayırıq.'}
          </p>
        </div>

        {/* 2 Primary Focus Services */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>{t('main_title')}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Custom Software Card */}
            <div className="card p-8 sm:p-10 rounded-[28px] border-purple-500/25 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="icon-plate h-14 w-14 rounded-2xl text-purple-400">
                    <Code2 size={28} />
                  </span>
                  <span className="chip py-1 px-3 bg-purple-500/10 border-purple-500/20 text-purple-300">
                    {t('items.software.badge')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t('items.software.title')}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {t('items.software.description')}
                </p>

                <ul className="space-y-2.5 mb-8 text-sm text-gray-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-purple-400 shrink-0" />
                    <span>{locale === 'en' ? 'Warehouse & stock management panels' : 'Anbar və stok idarəetmə sistemləri'}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-purple-400 shrink-0" />
                    <span>{locale === 'en' ? 'Order and sales tracking software' : 'Sifariş və satış qeydiyyat proqramları'}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-purple-400 shrink-0" />
                    <span>{locale === 'en' ? 'Custom CRM and client management' : 'Müştəri idarəetməsi (CRM) panelləri'}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-purple-400 shrink-0" />
                    <span>{locale === 'en' ? 'Analytics & automated reporting' : 'Hesabat və analitika dashboard-ları'}</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/xidmetler/xususi-proqram-teminati"
                className="btn btn-primary bg-purple-600 hover:bg-purple-500 w-full justify-between py-3.5 px-6"
              >
                <span>{locale === 'en' ? 'View Custom Software' : 'Xüsusi Proqram Həllərinə Bax'}</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Web Platforms Card */}
            <div className="card p-8 sm:p-10 rounded-[28px] border-blue-500/25 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="icon-plate h-14 w-14 rounded-2xl text-blue-400">
                    <Monitor size={28} />
                  </span>
                  <span className="chip py-1 px-3 bg-blue-500/10 border-blue-500/20 text-blue-300">
                    {t('items.web.badge')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t('items.web.title')}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {t('items.web.description')}
                </p>

                <ul className="space-y-2.5 mb-8 text-sm text-gray-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    <span>{locale === 'en' ? 'Custom admin panels & dashboards' : 'Fərdi admin panellər və dashboard-lar'}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    <span>{locale === 'en' ? 'Customer and client portals' : 'Müştəri portalları və şəxsi kabinetlər'}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    <span>{locale === 'en' ? 'E-commerce & corporate platforms' : 'Korporativ saytlar və e-ticarət platformaları'}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    <span>{locale === 'en' ? 'Scalable SaaS web applications' : 'SaaS tipli çoxistifadəçili məhsullar'}</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/xidmetler/veb-platformalar"
                className="btn btn-primary w-full justify-between py-3.5 px-6"
              >
                <span>{locale === 'en' ? 'View Web Platforms' : 'Veb Platforma Həllərinə Bax'}</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Growing Directions */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold text-white">{t('growing_title')}</h2>
            <span className="chip text-amber-400 bg-amber-500/10 border-amber-500/20">
              {t('growing_badge')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map(({ key, icon: Icon, color }) => (
              <div
                key={key}
                className="card p-6 rounded-[24px] flex flex-col justify-between"
              >
                <div>
                  <span className={`icon-plate h-12 w-12 rounded-2xl mb-4 ${color}`}>
                    <Icon size={24} />
                  </span>
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
