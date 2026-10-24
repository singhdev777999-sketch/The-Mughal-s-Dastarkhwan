import React from 'react';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';

interface HeroProps {
  onReserveClick: () => void;
  onExploreMenuClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReserveClick, onExploreMenuClick }) => {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Ambient Scrim Backdrop with Feast Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Grand Awadhi feast at The Mughal's Dastarkhwan"
          src="/assets/aistudio/unnamed__2__2503d562.jpg"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              '/assets/aistudio/Image_1_bd790a0d.jpeg';
          }}
          className="w-full h-full object-cover scale-105 contrast-[1.04] brightness-[1.02] saturate-[1.06] transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/80 to-[#141312]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,19,18,0.3)_0%,rgba(20,19,18,0.85)_100%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 w-full flex flex-col items-center text-center">
        {/* Live Status Ticker Pill */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#211f1e]/90 backdrop-blur-md border border-[#e9c176]/30 shadow-lg mb-8">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#e9c176] animate-pulse" />
          <span className="text-[11px] font-semibold text-[#e9c176] tracking-[0.25em] uppercase">
            OPEN TODAY • HAZRATGANJ • LUCKNOW
          </span>
          <span className="text-[#9a8f80] text-xs">•</span>
          <span className="text-[11px] font-semibold text-[#d1c5b4] tracking-[0.18em] uppercase">
            LUNCH & SHAB SERVICE
          </span>
        </div>

        {/* Regal Overline Tag */}
        <p className="text-[12px] font-bold text-[#ffdea4] tracking-[0.35em] uppercase mb-4">
          HERITAGE AWADHI CUISINE • ESTABLISHED NAWABI LEGACY
        </p>

        {/* Monumental Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-[72px] lg:leading-[80px] text-[#e6e1df] tracking-tight max-w-4xl mb-6 font-normal">
          An Extraordinary Taste of{' '}
          <span className="italic text-[#e9c176] font-normal font-serif">Lucknow</span>
        </h1>

        {/* Elegant Sub-editorial Text */}
        <p className="text-[16px] sm:text-[18px] text-[#d1c5b4] max-w-2xl font-light mb-10 leading-relaxed">
          Where timeless Nawabi culinary mastery meets the understated cadence of modern gastronomic refinement. Slow-braised in hand-beaten copper <span className="italic font-serif">degs</span> over smoldering charcoals.
        </p>

        {/* Dual Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#e9c176] hover:bg-[#ffdea5] text-[#412d00] text-[12px] font-bold tracking-[0.2em] uppercase rounded transition-all duration-300 shadow-[0_4px_25px_rgba(233,193,118,0.25)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Reserve Your Table</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={onExploreMenuClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#211f1e]/80 hover:bg-[#2b2a28] border border-[#e9c176]/30 text-[#e6e1df] hover:text-[#ffdea5] text-[12px] font-bold tracking-[0.2em] uppercase rounded transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            Explore The Menu
          </button>
        </div>

        {/* Quick Signature Highlights Floating Bar */}
        <div className="mt-16 pt-8 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="bg-[#1d1b1a]/85 backdrop-blur-md p-5 rounded-lg border border-[#e9c176]/15 hover:border-[#e9c176]/40 transition-colors shadow-sm">
            <span className="block font-serif text-2xl lg:text-3xl text-[#e9c176] font-medium">
              160
            </span>
            <span className="block text-[11px] font-semibold text-[#d1c5b4] tracking-wider uppercase mt-1">
              Botanical Spices
            </span>
          </div>

          <div className="bg-[#1d1b1a]/85 backdrop-blur-md p-5 rounded-lg border border-[#e9c176]/15 hover:border-[#e9c176]/40 transition-colors shadow-sm">
            <span className="block font-serif text-2xl lg:text-3xl text-[#e9c176] font-medium">
              Dum Pukht
            </span>
            <span className="block text-[11px] font-semibold text-[#d1c5b4] tracking-wider uppercase mt-1">
              Sealed Deg Heritage
            </span>
          </div>

          <div className="bg-[#1d1b1a]/85 backdrop-blur-md p-5 rounded-lg border border-[#e9c176]/15 hover:border-[#e9c176]/40 transition-colors shadow-sm">
            <span className="block font-serif text-2xl lg:text-3xl text-[#e9c176] font-medium">
              Sigri Grill
            </span>
            <span className="block text-[11px] font-semibold text-[#d1c5b4] tracking-wider uppercase mt-1">
              Live Open Coal Bhatti
            </span>
          </div>

          <div className="bg-[#1d1b1a]/85 backdrop-blur-md p-5 rounded-lg border border-[#e9c176]/15 hover:border-[#e9c176]/40 transition-colors shadow-sm">
            <span className="block font-serif text-2xl lg:text-3xl text-[#e9c176] font-medium">
              Tehzeeb
            </span>
            <span className="block text-[11px] font-semibold text-[#d1c5b4] tracking-wider uppercase mt-1">
              Graceful Hospitality
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
