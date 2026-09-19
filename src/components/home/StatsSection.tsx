'use client';

import { useLocale } from 'next-intl';

export default function StatsSection() {
  const locale = useLocale();

  const stats = [
    {
      value: '24',
      unit: 'h',
      label: locale === 'az' ? 'Cavab müddəti' : 'Response time',
    },
    {
      value: '100',
      unit: '%',
      label: locale === 'az' ? 'Fərdi yanaşma' : 'Tailored solutions',
    },
    {
      value: '0',
      unit: '',
      label: locale === 'az' ? 'Təkrarlanan əl işi' : 'Manual repetitive work',
    },
    {
      value: '∞',
      unit: '',
      label: locale === 'az' ? 'Təhvildən sonra dəstək' : 'Support after delivery',
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 mt-2 sm:mt-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="card px-5 py-6 sm:px-6 sm:py-7 text-center hover:border-white/20 transition-all duration-300"
          >
            <p className="text-white text-3xl sm:text-4xl lg:text-[2.65rem] leading-none font-bold tabular-nums">
              {stat.value}
              {stat.unit && <span className="text-blue-500 font-semibold">{stat.unit}</span>}
            </p>
            <p className="text-gray-400 mt-3 text-xs sm:text-sm leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
