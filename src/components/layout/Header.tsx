'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

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

  // Build locale-aware href
  const localePath = (path: string) => {
    if (locale === 'en') return `/en${path}`;
    return path;
  };

  // Switch language
  const switchLocale = () => {
    // Remove /en prefix or add it
    if (locale === 'az') {
      const enPath = '/en' + pathname;
      router.push(enPath);
    } else {
      const azPath = pathname.replace(/^\/en/, '') || '/';
      router.push(azPath);
    }
  };

  const navLinks = [
    { href: localePath('/'), label: t('home') },
    { href: localePath('/xidmetler'), label: t('services') },
    { href: localePath('/portfolio'), label: t('portfolio') },
    { href: localePath('/haqqimizda'), label: t('about') },
    { href: localePath('/elaqe'), label: t('contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0F1E]/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={localePath('/')} className="flex-shrink-0">
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

          {/* Right side: Lang switcher + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={switchLocale}
              className="text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {locale === 'az' ? 'EN' : 'AZ'}
            </button>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
            >
              {locale === 'az' ? 'Əlaqə' : 'Contact'}
            </a>
          </div>

          {/* Mobile: lang + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={switchLocale}
              className="text-sm font-semibold text-gray-400 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {locale === 'az' ? 'EN' : 'AZ'}
            </button>
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
        <div className="md:hidden fixed inset-0 top-16 bg-[#0A0F1E]/98 backdrop-blur-sm z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-8 pb-20">
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
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
