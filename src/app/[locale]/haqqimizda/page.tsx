import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Target, Users, ShieldCheck, HeartHandshake, Clock, Sparkles, MessageCircle } from 'lucide-react';
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

  const contactLink = locale === 'en' ? '/en/elaqe' : '/elaqe';

  return (
    <div className="pt-28 pb-20 bg-[#0A0F1E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
              {t('title')}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {t('subtitle')}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white/[0.02] border border-white/[0.07] rounded-3xl p-8 sm:p-12 mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            {locale === 'en' ? 'Our Mission & Story' : 'Missiyamız və Hekayəmiz'}
          </h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
            {t('story')}
          </p>
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center gap-3 text-blue-300 text-sm">
            <Clock size={20} className="flex-shrink-0" />
            <span>{t('response_time')}</span>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {locale === 'en' ? 'Our Core Values' : 'Əsas Dəyərlərimiz'}
            </h2>
            <p className="text-gray-400 text-sm">
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
                  className="bg-white/[0.02] border border-white/[0.07] hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team note & CTA */}
        <div className="bg-gradient-to-r from-blue-950/40 via-purple-900/20 to-[#0F172A] border border-white/10 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <Users size={36} className="mx-auto text-blue-400 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">
            {locale === 'en' ? 'Agile & Dedicated Team' : 'Çevik və İxtisaslaşmış Komanda'}
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            {t('team_placeholder')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                locale === 'en'
                  ? 'Hello, I want to discuss a project with Pixel Digital Service.'
                  : 'Salam, Pixel Digital Service ilə layihə müzakirə etmək istərdim.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-green-900/30 hover:scale-[1.02]"
            >
              <MessageCircle size={20} />
              {tContact('whatsapp_btn')}
            </a>
            <Link
              href={contactLink}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-colors"
            >
              {tContact('discuss_btn')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
