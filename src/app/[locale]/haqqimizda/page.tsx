import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Target, Users, ShieldCheck, HeartHandshake, Clock, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
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
      ? 'About Us — Pixel Digital Service'
      : 'Haqqımızda — Pixel Digital Service',
    description: isEn
      ? 'Learn about Pixel Digital Service, our values, approach, and how we automate repetitive tasks.'
      : 'Pixel Digital Service haqqında, dəyərlərimiz, yanaşmamız və təkrarlanan işləri necə avtomatlaşdırdığımız haqqında.',
  };
}

const WHATSAPP_BASE = 'https://wa.me/994558121400';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('about');
  const tContact = await getTranslations('contact');

  const values = t.raw('values') as { title: string; description: string }[];
  const valueIcons = [Target, ShieldCheck, Sparkles, HeartHandshake];

  return (
    <div className="pt-10 sm:pt-14 pb-20 bg-[#0A0F1E] min-h-screen">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="chip mb-4">
            <Users size={14} className="text-blue-400" />
            <span>{t('title')}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            {t('subtitle')}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Story Section */}
        <div className="card rounded-[28px] p-8 sm:p-12 mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {locale === 'en' ? 'Our Mission & Story' : 'Missiyamız və Hekayəmiz'}
          </h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-8">
            {t('story')}
          </p>
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center gap-3 text-blue-300 text-sm">
            <Clock size={20} className="shrink-0 text-blue-400" />
            <span>{t('response_time')}</span>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {locale === 'en' ? 'Our Core Values' : 'Əsas Dəyərlərimiz'}
              </h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              {locale === 'en'
                ? 'The principles that guide every single project we take on.'
                : 'Hər bir layihəmizdə rəhbər tutduğumuz iş prinsipləri.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = valueIcons[idx] || Sparkles;
              return (
                <div
                  key={idx}
                  className="card card-hover p-6 rounded-2xl"
                >
                  <span className="icon-plate h-12 w-12 rounded-xl mb-4 text-blue-400">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team note & CTA */}
        <div className="card rounded-[28px] p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <span className="icon-plate h-14 w-14 rounded-2xl mx-auto mb-5 text-blue-400">
            <Users size={26} />
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {locale === 'en' ? 'Agile & Dedicated Team' : 'Çevik və İxtisaslaşmış Komanda'}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            {t('team_placeholder')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                locale === 'en'
                  ? 'Hello, I want to discuss a project with Pixel Digital Service.'
                  : 'Salam, Pixel Digital Service ilə layihə müzakirə etmək istərdim.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={18} />
              <span>{tContact('whatsapp_btn')}</span>
            </a>
            <Link
              href="/elaqe"
              className="btn btn-ink"
            >
              <span>{tContact('discuss_btn')}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
