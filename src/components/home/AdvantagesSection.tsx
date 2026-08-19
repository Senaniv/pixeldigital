'use client';

import { useTranslations } from 'next-intl';
import { Settings, Zap, HeadphonesIcon } from 'lucide-react';

const icons = [Settings, Zap, HeadphonesIcon];

export default function AdvantagesSection() {
  const t = useTranslations('advantages');
  const items = t.raw('items') as { title: string; description: string }[];

  return (
    <section className="py-16 md:py-24 bg-[#060B17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-5 group-hover:bg-blue-600/30 transition-colors">
                  <Icon size={22} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
