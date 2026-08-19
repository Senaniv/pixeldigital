'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';

const WHATSAPP = 'https://wa.me/994558121400';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0F1E]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Pixel Digital Service"
              width={140}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Clear AZ | EN Switcher + CTA */}
          <div className="hidden md:flex items-center gap-5">
            {/* Dual Language Switcher */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-1 text-xs">
              <button
                type="button"
                onClick={() => changeLocale('az')}
                className={`px-2.5 py-1 rounded-md font-semibold transition-all duration-200 ${
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
                className={`px-2.5 py-1 rounded-md font-semibold transition-all duration-200 ${
                  locale === 'en'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
            >
              {locale === 'az' ? 'Əlaqə' : 'Contact'}
            </a>
          </div>

          {/* Mobile: lang switcher + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Dual Language Switcher */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5 text-xs">
              <button
                type="button"
                onClick={() => changeLocale('az')}
                className={`px-2 py-1 rounded font-semibold transition-all duration-200 ${
                  locale === 'az'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                AZ
              </button>
              <button
                type="button"
                onClick={() => changeLocale('en')}
                className={`px-2 py-1 rounded font-semibold transition-all duration-200 ${
                  locale === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#0A0F1E]/98 backdrop-blur-md z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-7 pb-20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold text-gray-200 hover:text-white transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher in Mobile Menu */}
            <div className="flex items-center gap-2 mt-2 p-1.5 bg-white/5 border border-white/10 rounded-xl">
              <button
                type="button"
                onClick={() => {
                  changeLocale('az');
                  setMenuOpen(false);
                }}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  locale === 'az'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Azərbaycan (AZ)
              </button>
              <button
                type="button"
                onClick={() => {
                  changeLocale('en');
                  setMenuOpen(false);
                }}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  locale === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                English (EN)
              </button>
            </div>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-green-600 hover:bg-green-500 text-white text-lg font-semibold px-8 py-3 rounded-xl transition-colors shadow-lg shadow-green-900/30"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
