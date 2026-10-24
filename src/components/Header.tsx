import React, { useState } from 'react';
import { Menu, X, Calendar, UtensilsCrossed, Sparkles } from 'lucide-react';

interface HeaderProps {
  onReserveClick: () => void;
  onOpenTastingPlan: () => void;
  tastingPlanCount: number;
  onHomeClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onReserveClick,
  onOpenTastingPlan,
  tastingPlanCount,
  onHomeClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (onHomeClick) {
      onHomeClick();
    }
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#141312]/92 backdrop-blur-xl border-b border-[#e9c176]/15">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (onHomeClick) {
              onHomeClick();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col group text-left"
        >
          <span className="font-serif text-xl sm:text-2xl text-[#e9c176] tracking-tight transition-colors group-hover:text-[#ffdea5]">
            The Mughal's Dastarkhwan
          </span>
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#d1c5b4] tracking-[0.25em] uppercase opacity-85">
            Lucknow • Estd. Heritage Awadh
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-7">
          <button
            onClick={() => scrollTo('story')}
            className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#d1c5b4] hover:text-[#ffdea5] transition-colors cursor-pointer"
          >
            Our Story
          </button>
          <button
            onClick={() => scrollTo('menu')}
            className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#d1c5b4] hover:text-[#ffdea5] transition-colors cursor-pointer"
          >
            The Menu
          </button>
          <button
            onClick={() => scrollTo('ambience')}
            className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#d1c5b4] hover:text-[#ffdea5] transition-colors cursor-pointer"
          >
            Ambience
          </button>
          <button
            onClick={() => scrollTo('gallery')}
            className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#d1c5b4] hover:text-[#ffdea5] transition-colors cursor-pointer"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollTo('private-dining')}
            className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#d1c5b4] hover:text-[#ffdea5] transition-colors cursor-pointer"
          >
            Private Dining
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#d1c5b4] hover:text-[#ffdea5] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-3">
          {/* Tasting Plan Badge Button */}
          <button
            onClick={onOpenTastingPlan}
            className="relative p-2.5 rounded-lg bg-[#211f1e] hover:bg-[#2b2a28] border border-[#e9c176]/20 text-[#e9c176] transition-all flex items-center gap-2 text-xs font-semibold tracking-wider uppercase cursor-pointer"
            title="Curated Feast Tasting Journal"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#e9c176]" />
            <span className="hidden md:inline text-[11px]">Tasting Plan</span>
            {tastingPlanCount > 0 && (
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#c5a059] text-[#141312] text-[11px] font-bold">
                {tastingPlanCount}
              </span>
            )}
          </button>

          {/* Reserve CTA */}
          <button
            onClick={onReserveClick}
            className="hidden sm:inline-flex items-center justify-center px-5 sm:px-6 py-2.5 bg-[#c5a059] hover:bg-[#e9c176] text-[#141312] text-[11px] sm:text-[12px] font-bold tracking-[0.18em] uppercase rounded transition-all duration-300 shadow-[0_4px_20px_rgba(197,160,89,0.2)] hover:shadow-[0_4px_25px_rgba(197,160,89,0.35)] cursor-pointer"
          >
            Reserve a Table
          </button>

          {/* Official Royal Crest Emblem */}
          <div className="hidden sm:flex items-center pl-1">
            <img
              src="/assets/aistudio/unnamed__3__8ceca9c8.jpg"
              alt="The Mughal's Dastarkhwan Official Insignia"
              className="w-9 h-9 rounded-full object-cover border border-[#e9c176]/40 shadow-sm"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-lg bg-[#211f1e] border border-[#e9c176]/20 text-[#e9c176] hover:text-[#ffdea5]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#141312]/98 border-b border-[#e9c176]/20 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <button
            onClick={() => scrollTo('story')}
            className="text-left text-sm font-semibold tracking-[0.16em] uppercase text-[#d1c5b4] hover:text-[#ffdea5] py-2 border-b border-[#2b2a28]"
          >
            Our Story
          </button>
          <button
            onClick={() => scrollTo('menu')}
            className="text-left text-sm font-semibold tracking-[0.16em] uppercase text-[#d1c5b4] hover:text-[#ffdea5] py-2 border-b border-[#2b2a28]"
          >
            The Menu
          </button>
          <button
            onClick={() => scrollTo('ambience')}
            className="text-left text-sm font-semibold tracking-[0.16em] uppercase text-[#d1c5b4] hover:text-[#ffdea5] py-2 border-b border-[#2b2a28]"
          >
            Ambience & Sigri
          </button>
          <button
            onClick={() => scrollTo('gallery')}
            className="text-left text-sm font-semibold tracking-[0.16em] uppercase text-[#d1c5b4] hover:text-[#ffdea5] py-2 border-b border-[#2b2a28]"
          >
            Visual Heritage
          </button>
          <button
            onClick={() => scrollTo('private-dining')}
            className="text-left text-sm font-semibold tracking-[0.16em] uppercase text-[#d1c5b4] hover:text-[#ffdea5] py-2 border-b border-[#2b2a28]"
          >
            Private Dining & Salons
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="text-left text-sm font-semibold tracking-[0.16em] uppercase text-[#d1c5b4] hover:text-[#ffdea5] py-2 border-b border-[#2b2a28]"
          >
            Location & Estate Access
          </button>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReserveClick();
              }}
              className="w-full py-3 bg-[#c5a059] hover:bg-[#e9c176] text-[#141312] text-xs font-bold tracking-[0.18em] uppercase rounded text-center"
            >
              Reserve a Table
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTastingPlan();
              }}
              className="w-full py-2.5 bg-[#211f1e] text-[#e9c176] border border-[#e9c176]/30 text-xs font-semibold tracking-wider uppercase rounded flex items-center justify-center gap-2"
            >
              <UtensilsCrossed className="w-4 h-4" />
              Tasting Plan ({tastingPlanCount} items)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
