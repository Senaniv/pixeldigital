'use client';

import { MessageCircle } from 'lucide-react';

const WHATSAPP = 'https://wa.me/994558121400';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ilə yazın"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg shadow-green-900/40 hover:shadow-green-700/50 hover:scale-110 transition-all duration-300"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
