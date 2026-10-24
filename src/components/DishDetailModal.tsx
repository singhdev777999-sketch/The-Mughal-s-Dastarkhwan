import React from 'react';
import { MenuItem } from '../types';
import { X, Flame, Sparkles, Plus, Check, Utensils } from 'lucide-react';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onToggleTastingPlan: (dish: MenuItem) => void;
  isInPlan: boolean;
  onReserveClick: () => void;
  onOrderInstantDelivery?: (dish: MenuItem) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onToggleTastingPlan,
  isInPlan,
  onReserveClick,
  onOrderInstantDelivery
}) => {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#1d1b1a] border border-[#e9c176]/35 rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#9a8f80] hover:text-[#e9c176] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Eyebrow */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold text-[#e9c176] uppercase tracking-[0.25em]">
            Gastronomic Dossier
          </span>
          <span className="text-[#9a8f80] text-xs">•</span>
          <span className="text-[10px] font-bold text-[#d1c5b4] uppercase tracking-wider">
            {dish.heritageMethod}
          </span>
        </div>

        {/* Title & Price */}
        <div className="flex items-baseline justify-between gap-4 mb-3">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#e6e1df] font-medium">
              {dish.name}
            </h3>
            {dish.hindiName && (
              <span className="text-xs text-[#9a8f80] font-serif block mt-0.5">
                {dish.hindiName}
              </span>
            )}
          </div>
          <span className="font-serif text-2xl text-[#e9c176] font-medium shrink-0">
            ₹ {dish.price}
          </span>
        </div>

        {/* Story & Lore */}
        <div className="bg-[#141312] p-4 rounded-lg border border-[#e9c176]/15 mb-4">
          <span className="text-[10px] font-bold text-[#e9c176] uppercase tracking-wider block mb-1">
            Historical Provenance
          </span>
          <p className="text-xs text-[#d1c5b4] leading-relaxed italic">
            "{dish.story || dish.description}"
          </p>
        </div>

        {/* Culinary Profile */}
        <div className="space-y-2.5 text-xs text-[#d1c5b4] mb-6">
          <div className="flex items-center justify-between border-b border-[#2b2a28] pb-2">
            <span className="text-[#9a8f80]">Recommended Royal Pairing:</span>
            <span className="font-medium text-[#e6e1df]">{dish.pairing}</span>
          </div>

          <div className="flex items-center justify-between border-b border-[#2b2a28] pb-2">
            <span className="text-[#9a8f80]">Spice Heat Balance:</span>
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <Flame
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < dish.spiceLevel ? 'text-[#e9c176]' : 'text-[#363433]'
                  }`}
                />
              ))}
              <span className="text-[11px] text-[#e6e1df] ml-1">
                {dish.spiceLevel === 1 ? 'Delicate' : dish.spiceLevel === 2 ? 'Aromatic Warmth' : 'Robust Awadhi Ember'}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-[#2b2a28] pb-2">
            <span className="text-[#9a8f80]">Preparation Vessel:</span>
            <span className="font-medium text-[#e6e1df]">Hand-beaten Kalai Copper & Brass</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-2">
          {onOrderInstantDelivery && (
            <button
              onClick={() => {
                onClose();
                onOrderInstantDelivery(dish);
              }}
              className="w-full py-3 px-4 bg-[#c5a059] hover:bg-[#e9c176] text-[#141312] text-xs font-bold tracking-[0.16em] uppercase rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Open Product Page & Order Instant Delivery</span>
            </button>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            <button
              onClick={() => onToggleTastingPlan(dish)}
              className={`w-full sm:w-auto flex-1 py-2.5 px-4 rounded text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isInPlan
                  ? 'bg-[#4E6548] text-white'
                  : 'bg-[#2b2a28] hover:bg-[#363433] text-[#e9c176] border border-[#e9c176]/30'
              }`}
            >
              {isInPlan ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>In Tasting Plan</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Tasting Feast</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                onClose();
                onReserveClick();
              }}
              className="w-full sm:w-auto py-2.5 px-5 bg-[#211f1e] hover:bg-[#2b2a28] border border-[#e9c176]/40 text-[#e9c176] text-xs font-bold tracking-wider uppercase rounded transition-colors cursor-pointer"
            >
              Reserve Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
