import { getTranslations } from 'next-intl/server';
import { MessageCircle, Clock, Send, Mail } from 'lucide-react';
import InstagramIcon from '@/components/ui/InstagramIcon';
import ContactForm from '@/components/ui/ContactForm';
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
      ? 'Contact Us — Pixel Digital Service'
      : 'Əlaqə — Pixel Digital Service',
    description: isEn
      ? 'Get in touch with Pixel Digital Service. Direct WhatsApp consultation and project requests.'
      : 'Pixel Digital Service ilə əlaqə saxlayın. Birbaşa WhatsApp məsləhəti və layihə müraciəti.',
  };
}

const WHATSAPP = 'https://wa.me/994558121400';
const INSTAGRAM = 'https://instagram.com/pixel.digital.service';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('contact');

  return (
    <div className="pt-28 pb-20 bg-[#0A0F1E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
              {locale === 'en' ? 'Contact' : 'Əlaqə'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Direct channels & info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                {locale === 'en' ? 'Direct Communication' : 'Birbaşa Əlaqə'}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {locale === 'en'
                  ? 'We reply within 24 hours. The fastest way to get in touch is via WhatsApp.'
                  : 'Bütün müraciətlərə 24 saat ərzində cavab veririk. Ən sürətli əlaqə yolu WhatsApp-dır.'}
              </p>
            </div>

            {/* WhatsApp Big Card */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-green-950/30 border border-green-500/30 hover:border-green-500/60 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <div>
                <div className="text-xs text-green-400 font-medium">WhatsApp (Ən sürətli)</div>
                <div className="text-white font-bold text-lg">+994 55 812 14 00</div>
              </div>
            </a>

            {/* Instagram Big Card */}
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-pink-950/30 border border-pink-500/30 hover:border-pink-500/60 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <InstagramIcon size={24} />
              </div>
              <div>
                <div className="text-xs text-pink-400 font-medium">Instagram</div>
                <div className="text-white font-bold text-lg">@pixel.digital.service</div>
              </div>
            </a>

            {/* Guarantee Note */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex items-start gap-3">
              <Clock size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="text-xs sm:text-sm text-gray-300">
                <strong className="text-white block mb-1">
                  {locale === 'en' ? 'Quick 24-Hour Feedback' : '24 Saat Ərzində Geri Dönüş'}
                </strong>
                {locale === 'en'
                  ? 'We carefully review your task requirements and prepare an initial solution breakdown with no obligation.'
                  : 'Tələblərinizi analiz edir və heç bir öhdəlik olmadan ilkin həll təklifimizi hazırlayırıq.'}
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-2">
              {locale === 'en' ? 'Send a Message' : 'Forma ilə Müraciət'}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6">
              {locale === 'en'
                ? 'Fill in the details below — this will open WhatsApp with your pre-filled inquiry.'
                : 'Məlumatları daxil edin — müraciətiniz avtomatik WhatsApp mesajına çevriləcək.'}
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
