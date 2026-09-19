'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import Image from 'next/image';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

const WHATSAPP = 'https://wa.me/994558121400';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLocale = (nextLocale: 'az' | 'en') => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  };

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/xidmetler', label: t('services') },
    { href: '/portfolio', label: t('portfolio') },
    { href: '/haqqimizda', label: t('about') },
    { href: '/elaqe', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      {/* Neyrosoft Floating Pill Bar */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 rounded-full border border-white/10 bg-[#0F172A]/85 pr-2.5 pl-5 backdrop-blur-xl shadow-xl shadow-black/20 sm:pr-3 sm:pl-6">
        
        {/* Brand Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/logo.png"
            alt="Pixel Digital Service"
            width={130}
            height={44}
            className="h-8 sm:h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav Pills */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Naviqasiya">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-pill"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section: Language Switcher + CTA + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Dual Pill Language Switcher */}
          <div className="bg-[#1E293B] border border-white/5 flex items-center rounded-full p-1" role="group" aria-label="Dil seçimi">
            <button
              type="button"
              onClick={() => changeLocale('az')}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                locale === 'az'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              AZ
            </button>
            <button
              type="button"
              onClick={() => changeLocale('en')}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                locale === 'en'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Primary Pill Button */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden md:inline-flex text-xs sm:text-sm py-2 px-5"
          >
            <span>{locale === 'az' ? 'Qiymət təklifi al' : 'Get a quote'}</span>
            <ArrowRight size={15} />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[#1E293B] text-white flex h-10 w-10 items-center justify-center rounded-full lg:hidden border border-white/5 transition-colors hover:bg-white/10"
            aria-label="Menyu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-x-3 top-20 rounded-[28px] border border-white/10 bg-[#0F172A]/95 p-6 backdrop-blur-2xl shadow-2xl z-50 animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-semibold text-gray-200 hover:text-white hover:bg-white/5 transition-all"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                {locale === 'az' ? 'Qiymət təklifi al (WhatsApp)' : 'Get a quote (WhatsApp)'}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
