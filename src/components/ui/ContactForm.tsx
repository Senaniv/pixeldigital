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
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200 text-sm min-h-[48px]';

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
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
      <select
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        className={`${inputClass} cursor-pointer`}
      >
        <option value="" disabled className="bg-[#0d1530]">
          {t('form_type')}
        </option>
        <option value="software" className="bg-[#0d1530]">
          {t('form_type_software')}
        </option>
        <option value="web" className="bg-[#0d1530]">
          {t('form_type_web')}
        </option>
        <option value="other" className="bg-[#0d1530]">
          {t('form_type_other')}
        </option>
      </select>
      <textarea
        placeholder={t('form_message_placeholder')}
        required
        rows={4}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className={`${inputClass} resize-none min-h-[120px]`}
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2 min-h-[56px]"
      >
        <Send size={18} />
        {t('form_submit')}
      </button>
      <p className="text-gray-600 text-xs text-center">
        {/* WhatsApp redirect note */}
        WhatsApp üzərindən göndərilir
      </p>
    </form>
  );
}
