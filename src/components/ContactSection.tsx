import React from 'react';
import { MapPin, Phone, Car, Sparkles, Navigation, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#0f0e0d]" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Hazratganj Map Element */}
          <div className="lg:col-span-7">
            <div className="rounded-xl overflow-hidden border border-[#e9c176]/25 shadow-2xl relative">
              <div
                className="w-full h-80 sm:h-96 bg-cover bg-center transition-transform duration-700 hover:scale-[1.02]"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHQx3MwGtRfbK-ygX_C2KAF67HJUkgaaFXfm9X2yhVDQNK6ckTDiDZhG7XqLb5-6XJDsV4RmjxUGoqCbKQ_8n3z3Z_NhTxtYdSm8vSCNY2W5S5ckpIMN0n75sW-cOUMZSJSr6fepdFX79ASiT8Ae3B5wElBJTjg36X91KLJUgdtkgWqkNIExqEgbeT08WGe3yf7FYCggtvVrWjFetEVqlciKBHVJ3DEnZnzqRj87FDucyuWtBCg4LEug')`
                }}
              >
                {/* Fallback pattern overlay */}
                <div className="absolute inset-0 bg-[#141312]/20" />
              </div>

              {/* Map floating identity badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#141312]/92 backdrop-blur-md px-4 py-3 rounded-lg border border-[#e9c176]/35 shadow-lg flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#e9c176] shrink-0" />
                <div>
                  <span className="text-xs font-bold text-[#e6e1df] block uppercase tracking-wider">
                    {RESTAURANT_INFO.name}
                  </span>
                  <span className="text-[11px] text-[#d1c5b4] block">
                    Heart of Hazratganj • Lucknow Heritage Belt
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Practical Information & Tehzeeb Guidelines */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[11px] font-bold text-[#e9c176] tracking-[0.3em] uppercase mb-2">
              COURTESY & ESTATE ACCESS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#e6e1df] tracking-tight mb-6 font-normal">
              Visiting the Estate in Lucknow
            </h2>

            <div className="space-y-6 text-xs sm:text-[13px] text-[#d1c5b4]">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#e9c176] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#e6e1df] block text-sm mb-0.5">
                    Address & Landmark
                  </strong>
                  <p className="leading-relaxed">{RESTAURANT_INFO.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#e9c176] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#e6e1df] block text-sm mb-0.5">
                    Concierge & Order Enquiries
                  </strong>
                  <p className="leading-relaxed">{RESTAURANT_INFO.phoneDisplay}</p>
                  <p className="text-[11px] text-[#9a8f80] mt-0.5">
                    Assistance available daily 11:30 AM – 11:30 PM
                  </p>
                </div>
              </div>

              {/* Valet */}
              <div className="flex items-start gap-4">
                <Car className="w-5 h-5 text-[#e9c176] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#e6e1df] block text-sm mb-0.5">
                    Valet Parking & Accessibility
                  </strong>
                  <p className="leading-relaxed">
                    Complimentary valet service provided at main archway entrance. Wheelchair accessible dining hall available.
                  </p>
                </div>
              </div>

              {/* Dress Code */}
              <div className="flex items-start gap-4">
                <Sparkles className="w-5 h-5 text-[#e9c176] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#e6e1df] block text-sm mb-0.5">
                    Dress Etiquette
                  </strong>
                  <p className="leading-relaxed">
                    Smart casual or traditional Indian attire welcomed to mirror the historic elegance of Awadh.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 flex items-center gap-4">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-[#211f1e] hover:bg-[#2b2a28] border border-[#e9c176]/30 text-[#e9c176] text-xs font-bold tracking-[0.16em] uppercase rounded transition-colors shadow-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
