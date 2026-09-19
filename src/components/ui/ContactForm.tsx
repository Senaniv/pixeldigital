'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({ name: '', contact: '', type: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Ad: ${formData.name}%0AƏlaqə: ${formData.contact}%0ANövü: ${formData.type}%0AMesaj: ${formData.message}`;
    window.open(`https://wa.me/994558121400?text=${msg}`, '_blank');
  };

  const inputClass =
    'w-full bg-[#1E293B]/70 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-[#1E293B] transition-all duration-200 text-sm';

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder={t('form_name')}
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
        />
        <input
          type="text"
          placeholder={t('form_contact')}
          required
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          className={inputClass}
        />
      </div>

      <select
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        className={`${inputClass} cursor-pointer`}
      >
        <option value="" disabled className="bg-[#0F172A]">
          {t('form_type')}
        </option>
        <option value="software" className="bg-[#0F172A]">
          {t('form_type_software')}
        </option>
        <option value="web" className="bg-[#0F172A]">
          {t('form_type_web')}
        </option>
        <option value="other" className="bg-[#0F172A]">
          {t('form_type_other')}
        </option>
      </select>

      <textarea
        placeholder={t('form_message_placeholder')}
        required
        rows={4}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className={`${inputClass} resize-none min-h-[110px]`}
      />

      <button
        type="submit"
        className="btn btn-primary w-full py-4 rounded-full flex items-center justify-center gap-2"
      >
        <Send size={17} />
        <span>{t('form_submit')}</span>
      </button>

      <p className="text-gray-500 text-xs text-center">
        {/* Reassurance text */}
        WhatsApp üzərindən birbaşa yönləndirilir • 24 saat ərzində cavab
      </p>
    </form>
  );
}
