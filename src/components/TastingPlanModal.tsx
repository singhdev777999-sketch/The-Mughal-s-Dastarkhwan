import React, { useState } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/restaurantData';
import { X, Trash2, Printer, CheckCircle, ArrowRight, Utensils } from 'lucide-react';

interface TastingPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedIds: string[];
  onRemoveItem: (id: string) => void;
  onClearPlan: () => void;
  onProceedToReservation: () => void;
}

export const TastingPlanModal: React.FC<TastingPlanModalProps> = ({
  isOpen,
  onClose,
  selectedIds,
  onRemoveItem,
  onClearPlan,
  onProceedToReservation
}) => {
  const [printSuccess, setPrintSuccess] = useState(false);

  if (!isOpen) return null;

  const selectedDishes = MENU_ITEMS.filter((item) => selectedIds.includes(item.id));
  const totalPrice = selectedDishes.reduce((acc, curr) => acc + curr.price, 0);

  const handlePrint = () => {
    setPrintSuccess(true);
    setTimeout(() => {
      window.print();
      setPrintSuccess(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#1d1b1a] border border-[#e9c176]/40 rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#e9c176]/20 pb-4 mb-4">
          <div>
            <span className="text-[10px] font-bold text-[#e9c176] uppercase tracking-[0.25em] block mb-1">
              Curated A-La-Carte Tasting Journal
            </span>
            <h3 className="font-serif text-2xl text-[#e6e1df] font-medium">
              Your Personal Awadhi Feast Plan
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#9a8f80] hover:text-[#e9c176] p-1 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {selectedDishes.length === 0 ? (
          <div className="py-12 text-center flex flex-col items-center">
            <Utensils className="w-12 h-12 text-[#9a8f80] mb-3 opacity-60" />
            <h4 className="font-serif text-xl text-[#e6e1df] mb-2 font-normal">
              No Dishes Inscribed Yet
            </h4>
            <p className="text-xs text-[#d1c5b4] max-w-xs mb-6 leading-relaxed">
              Explore the Royal Menu and click "+ Add to Feast" on Galawat Kebabs, Dum Biryani, or Shahi Tukda to assemble your curated banquet.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#e9c176] text-[#412d00] text-xs font-bold uppercase tracking-wider rounded"
            >
              Browse The Menu
            </button>
          </div>
        ) : (
          <>
            {/* Scrollable list */}
            <div className="overflow-y-auto flex-1 pr-2 space-y-3 mb-6 scrollbar-thin">
              {selectedDishes.map((dish, idx) => (
                <div
                  key={dish.id}
                  className="bg-[#141312] border border-[#e9c176]/15 rounded-lg p-3.5 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#e9c176] font-bold w-5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-serif text-[#e6e1df] font-medium">
                        {dish.name}
                      </h4>
                      <span className="text-[11px] text-[#9a8f80] block">
                        Pairing: {dish.pairing}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-serif text-base text-[#e9c176] font-medium whitespace-nowrap">
                      ₹ {dish.price}
                    </span>
                    <button
                      onClick={() => onRemoveItem(dish.id)}
                      className="text-[#9a8f80] hover:text-[#ffb4ab] transition-colors p-1"
                      title="Remove dish"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Banquet Summary Bar */}
            <div className="bg-[#141312] border-t border-[#e9c176]/25 p-4 rounded-lg flex items-center justify-between mb-6">
              <div>
                <span className="text-xs text-[#9a8f80] block">
                  Total Courses Selected: <strong className="text-[#e6e1df]">{selectedDishes.length}</strong>
                </span>
                <span className="text-[11px] text-[#e9c176]">
                  * Perfect harmony of Kebabs, Deg Gravies & Shahi Breads
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider block">
                  A-La-Carte Subtotal
                </span>
                <span className="font-serif text-2xl text-[#e9c176] font-medium">
                  ₹ {totalPrice}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handlePrint}
                  className="flex-1 sm:flex-none px-4 py-2.5 bg-[#2b2a28] hover:bg-[#363433] border border-[#e9c176]/30 text-[#e9c176] text-xs font-bold tracking-wider uppercase rounded flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Journal</span>
                </button>
                <button
                  onClick={onClearPlan}
                  className="px-3 py-2.5 text-xs text-[#9a8f80] hover:text-[#ffb4ab] uppercase tracking-wider cursor-pointer"
                >
                  Clear All
                </button>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onProceedToReservation();
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#e9c176] hover:bg-[#ffdea5] text-[#412d00] text-xs font-bold tracking-[0.16em] uppercase rounded flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Reserve Table For This Feast</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
