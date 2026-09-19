'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { MessageCircle, Phone, MapPin, ArrowUp } from 'lucide-react';
import InstagramIcon from '@/components/ui/InstagramIcon';

const WHATSAPP = 'https://wa.me/994558121400';
const INSTAGRAM = 'https://instagram.com/pixel.digital.service';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 sm:mt-24 px-3 pb-5 sm:px-5">
      {/* Neyrosoft 28px Inner Container */}
      <div className="bg-[#0F172A] border border-white/10 shadow-2xl mx-auto max-w-6xl rounded-[28px] px-6 py-12 lg:px-10">
        
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* Col 1: Brand & Social Circles */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Pixel Digital Service"
                width={130}
                height={46}
                className="h-9 w-auto"
              />
            </Link>
            
            <p className="text-gray-400 mt-4 max-w-xs text-sm leading-relaxed">
              {locale === 'az'
                ? 'Gündəlik təkrarlanan işlərə avtomatik həllər hazırlayan proqram təminatı komandası.'
                : 'Software team building automated solutions for repetitive daily business workflows.'}
            </p>

            {/* Social Buttons Circles */}
            <div className="mt-5 flex items-center gap-2">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="bg-[#1E293B] text-gray-400 hover:bg-green-600 hover:text-white flex h-10 w-10 items-center justify-center rounded-full transition-all border border-white/5"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-[#1E293B] text-gray-400 hover:bg-pink-600 hover:text-white flex h-10 w-10 items-center justify-center rounded-full transition-all border border-white/5"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Keçidlər */}
          <nav aria-labelledby="footer-links">
            <h3 id="footer-links" className="text-white mb-4 text-sm font-semibold">
              {locale === 'az' ? 'Keçidlər' : 'Navigation'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link href="/xidmetler" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {tNav('services')}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {tNav('portfolio')}
                </Link>
              </li>
              <li>
                <Link href="/haqqimizda" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link href="/elaqe" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Col 3: Xidmətlər */}
          <nav aria-labelledby="footer-services">
            <h3 id="footer-services" className="text-white mb-4 text-sm font-semibold">
              {locale === 'az' ? 'Xidmətlər' : 'Services'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/xidmetler/xususi-proqram-teminati" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {locale === 'az' ? 'Xüsusi proqram təminatı' : 'Custom software'}
                </Link>
              </li>
              <li>
                <Link href="/xidmetler/veb-platformalar" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {locale === 'az' ? 'Veb platformalar' : 'Web platforms'}
                </Link>
              </li>
              <li>
                <Link href="/xidmetler/xususi-proqram-teminati" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {locale === 'az' ? 'Anbar & Stok idarəetməsi' : 'Inventory tracking'}
                </Link>
              </li>
              <li>
                <Link href="/xidmetler/xususi-proqram-teminati" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {locale === 'az' ? 'CRM / Müştəri panelləri' : 'CRM & client portals'}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Col 4: Əlaqə */}
          <div>
            <h3 className="text-white mb-4 text-sm font-semibold">
              {locale === 'az' ? 'Əlaqə' : 'Contact'}
            </h3>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone size={17} className="mt-0.5 shrink-0 text-blue-400" />
                <a href="tel:+994558121400" className="hover:text-blue-400 transition-colors">
                  +994 55 812 14 00
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={17} className="mt-0.5 shrink-0 text-blue-400" />
                <span>Bakı, Azərbaycan</span>
              </li>
            </ul>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6 w-full text-center"
            >
              {locale === 'az' ? 'Qiymət təklifi al' : 'Get a quote'}
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Yuxarı Qayıt */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-gray-400 text-xs">
            © {year} Pixel Digital Service. {t('rights')}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="text-gray-400 hover:text-blue-400 inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
          >
            <ArrowUp size={14} />
            <span>{locale === 'az' ? 'Yuxarı qayıt' : 'Back to top'}</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
