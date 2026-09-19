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
    <div className="pt-10 sm:pt-14 pb-20 bg-[#0A0F1E] min-h-screen">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="chip mb-4">
            <Mail size={14} className="text-blue-400" />
            <span>{locale === 'en' ? 'Contact' : 'Əlaqə'}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
            {t('title')}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Direct channels & info */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {locale === 'en' ? 'Direct Communication' : 'Birbaşa Əlaqə'}
                </h2>
              </div>
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
              className="card card-hover p-6 rounded-2xl flex items-center gap-4 group"
            >
              <span className="icon-plate h-12 w-12 rounded-xl text-green-400 bg-green-500/10 border-green-500/20 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </span>
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
              className="card card-hover p-6 rounded-2xl flex items-center gap-4 group"
            >
              <span className="icon-plate h-12 w-12 rounded-xl text-pink-400 bg-pink-500/10 border-pink-500/20 group-hover:scale-110 transition-transform">
                <InstagramIcon size={24} />
              </span>
              <div>
                <div className="text-xs text-pink-400 font-medium">Instagram</div>
                <div className="text-white font-bold text-lg">@pixel.digital.service</div>
              </div>
            </a>

            {/* Guarantee Note */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex items-start gap-3">
              <Clock size={20} className="text-blue-400 mt-0.5 shrink-0" />
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
          <div className="card p-7 sm:p-9 rounded-[28px]">
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
