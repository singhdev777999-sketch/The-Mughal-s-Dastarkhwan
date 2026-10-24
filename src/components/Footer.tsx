import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  return (
    <footer className="w-full bg-[#1d1b1a] border-t border-[#e9c176]/15 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Col 1: Brand & Legacy */}
          <div className="lg:col-span-4 flex flex-col pr-4">
            <div className="mb-3">
              <span className="font-serif text-2xl text-[#e9c176] tracking-tight block font-normal">
                {RESTAURANT_INFO.name}
              </span>
              <span className="text-[11px] font-semibold text-[#d1c5b4] tracking-[0.2em] uppercase block mt-1 opacity-80">
                {RESTAURANT_INFO.tagline}
              </span>
            </div>
            <p className="text-xs sm:text-[13px] text-[#d1c5b4] mt-3 leading-relaxed opacity-85">
              Custodians of Awadhi courtly gastronomy, presenting the timeless tehzeeb, dum pukht craftsmanship, and legendary flavours nurtured under the patronage of the Nawabs of Awadh.
            </p>
          </div>

          {/* Col 2: Service Hours */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="text-[11px] font-bold text-[#e9c176] tracking-[0.2em] uppercase mb-4">
              Service Hours
            </span>
            <div className="space-y-3 text-xs sm:text-[13px] text-[#d1c5b4]">
              <div>
                <p className="font-semibold text-[#e6e1df]">Dastarkhwan-e-Khaas (Lunch)</p>
                <p className="opacity-90">12:30 PM – 04:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-[#e6e1df]">Dastarkhwan-e-Shab (Dinner)</p>
                <p className="opacity-90">07:00 PM – 11:30 PM</p>
              </div>
              <p className="text-[11px] text-[#9a8f80] pt-1">
                Valet parking & bespoke hospitality available.
              </p>
            </div>
          </div>

          {/* Col 3: The Estate */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="text-[11px] font-bold text-[#e9c176] tracking-[0.2em] uppercase mb-4">
              The Estate
            </span>
            <address className="text-xs sm:text-[13px] text-[#d1c5b4] not-italic space-y-1">
              <p className="text-[#e6e1df] font-semibold">Royal Heritage Quarters</p>
              <p>Near Lalbagh & Hazratganj</p>
              <p>Lucknow, Uttar Pradesh</p>
              <p className="pt-2 text-[#e9c176] font-medium">{RESTAURANT_INFO.email}</p>
              <p className="opacity-90">+91 (0522) 261 4455</p>
            </address>
          </div>

          {/* Col 4: Private Invitations */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="text-[11px] font-bold text-[#e9c176] tracking-[0.2em] uppercase mb-4">
              Private Invitations
            </span>
            <p className="text-xs text-[#d1c5b4] mb-3 leading-relaxed opacity-85">
              Receive curated seasonal tasting menu disclosures and private salon invitations.
            </p>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="flex items-center bg-[#141312] border border-[#e9c176]/25 rounded px-3 py-2 focus-within:border-[#e9c176]">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your ceremonial email"
                    className="bg-transparent text-xs text-[#e6e1df] placeholder-[#9a8f80] focus:outline-none w-full"
                  />
                  <button
                    type="submit"
                    className="text-[#e9c176] hover:text-[#ffdea5] text-[11px] font-bold uppercase tracking-wider pl-2 cursor-pointer transition-colors"
                  >
                    Join
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center gap-2 p-2 bg-[#141312] rounded border border-[#e9c176]/40 text-xs text-[#e9c176]">
                <CheckCircle2 className="w-4 h-4 text-[#e9c176]" />
                <span>You are inscribed in our private rolls.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e9c176]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9a8f80]">
            © {new Date().getFullYear()} The Mughal's Dastarkhwan Heritage Dining. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[11px] font-semibold text-[#d1c5b4] uppercase tracking-widest">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('The Mughal Dastarkhwan Instagram Archive (@mughalsdastarkhwan.official)');
              }}
              className="hover:text-[#e9c176] transition-colors"
            >
              Instagram
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="hover:text-[#e9c176] transition-colors"
            >
              Concierge
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Press & Media Kit: The Culinary Epics of Awadh');
              }}
              className="hover:text-[#e9c176] transition-colors"
            >
              Press
            </a>
            <a
              href="#story"
              className="hover:text-[#e9c176] transition-colors"
            >
              Heritage Archives
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
