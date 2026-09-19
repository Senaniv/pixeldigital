'use client';

import { MessageCircle } from 'lucide-react';

const WHATSAPP = 'https://wa.me/994558121400';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Söhbəti aç"
      className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/40 transition-transform duration-200 hover:scale-105 active:scale-95 sm:right-6 sm:bottom-6 border border-white/10"
    >
      <MessageCircle size={24} fill="currentColor" />
    </a>
  );
}
