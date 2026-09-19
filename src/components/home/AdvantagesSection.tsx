'use client';

import { useTranslations } from 'next-intl';
import { Settings, Zap, HeadphonesIcon } from 'lucide-react';

const icons = [Settings, Zap, HeadphonesIcon];

export default function AdvantagesSection() {
  const t = useTranslations('advantages');
  const items = t.raw('items') as { title: string; description: string }[];

  return (
    <section className="mx-auto mt-20 sm:mt-24 max-w-6xl px-5 lg:px-8">
      <div className="max-w-2xl mb-10">
        <h2 className="text-white text-2xl sm:text-[2rem] font-bold">
          {t('title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((item, i) => {
          const Icon = icons[i];
          return (
            <div
              key={i}
              className="card card-hover p-6 sm:p-8 rounded-[24px] flex flex-col justify-between"
            >
              <div>
                <span className="icon-plate h-12 w-12 rounded-2xl mb-5 text-blue-400">
                  <Icon size={22} />
                </span>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
