import React, { useState } from 'react';
import { Flame, Wind, ArrowRight, Sparkles, Utensils } from 'lucide-react';

interface AmbienceSectionProps {
  onReserveCourtyardClick: () => void;
}

export const AmbienceSection: React.FC<AmbienceSectionProps> = ({
  onReserveCourtyardClick
}) => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      title: 'Dhoongar Smoke',
      sub: 'Clove & Cow Ghee Ember Smoke',
      desc: 'Smoldering acacia charcoals bathed in pure desi ghee and cloves trapped inside sealed handis to impart an intoxicating court aroma.'
    },
    {
      title: 'Dum Pukht',
      sub: 'Clay Dough Seal',
      desc: 'Flour puran seal locking steam and essential botanical oils inside heavy copper deghs for over 12 slow simmer hours.'
    },
    {
      title: 'Zaffran & Ittr',
      sub: 'Kashmiri Saffron & Screwpine',
      desc: 'Kewra distilled in Kannauj and organic royal saffron strands steeped in hot whole milk, misted over the dishes prior to presentation.'
    },
    {
      title: 'Live Sigri Bhatti',
      sub: 'Open Fruitwood Pit at 400°C',
      desc: 'Skewered baby goat and marinated chicken glazed continuously with spiced saffron emulsions by our hereditary kebab ustaads.'
    }
  ];

  return (
    <section className="w-full py-24 bg-[#0f0e0d] relative overflow-hidden" id="ambience">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[11px] font-bold text-[#e9c176] tracking-[0.3em] uppercase mb-3">
              The Sensory Theatre
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] text-[#e6e1df] tracking-tight mb-6 font-normal">
              Under the Open Stars: The Scent of{' '}
              <span className="italic font-normal text-[#e8c178] font-serif">
                Live Sigri & Bhatti
              </span>
            </h2>
            <p className="text-base sm:text-[17px] text-[#d1c5b4] font-light mb-6 leading-relaxed">
              Step through into our courtyard veranda where the nocturnal warmth of Lucknow settles beneath lush canopy trees. Here, master <span className="italic">ustaads</span> skewering spiced kebabs work behind an open arched kitchen framed by terracotta tiles and warm incandescent lanterns.
            </p>
            <p className="text-sm sm:text-base text-[#d1c5b4] mb-8 leading-relaxed opacity-90">
              The rhythmic clapping of <span className="italic">roomali rotis</span> tossed high in the air, the sizzling drip of marinade over live charcoal, and the aromatic clouds of clove smoke create a kinetic dining spectacle honored since 1856.
            </p>

            {/* Ambiance Metric Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#1d1b1a] border border-[#e9c176]/20 p-5 rounded-lg shadow-sm">
                <Flame className="w-6 h-6 text-[#e9c176] mb-2" />
                <span className="font-serif text-lg text-[#e6e1df] block font-medium">
                  Charcoal Tandoor
                </span>
                <p className="text-xs text-[#d1c5b4] mt-1 leading-relaxed">
                  Acacia and fruitwood ember firing at 400°C.
                </p>
              </div>
              <div className="bg-[#1d1b1a] border border-[#e9c176]/20 p-5 rounded-lg shadow-sm">
                <Wind className="w-6 h-6 text-[#e9c176] mb-2" />
                <span className="font-serif text-lg text-[#e6e1df] block font-medium">
                  Veranda Seating
                </span>
                <p className="text-xs text-[#d1c5b4] mt-1 leading-relaxed">
                  Open-air evening breezes under Lucknow sky.
                </p>
              </div>
            </div>

            {/* Action */}
            <div>
              <button
                onClick={onReserveCourtyardClick}
                className="inline-flex items-center gap-2 text-[#e9c176] hover:text-[#ffdea5] text-xs font-bold tracking-[0.2em] uppercase transition-colors cursor-pointer group"
              >
                <span>Reserve a Courtyard Table</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right: Open Bhatti Kitchen Image Feature & Sacred Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden border border-[#e9c176]/25 shadow-2xl bg-[#211f1e]">
              <img
                alt="Live charcoal tandoor and open bhatti at The Mughal's Dastarkhwan courtyard"
                src="/assets/aistudio/download_14514960.jfif"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    '/assets/aistudio/Image_4_804e11f1.jpeg';
                }}
                className="w-full h-[420px] sm:h-[480px] object-cover contrast-[1.05] brightness-[1.02] saturate-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0d] via-transparent to-transparent" />

              {/* Floating Live Status Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-[#2b2a28]/95 backdrop-blur-md rounded-lg border border-[#e9c176]/30 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#e9c176] tracking-widest block uppercase">
                    Live Bhatti Counter
                  </span>
                  <span className="text-xs text-[#e6e1df] font-medium">
                    Hazratganj Open Courtyard Section
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e9c176] animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#e6e1df] uppercase tracking-wider">
                    Active Service
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Gastronomy Pillars */}
            <div className="bg-[#1d1b1a] border border-[#e9c176]/20 p-5 rounded-xl">
              <span className="text-[10px] font-bold text-[#e9c176] tracking-[0.2em] uppercase block mb-3">
                The Sacred Awadhi Cooking Techniques
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                {pillars.map((p, idx) => (
                  <button
                    key={p.title}
                    onClick={() => setSelectedPillar(idx)}
                    className={`px-3 py-2 text-left rounded-md transition-all text-xs cursor-pointer ${
                      selectedPillar === idx
                        ? 'bg-[#c5a059] text-[#141312] font-bold shadow-sm'
                        : 'bg-[#211f1e] text-[#d1c5b4] hover:text-[#e9c176]'
                    }`}
                  >
                    <span className="block truncate font-medium">{p.title}</span>
                  </button>
                ))}
              </div>
              <div className="bg-[#211f1e] p-3 rounded border border-[#e9c176]/15 text-xs text-[#d1c5b4] leading-relaxed">
                <span className="font-semibold text-[#e9c176] block mb-1">
                  {pillars[selectedPillar].sub}
                </span>
                {pillars[selectedPillar].desc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
