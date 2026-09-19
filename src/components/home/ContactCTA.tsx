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
    <section className="mx-auto mt-20 sm:mt-28 max-w-6xl px-5 lg:px-8">
      {/* Neyrosoft 28px Big Card */}
      <div className="bg-[#0F172A] relative overflow-hidden rounded-[28px] border border-white/10 p-8 sm:p-14 text-white shadow-2xl">
        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {locale === 'az' ? 'Layihəniz var?' : 'Have a project in mind?'}
          </h2>
          <p className="mt-4 leading-relaxed text-gray-300 text-base sm:text-lg">
            {locale === 'az'
              ? 'Nə istədiyinizi bir neçə cümlə ilə yazın. Bir iş günü ərzində həll təklifi hazırlayırıq.'
              : 'Describe your challenge in a few sentences. We prepare a tailored solution breakdown within one business day.'}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={18} />
              <span>{t('whatsapp_btn')}</span>
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ink"
            >
              <InstagramIcon size={18} />
              <span>{t('instagram_btn')}</span>
            </a>
          </div>
        </div>

        {/* Quick form section inside the card */}
        <div className="relative mt-12 pt-8 border-t border-white/10 max-w-xl">
          <p className="text-sm font-semibold text-gray-300 mb-4">
            {locale === 'az' ? 'və ya formu dolduraraq yazın:' : 'or submit via quick form:'}
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
