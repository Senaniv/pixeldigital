'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import InstagramIcon from '@/components/ui/InstagramIcon';
import ContactForm from '@/components/ui/ContactForm';

const WHATSAPP = 'https://wa.me/994558121400';
const INSTAGRAM = 'https://instagram.com/pixel.digital.service';

export default function ContactCTA() {
  const t = useTranslations('contact');
  const locale = useLocale();

  return (
    <section className="py-16 md:py-24 bg-[#0A0F1E] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('cta_title')}</h2>
          <p className="text-gray-400 text-lg">{t('cta_subtitle')}</p>
        </div>

        {/* Quick contact buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-700/30 min-h-[56px]"
          >
            <MessageCircle size={20} />
            {t('whatsapp_btn')}
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[56px]"
          >
            <InstagramIcon size={20} />
            {t('instagram_btn')}
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-gray-500 text-sm">
            {locale === 'az' ? 'və ya forma ilə' : 'or via form'}
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Contact form */}
        <ContactForm />
      </div>
    </section>
  );
}
