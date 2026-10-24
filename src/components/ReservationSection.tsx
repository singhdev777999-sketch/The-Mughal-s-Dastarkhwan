import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, CheckCircle, Share2, Copy } from 'lucide-react';
import { ReservationData } from '../types';

interface ReservationSectionProps {
  onReservationComplete?: (data: ReservationData) => void;
  preselectedChamber?: string;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  onReservationComplete,
  preselectedChamber
}) => {
  // Form state initialized to matching values
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [service, setService] = useState('Dastarkhwan-e-Shab (Dinner 8:45 PM)');
  const [partySize, setPartySize] = useState('4 Guests • Family Table');
  const [chamber, setChamber] = useState(
    preselectedChamber || 'Heritage Arch Hall (Air-conditioned)'
  );
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const [confirmedBooking, setConfirmedBooking] = useState<ReservationData | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !phone) return;

    const booking: ReservationData = {
      id: `AWADH-${Math.floor(1000 + Math.random() * 9000)}`,
      date,
      service,
      partySize,
      chamber,
      guestName,
      phone,
      specialRequests,
      createdAt: new Date().toLocaleTimeString()
    };

    setConfirmedBooking(booking);
    if (onReservationComplete) {
      onReservationComplete(booking);
    }
  };

  const copyWhatsAppText = () => {
    if (!confirmedBooking) return;
    const text = `The Mughal's Dastarkhwan (Lucknow)\nTable Hold Ref: ${confirmedBooking.id}\nGuest: ${confirmedBooking.guestName}\nDate: ${confirmedBooking.date}\nService: ${confirmedBooking.service}\nChamber: ${confirmedBooking.chamber}\nParty: ${confirmedBooking.partySize}\nConcierge: +91 (0522) 261 4455`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-24 bg-[#141312] relative" id="reservation">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold text-[#e9c176] tracking-[0.3em] uppercase block mb-2">
            TABLE RESERVATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#e6e1df] tracking-tight mb-3 font-normal">
            Secure Your Royal Dastarkhwan
          </h2>
          <p className="text-xs sm:text-sm text-[#d1c5b4] max-w-lg mx-auto leading-relaxed opacity-90">
            We honor table holds up to 15 minutes past arrival. For parties exceeding 10 guests, our Maître d’ will personally coordinate with you.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-[#211f1e] rounded-xl p-7 sm:p-10 lg:p-12 border border-[#e9c176]/30 shadow-2xl">
          {!confirmedBooking ? (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Row 1: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-[#d1c5b4] tracking-wider uppercase mb-2">
                    Reservation Date
                  </label>
                  <div className="flex items-center bg-[#2b2a28] px-4 py-3 rounded border border-[#e9c176]/20 focus-within:border-[#e9c176] shadow-inner">
                    <Calendar className="w-4 h-4 text-[#e9c176] mr-3 shrink-0" />
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="bg-transparent text-xs text-[#e6e1df] w-full focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-[#d1c5b4] tracking-wider uppercase mb-2">
                    Seating Service
                  </label>
                  <div className="flex items-center bg-[#2b2a28] px-4 py-3 rounded border border-[#e9c176]/20 focus-within:border-[#e9c176] shadow-inner">
                    <Clock className="w-4 h-4 text-[#e9c176] mr-3 shrink-0" />
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="bg-transparent text-xs text-[#e6e1df] w-full focus:outline-none"
                    >
                      <option className="bg-[#211f1e] text-[#e6e1df]">
                        Dastarkhwan-e-Khaas (Lunch 1:00 PM)
                      </option>
                      <option className="bg-[#211f1e] text-[#e6e1df]">
                        Dastarkhwan-e-Khaas (Lunch 2:30 PM)
                      </option>
                      <option className="bg-[#211f1e] text-[#e6e1df]">
                        Dastarkhwan-e-Shab (Dinner 7:30 PM)
                      </option>
                      <option className="bg-[#211f1e] text-[#e6e1df]">
                        Dastarkhwan-e-Shab (Dinner 8:45 PM)
                      </option>
                      <option className="bg-[#211f1e] text-[#e6e1df]">
                        Late Awadh Supper (Dinner 10:00 PM)
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 2: Guests & Ambiance Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-[#d1c5b4] tracking-wider uppercase mb-2">
                    Party Size
                  </label>
                  <div className="flex items-center bg-[#2b2a28] px-4 py-3 rounded border border-[#e9c176]/20 focus-within:border-[#e9c176] shadow-inner">
                    <Users className="w-4 h-4 text-[#e9c176] mr-3 shrink-0" />
                    <select
                      value={partySize}
                      onChange={(e) => setPartySize(e.target.value)}
                      className="bg-transparent text-xs text-[#e6e1df] w-full focus:outline-none"
                    >
                      <option className="bg-[#211f1e] text-[#e6e1df]">
                        2 Guests • Intimate Dastarkhwan
                      </option>
                      <option className="bg-[#211f1e] text-[#e6e1df]">
                        4 Guests • Family Table
                      </option>
                      <option className="bg-[#211f1e] text-[#e6e1df]">
                        6 Guests • Royal Feast
                      </option>
                      <option className="bg-[#211f1e] text-[#e6e1df]">
                        8+ Guests • Grand Gathering
                      </option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-[#d1c5b4] tracking-wider uppercase mb-2">
                    Dining Chamber Preference
                  </label>
                  <div className="flex items-center bg-[#2b2a28] px-4 py-3 rounded border border-[#e9c176]/20 focus-within:border-[#e9c176] shadow-inner">
                    <MapPin className="w-4 h-4 text-[#e9c176] mr-3 shrink-0" />
                    <select
                      value={chamber}
                      onChange={(e) => setChamber(e.target.value)}
                      className="bg-transparent text-xs text-[#e6e1df] w-full focus:outline-none"
                    >
                      <option className="bg-[#211f1e] text-[#e6e1df]">
                        Courtyard Veranda (Near Live Sigri)
                      </option>
                      <option className="bg-[#211f1e] text-[#e6e1df]">
                        Heritage Arch Hall (Air-conditioned)
                      </option>
                      <option className="bg-[#211f1e] text-[#e6e1df]">
                        Nawabi Family Alcove
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 3: Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-[#d1c5b4] tracking-wider uppercase mb-2">
                    Honoured Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nawabzada Alvi"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="bg-[#2b2a28] px-4 py-3 rounded text-xs text-[#e6e1df] placeholder-[#9a8f80] border border-[#e9c176]/20 focus:outline-none focus:border-[#e9c176] shadow-inner"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-[#d1c5b4] tracking-wider uppercase mb-2">
                    Telephone (WhatsApp Enabled)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98390 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-[#2b2a28] px-4 py-3 rounded text-xs text-[#e6e1df] placeholder-[#9a8f80] border border-[#e9c176]/20 focus:outline-none focus:border-[#e9c176] shadow-inner"
                  />
                </div>
              </div>

              {/* Dietary or Special Wishes */}
              <div className="flex flex-col">
                <label className="text-[11px] font-bold text-[#d1c5b4] tracking-wider uppercase mb-2">
                  Sensory & Celebratory Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Anniversary dawat, mild spice preference, extra roomali rotis ready upon seating"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="bg-[#2b2a28] px-4 py-3 rounded text-xs text-[#e6e1df] placeholder-[#9a8f80] border border-[#e9c176]/20 focus:outline-none focus:border-[#e9c176] shadow-inner"
                />
              </div>

              {/* Submit Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#9a8f80]">
                  * Instant telephone confirmation provided by concierge desk.
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-3.5 bg-[#e9c176] hover:bg-[#ffdea5] text-[#412d00] text-xs font-bold tracking-[0.2em] uppercase rounded transition-all duration-300 shadow-xl cursor-pointer"
                >
                  Confirm Reservation Request
                </button>
              </div>
            </form>
          ) : (
            /* Confirmation Ceremonial Slip */
            <div className="py-6 flex flex-col items-center text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-[#e9c176]/20 border border-[#e9c176] flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-[#e9c176]" />
              </div>

              <span className="text-[10px] font-bold text-[#e9c176] uppercase tracking-[0.3em] mb-1">
                Reservation Confirmed
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#e6e1df] font-medium mb-1">
                Shukriya, {confirmedBooking.guestName}!
              </h3>
              <p className="text-xs text-[#d1c5b4] max-w-md mb-6 leading-relaxed">
                Your ceremonial table hold has been recorded in our Royal Registry at Hazratganj.
              </p>

              {/* Parchment Box */}
              <div className="w-full max-w-md bg-[#141312] border border-[#e9c176]/35 rounded-xl p-5 text-left mb-6 space-y-2.5 shadow-lg">
                <div className="flex justify-between items-center border-b border-[#e9c176]/20 pb-2">
                  <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider">Reference Token</span>
                  <span className="font-mono text-sm font-bold text-[#e9c176]">{confirmedBooking.id}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#9a8f80]">Date & Service:</span>
                  <span className="text-[#e6e1df] font-medium">{confirmedBooking.date} • {confirmedBooking.service.split('(')[1]?.replace(')', '') || confirmedBooking.service}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#9a8f80]">Dining Chamber:</span>
                  <span className="text-[#e6e1df] font-medium">{confirmedBooking.chamber}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#9a8f80]">Party Size:</span>
                  <span className="text-[#e6e1df] font-medium">{confirmedBooking.partySize}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#9a8f80]">Telephone:</span>
                  <span className="text-[#e6e1df] font-medium">{confirmedBooking.phone}</span>
                </div>
                {confirmedBooking.specialRequests && (
                  <div className="text-xs pt-1 border-t border-[#e9c176]/15">
                    <span className="text-[#9a8f80] block text-[10px] uppercase">Special Requests:</span>
                    <span className="text-[#d1c5b4] italic">{confirmedBooking.specialRequests}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={copyWhatsAppText}
                  className="px-5 py-2.5 bg-[#2b2a28] hover:bg-[#363433] border border-[#e9c176]/30 text-[#e9c176] text-xs font-bold tracking-wider uppercase rounded flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Details Copied!' : 'Copy Summary'}</span>
                </button>

                <button
                  onClick={() => setConfirmedBooking(null)}
                  className="px-5 py-2.5 bg-[#c5a059] hover:bg-[#e9c176] text-[#141312] text-xs font-bold tracking-wider uppercase rounded cursor-pointer transition-colors"
                >
                  Book Another Table
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
