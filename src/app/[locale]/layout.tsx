import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages, getTranslations } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Pixel Digital Service — Automated Business Solutions'
      : 'Pixel Digital Service — Avtomatik Biznes Həlləri',
    description: isEn
      ? 'We build automated solutions for the repetitive tasks that wear you down. Web platforms, custom software — Baku.'
      : 'Gündəlik təkrarlanan işlərə avtomatik həllər hazırlayırıq. Veb platformalar, xüsusi proqram — Bakı.',
    keywords: isEn
      ? ['web platform development baku', 'custom software baku', 'warehouse management software', 'business automation']
      : ['veb platforma hazırlanması bakı', 'xüsusi proqram təminatı', 'anbar idarəetmə proqramı', 'biznes avtomatlaşdırma'],
    openGraph: {
      siteName: 'Pixel Digital Service',
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} antialiased bg-[#0A0F1E] text-white`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
