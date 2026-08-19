'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import InstagramIcon from '@/components/ui/InstagramIcon';

const WHATSAPP = 'https://wa.me/994558121400';
const INSTAGRAM = 'https://instagram.com/pixel.digital.service';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const year = new Date().getFullYear();

  const links = [
    { href: '/', label: tNav('home') },
    { href: '/xidmetler', label: tNav('services') },
    { href: '/portfolio', label: tNav('portfolio') },
    { href: '/haqqimizda', label: tNav('about') },
    { href: '/elaqe', label: tNav('contact') },
  ];

  return (
    <footer className="bg-[#060B17] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Pixel Digital Service"
              width={130}
              height={46}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">{t('slogan')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t('quick_links')}
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t('follow_us')}
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 text-sm transition-colors duration-200 group"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                WhatsApp: +994 55 812 14 00
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-400 text-sm transition-colors duration-200 group"
              >
                <InstagramIcon size={18} className="group-hover:scale-110 transition-transform" />
                @pixel.digital.service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-xs">
            © {year} {t('company')}. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
