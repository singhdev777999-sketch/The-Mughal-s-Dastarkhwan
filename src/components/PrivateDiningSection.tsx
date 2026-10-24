import React, { useState } from 'react';
import { ShieldCheck, Utensils, Award, Mail, X, CheckCircle2 } from 'lucide-react';

interface PrivateDiningSectionProps {
  onReserveClick: () => void;
}

export const PrivateDiningSection: React.FC<PrivateDiningSectionProps> = ({
  onReserveClick
}) => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [salonFormSubmitted, setSalonFormSubmitted] = useState(false);
  const [salonName, setSalonName] = useState('');
  const [salonPhone, setSalonPhone] = useState('');
  const [guestCount, setGuestCount] = useState('16 Guests (Royal Chamber)');
  const [celebrationType, setCelebrationType] = useState('Wedding / Family Dawat');

  const handleSubmitSalon = (e: React.FormEvent) => {
    e.preventDefault();
    setSalonFormSubmitted(true);
    setTimeout(() => {
      // Auto close after 3s or user closes
    }, 4000);
  };

  return (
    <section className="w-full py-20 bg-[#1d1b1a] relative" id="private-dining">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-r from-[#211f1e] to-[#2b2a28] rounded-2xl p-8 lg:p-12 border border-[#e9c176]/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="relative z-10 lg:col-span-7">
              <span className="text-[11px] font-bold text-[#e9c176] tracking-[0.3em] uppercase block mb-3">
                EXCLUSIVE SALONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] lg:leading-[50px] text-[#e6e1df] tracking-tight mb-4 font-normal">
                Private Dastarkhwan & Bespoke Banqueting
              </h2>
              <p className="text-sm sm:text-base text-[#d1c5b4] mb-8 leading-relaxed opacity-95">
                Host your family gatherings, diplomatic assemblies, or intimate wedding dawat inside our private heritage suites. Dedicated master khansama, custom antique brass service ware, and ceremonial rosewater hand-washing rituals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-start gap-3 bg-[#141312]/60 p-3.5 rounded-lg border border-[#e9c176]/15">
                  <ShieldCheck className="w-5 h-5 text-[#e9c176] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#e6e1df] block uppercase tracking-wider">
                      Secluded Salons
                    </span>
                    <span className="text-xs text-[#9a8f80]">Up to 36 Guests</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#141312]/60 p-3.5 rounded-lg border border-[#e9c176]/15">
                  <Utensils className="w-5 h-5 text-[#e9c176] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#e6e1df] block uppercase tracking-wider">
                      Custom Deg Firing
                    </span>
                    <span className="text-xs text-[#9a8f80]">7-Course Menu</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#141312]/60 p-3.5 rounded-lg border border-[#e9c176]/15">
                  <Award className="w-5 h-5 text-[#e9c176] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#e6e1df] block uppercase tracking-wider">
                      Butler Adab
                    </span>
                    <span className="text-xs text-[#9a8f80]">Dedicated Captain</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setInquiryModalOpen(true)}
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#e9c176] hover:bg-[#ffdea5] text-[#412d00] text-xs font-bold tracking-[0.2em] uppercase rounded transition-all shadow-md cursor-pointer"
                >
                  <span>Inquire for Private Salon</span>
                  <Mail className="w-4 h-4" />
                </button>

                <button
                  onClick={onReserveClick}
                  className="px-6 py-3.5 bg-transparent border border-[#e9c176]/40 text-[#e6e1df] hover:text-[#e9c176] text-xs font-bold tracking-[0.2em] uppercase rounded transition-all cursor-pointer"
                >
                  Standard Table Booking
                </button>
              </div>
            </div>

            {/* Right: Estate Building Photo */}
            <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-[#e9c176]/30 shadow-2xl h-72 sm:h-88 lg:h-[400px]">
              <img
                src="/assets/aistudio/unnamed__4__fa9b6c6e.jpg"
                alt="The Royal Golden Arches Estate"
                className="w-full h-full object-cover contrast-[1.05] brightness-[1.02] saturate-[1.08] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/85 via-[#141312]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#141312]/90 backdrop-blur-md rounded-lg border border-[#e9c176]/25">
                <span className="text-[10px] font-bold text-[#e9c176] uppercase tracking-[0.2em] block">
                  Hazratganj Heritage Estate
                </span>
                <span className="text-xs text-[#d1c5b4]">
                  Royal Arched Suites for Intimate Dawats & Grand Celebrations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Salon Inquiry Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1d1b1a] border border-[#e9c176]/40 rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => {
                setInquiryModalOpen(false);
                setSalonFormSubmitted(false);
              }}
              className="absolute top-5 right-5 text-[#9a8f80] hover:text-[#e9c176] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!salonFormSubmitted ? (
              <>
                <span className="text-[10px] font-bold text-[#e9c176] uppercase tracking-[0.25em] block mb-1">
                  Private Salon Inquiry
                </span>
                <h3 className="font-serif text-2xl text-[#e6e1df] mb-2 font-medium">
                  Host an Aristocratic Dawat
                </h3>
                <p className="text-xs text-[#d1c5b4] mb-6 leading-relaxed">
                  Our Maître d' and Chief Khansama will personally craft a bespoke multi-course degustation suited to your dignitaries and family guests.
                </p>

                <form onSubmit={handleSubmitSalon} className="space-y-4 text-left">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#d1c5b4] block mb-1.5">
                      Host Name & Title
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nawabzada Alvi"
                      value={salonName}
                      onChange={(e) => setSalonName(e.target.value)}
                      className="w-full bg-[#141312] border border-[#e9c176]/25 rounded px-3.5 py-2.5 text-xs text-[#e6e1df] focus:outline-none focus:border-[#e9c176]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#d1c5b4] block mb-1.5">
                        Telephone
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98390 XXXXX"
                        value={salonPhone}
                        onChange={(e) => setSalonPhone(e.target.value)}
                        className="w-full bg-[#141312] border border-[#e9c176]/25 rounded px-3.5 py-2.5 text-xs text-[#e6e1df] focus:outline-none focus:border-[#e9c176]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#d1c5b4] block mb-1.5">
                        Guest Capacity
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full bg-[#141312] border border-[#e9c176]/25 rounded px-3.5 py-2.5 text-xs text-[#e6e1df] focus:outline-none focus:border-[#e9c176]"
                      >
                        <option>10-15 Guests (Wazir Suite)</option>
                        <option>16-24 Guests (Nawab Suite)</option>
                        <option>25-36 Guests (Full Grand Dastarkhwan)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#d1c5b4] block mb-1.5">
                      Occasion
                    </label>
                    <select
                      value={celebrationType}
                      onChange={(e) => setCelebrationType(e.target.value)}
                      className="w-full bg-[#141312] border border-[#e9c176]/25 rounded px-3.5 py-2.5 text-xs text-[#e6e1df] focus:outline-none focus:border-[#e9c176]"
                    >
                      <option>Wedding / Family Dawat</option>
                      <option>Diplomatic / Corporate Banqueting</option>
                      <option>Milestone Anniversary</option>
                      <option>Curated Royal Degustation</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#e9c176] hover:bg-[#ffdea5] text-[#412d00] text-xs font-bold tracking-[0.2em] uppercase rounded transition-colors"
                    >
                      Transmit Salon Request
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-8 text-center flex flex-col items-center">
                <CheckCircle2 className="w-12 h-12 text-[#e9c176] mb-3" />
                <h3 className="font-serif text-2xl text-[#e6e1df] mb-2">
                  Adab & Gratitude!
                </h3>
                <p className="text-xs text-[#d1c5b4] max-w-sm mb-6 leading-relaxed">
                  Your private salon inquiry for <span className="text-[#e9c176] font-semibold">{guestCount}</span> has been transferred directly to our Estate Butler. We shall ring you at <span className="text-[#e9c176] font-semibold">{salonPhone}</span> today to refine your custom 7-course menu.
                </p>
                <button
                  onClick={() => {
                    setInquiryModalOpen(false);
                    setSalonFormSubmitted(false);
                  }}
                  className="px-6 py-2 bg-[#2b2a28] border border-[#e9c176]/30 text-[#e9c176] text-xs font-bold uppercase tracking-wider rounded"
                >
                  Return to Estate
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
