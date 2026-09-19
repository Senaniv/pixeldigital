'use client';

import { useTranslations } from 'next-intl';

export default function HowWeWorkSection() {
  const t = useTranslations('how_we_work');
  const steps = t.raw('steps') as { number: string; title: string; description: string }[];

  return (
    <section className="mx-auto mt-20 sm:mt-24 max-w-6xl px-5 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-white text-2xl sm:text-[2rem] font-bold">{t('title')}</h2>
        <p className="text-gray-400 mt-3 leading-relaxed text-sm sm:text-base">
          {t('subtitle')}
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, i) => (
          <div
            key={i}
            className="card p-5 sm:p-6 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300"
          >
            <div>
              <span className="chip w-fit text-blue-400 bg-blue-500/10 border-blue-500/20 font-mono">
                {step.number}
              </span>
              <h3 className="text-white font-semibold text-base mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
