import React from 'react';
import { Sparkles, ShieldCheck, Clock, Award } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#0f0e0d] relative overflow-hidden" id="story">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Image Collage & Architectural Heritage Entrance */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#211f1e] rounded-xl overflow-hidden border border-[#e9c176]/20 shadow-2xl">
              <img
                alt="Hand-carved Nawabi entrance of The Mughal's Dastarkhwan"
                src="/assets/aistudio/unnamed__1__8be86869.jpg"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    '/assets/aistudio/Image_2_44e15b35.jpeg';
                }}
                className="w-full h-[480px] sm:h-[540px] object-cover object-center contrast-[1.05] brightness-[1.02] saturate-[1.08] transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0d] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#2b2a28]/95 backdrop-blur-md rounded-lg border border-[#e9c176]/30 shadow-lg">
                <span className="text-[11px] font-bold text-[#e9c176] block tracking-[0.2em] uppercase">
                  The Grand Portal
                </span>
                <p className="text-xs text-[#d1c5b4] mt-1 leading-relaxed">
                  Lattice wood screens carved by master artisans of the Gomti basin.
                </p>
              </div>
            </div>

            {/* Subtle overlapping decorative plaque */}
            <div className="hidden sm:block absolute -top-5 -right-5 bg-[#363433] border border-[#e9c176]/30 p-5 rounded-lg shadow-2xl max-w-xs">
              <span className="font-serif text-lg text-[#e9c176] block font-medium">
                Wajid Ali Shah
              </span>
              <p className="text-xs text-[#d1c5b4] mt-1 leading-relaxed">
                Nawabi royal patronage elevated food from sustenance to poetry.
              </p>
            </div>
          </div>

          {/* Right: Story Narrative & Courtly Etiquette */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[11px] font-bold text-[#e9c176] tracking-[0.3em] uppercase mb-3">
              Our Awadhi Lineage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] text-[#e6e1df] tracking-tight mb-6 font-normal">
              The Living Heritage of the{' '}
              <span className="italic font-normal text-[#e8c178] font-serif">
                Royal Dastarkhwan
              </span>
            </h2>
            <p className="text-base sm:text-[17px] text-[#d1c5b4] font-light mb-6 leading-relaxed">
              In the gilded courts of 18th-century Awadh, the <span className="italic">Dastarkhwan</span> was sacred cloth upon which food of transcendental beauty was laid. It was here that master <span className="italic">khansamas</span> (royal culinarians) competed to produce delicacies so light and fragrant they could be enjoyed by royals of delicate constitution.
            </p>
            <p className="text-sm sm:text-base text-[#d1c5b4] mb-8 leading-relaxed opacity-90">
              At The Mughal’s Dastarkhwan, we preserve the unhurried craft of <span className="italic">Dum Pukht</span>—trapping fragrant vapors beneath dough seals on hand-beaten copper vessels. Our signature <span className="italic">potli masala</span> blends cardamom, mace, rose petals, sandalwood essence, and 160 secret botanicals ground in small batches daily in Hazratganj.
            </p>

            {/* Quote Callout */}
            <blockquote className="bg-[#1d1b1a] border-l-2 border-[#e9c176] p-6 rounded-r-lg mb-8 shadow-sm">
              <p className="font-serif text-lg sm:text-xl text-[#e9c176] italic font-normal leading-relaxed">
                “A feast is not merely served; it is bestowed with honour, silence, and grace.”
              </p>
              <cite className="block text-[11px] font-semibold text-[#9a8f80] tracking-[0.2em] uppercase mt-3 not-italic">
                — Traditional Awadhi Adab & Tehzeeb
              </cite>
            </blockquote>

            {/* Signature Lineage Details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-2">
              <div className="border-t border-[#e9c176]/20 pt-4">
                <span className="font-serif text-2xl sm:text-3xl text-[#e6e1df] block font-medium">
                  70+
                </span>
                <span className="text-xs text-[#9a8f80] uppercase tracking-wider block mt-1">
                  Years of Royal Craft
                </span>
              </div>
              <div className="border-t border-[#e9c176]/20 pt-4">
                <span className="font-serif text-2xl sm:text-3xl text-[#e6e1df] block font-medium">
                  100%
                </span>
                <span className="text-xs text-[#9a8f80] uppercase tracking-wider block mt-1">
                  Certified Awadhi Halal
                </span>
              </div>
              <div className="border-t border-[#e9c176]/20 pt-4">
                <span className="font-serif text-2xl sm:text-3xl text-[#e6e1df] block font-medium">
                  Deg-Dum
                </span>
                <span className="text-xs text-[#9a8f80] uppercase tracking-wider block mt-1">
                  Clay-Sealed Steam
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
