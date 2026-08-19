'use client';

import { useTranslations } from 'next-intl';

export default function HowWeWorkSection() {
  const t = useTranslations('how_we_work');
  const steps = t.raw('steps') as { number: string; title: string; description: string }[];

  return (
    <section className="py-16 md:py-24 bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('title')}</h2>
          <p className="text-gray-400 max-w-lg mx-auto">{t('subtitle')}</p>
        </div>

        {/* Timeline — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Desktop: horizontal line */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="relative flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0">
                {/* Mobile: vertical line */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-14 bottom-0 w-px bg-blue-500/20" />
                )}

                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 lg:mb-6 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">{step.number}</span>
                </div>

                {/* Content */}
                <div className="lg:text-center">
                  <h3 className="text-white font-semibold mb-1.5 text-base">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
