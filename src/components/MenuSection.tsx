import React, { useState, useMemo } from 'react';
import { MenuItem, MealCategory, DietaryType } from '../types';
import { MENU_ITEMS } from '../data/restaurantData';
import {
  UtensilsCrossed,
  Search,
  Plus,
  Check,
  Flame,
  Info,
  BookOpen,
  ArrowUpRight,
  Truck,
  Star
} from 'lucide-react';

interface MenuSectionProps {
  onReserveClick: () => void;
  onOpenDishDetail: (dish: MenuItem) => void;
  onOpenProductLanding: (dish: MenuItem) => void;
  onToggleTastingPlan: (dish: MenuItem) => void;
  tastingPlanIds: string[];
  onOpenTastingPlanModal: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onReserveClick,
  onOpenDishDetail,
  onOpenProductLanding,
  onToggleTastingPlan,
  tastingPlanIds,
  onOpenTastingPlanModal
}) => {
  const [activeCategory, setActiveCategory] = useState<MealCategory>('all');
  const [dietaryFilter, setDietaryFilter] = useState<DietaryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesDietary = dietaryFilter === 'all' || item.dietary === dietaryFilter;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.hindiName && item.hindiName.includes(searchQuery)) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  const highlightDish = MENU_ITEMS[0]; // Galawat Ke Kebab & Sheermal
  const isHighlightInPlan = tastingPlanIds.includes(highlightDish.id);

  return (
    <section className="w-full py-24 bg-[#141312] relative" id="menu">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold text-[#e9c176] tracking-[0.3em] uppercase block mb-2">
              Gastronomic Repertoire
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#e6e1df] tracking-tight font-normal">
              The Royal Menu
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#d1c5b4] max-w-md leading-relaxed opacity-90">
            Every formulation follows court manuscripts documented by Nawabi scribes. Cooked fresh twice daily over aged acacia charcoal and neem logs.
          </p>
        </div>

        {/* Culinary Hero Feature Banner (Galawati & Spread Spotlight) */}
        <div className="w-full bg-[#211f1e] rounded-xl overflow-hidden border border-[#e9c176]/25 shadow-2xl mb-16 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[360px]">
            <img
              alt="Galawati Kebabs, Korma, and Awadhi Dastarkhwan Delicacies"
              src="/assets/aistudio/unnamed__2__2503d562.jpg"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  '/assets/aistudio/Image_1_bd790a0d.jpeg';
              }}
              className="w-full h-full object-cover contrast-[1.05] brightness-[1.02] saturate-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#211f1e] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#211f1e] via-transparent to-transparent lg:hidden" />
            <div className="absolute top-4 left-4 bg-[#c5a059] text-[#141312] text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded shadow-lg tracking-wider uppercase">
              DAWAT-E-KHAAS HIGHLIGHT
            </div>
          </div>

          <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-[#e9c176] tracking-[0.2em] uppercase">
                ORIGINAL LUCKNAWI MAHABAT
              </span>
              <span className="font-serif text-2xl text-[#e9c176] font-medium">
                ₹ {highlightDish.price}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#e6e1df] mb-3 font-normal">
              {highlightDish.name}
            </h3>
            <p className="text-sm text-[#d1c5b4] mb-6 leading-relaxed">
              {highlightDish.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {highlightDish.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#2b2a28] border border-[#e9c176]/20 px-2.5 py-1 rounded text-[10px] font-semibold text-[#e6e1df] tracking-wider uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenProductLanding(highlightDish)}
                className="px-5 py-2.5 bg-[#c5a059] hover:bg-[#e9c176] text-[#141312] text-xs font-bold tracking-wider uppercase rounded-lg transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <Truck className="w-3.5 h-3.5" />
                <span>Order Instant Delivery</span>
              </button>

              <button
                onClick={() => onOpenDishDetail(highlightDish)}
                className="inline-flex items-center gap-1.5 text-[#e9c176] hover:text-[#ffdea5] text-xs font-bold tracking-[0.16em] uppercase transition-colors cursor-pointer px-3 py-2"
              >
                <span>Read Provenance & Notes</span>
                <Info className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onToggleTastingPlan(highlightDish)}
                className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
                  isHighlightInPlan
                    ? 'bg-[#4E6548] text-white'
                    : 'bg-[#2b2a28] hover:bg-[#363433] text-[#e9c176] border border-[#e9c176]/30'
                }`}
              >
                {isHighlightInPlan ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>In Tasting Plan</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Tasting Plan</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#1d1b1a] rounded-xl p-4 sm:p-5 border border-[#e9c176]/20 mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Dishes' },
              { id: 'kebabs', label: 'Kebabs & Sigri' },
              { id: 'biryani_nihari', label: 'Biryani & Nihari' },
              { id: 'curries', label: 'Court Curries' },
              { id: 'breads', label: 'Shahi Breads' },
              { id: 'desserts', label: 'Sweet Endings' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as MealCategory)}
                className={`px-3 py-1.5 rounded-md text-[11px] font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#c5a059] text-[#141312] shadow-sm font-bold'
                    : 'text-[#d1c5b4] hover:text-[#ffdea5] hover:bg-[#2b2a28]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dietary & Search */}
          <div className="flex items-center gap-3">
            {/* Dietary toggle */}
            <div className="flex items-center bg-[#141312] rounded-lg p-1 border border-[#e9c176]/20">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded cursor-pointer ${
                  dietaryFilter === 'all'
                    ? 'bg-[#2b2a28] text-[#e9c176]'
                    : 'text-[#9a8f80] hover:text-[#d1c5b4]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded cursor-pointer ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-[#2b2a28] text-[#e9c176]'
                    : 'text-[#9a8f80] hover:text-[#d1c5b4]'
                }`}
              >
                Non-Veg
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded cursor-pointer ${
                  dietaryFilter === 'veg'
                    ? 'bg-[#4E6548] text-white'
                    : 'text-[#9a8f80] hover:text-[#d1c5b4]'
                }`}
              >
                Veg Khaas
              </button>
            </div>

            {/* Search Input */}
            <div className="relative flex-1 sm:w-48">
              <Search className="w-3.5 h-3.5 text-[#9a8f80] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dish or spice..."
                className="w-full bg-[#141312] border border-[#e9c176]/20 rounded-lg pl-8 pr-3 py-1.5 text-xs text-[#e6e1df] placeholder-[#9a8f80] focus:outline-none focus:border-[#e9c176]"
              />
            </div>
          </div>
        </div>

        {/* Curated Grid of Dishes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((dish) => {
            const inPlan = tastingPlanIds.includes(dish.id);
            return (
              <div
                key={dish.id}
                onClick={() => onOpenProductLanding(dish)}
                className="bg-[#1d1b1a] p-5 sm:p-6 rounded-xl border border-[#e9c176]/15 hover:border-[#e9c176]/60 transition-all duration-300 hover:shadow-2xl hover:bg-[#211f1e] flex flex-col justify-between group cursor-pointer relative"
              >
                <div>
                  {/* Product Image Thumbnail */}
                  <div className="w-full h-44 rounded-lg overflow-hidden mb-4 relative bg-[#0f0e0d]">
                    <img
                      src={dish.image || '/assets/aistudio/unnamed__2__2503d562.jpg'}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          '/assets/aistudio/unnamed__2__2503d562.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1d1b1a] via-transparent to-transparent opacity-60" />
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="bg-[#141312]/85 backdrop-blur-xs text-[#e9c176] border border-[#e9c176]/30 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                        {dish.badge || 'Awadhi Khaas'}
                      </span>
                      <span
                        className={`text-[9px] font-bold px-2 py-0.5 rounded tracking-wider uppercase ${
                          dish.dietary === 'veg'
                            ? 'bg-[#4E6548] text-white'
                            : 'bg-[#7c2d12] text-white'
                        }`}
                      >
                        {dish.dietary === 'veg' ? 'Veg' : 'Non-Veg'}
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 bg-[#141312]/90 backdrop-blur-xs border border-[#e9c176]/20 px-2 py-0.5 rounded-md text-[11px] text-[#e9c176] font-semibold">
                      <Star className="w-3 h-3 fill-[#e9c176]" />
                      <span>{dish.rating || 4.9}</span>
                    </div>
                  </div>

                  {/* Top Bar: Title & Price */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl text-[#e6e1df] group-hover:text-[#ffdea5] transition-colors font-medium">
                        {dish.name}
                      </h4>
                      {dish.hindiName && (
                        <span className="text-[11px] text-[#9a8f80] block font-serif tracking-wide mt-0.5">
                          {dish.hindiName}
                        </span>
                      )}
                    </div>
                    <span className="font-serif text-xl sm:text-2xl text-[#e9c176] font-medium shrink-0">
                      ₹ {dish.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#d1c5b4] mb-4 leading-relaxed opacity-90 line-clamp-2">
                    {dish.description}
                  </p>
                </div>

                <div>
                  {/* Pairing & Method Bar */}
                  <div className="bg-[#0f0e0d]/60 border border-[#e9c176]/10 p-2.5 rounded-lg flex items-center justify-between text-[11px] mb-3">
                    <span className="text-[#9a8f80] truncate mr-2">
                      Pairing: <span className="text-[#d1c5b4]">{dish.pairing}</span>
                    </span>
                    <span className="text-[#e9c176] font-semibold whitespace-nowrap text-[10px]">
                      {dish.badge || dish.heritageMethod}
                    </span>
                  </div>

                  {/* Explicit Order Instant Delivery CTA */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenProductLanding(dish);
                    }}
                    className="w-full mb-2.5 py-2.5 bg-[#c5a059] hover:bg-[#e9c176] text-[#141312] text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-[#c5a059]/20"
                  >
                    <Truck className="w-3.5 h-3.5" />
                    <span>Order Instant Delivery</span>
                  </button>

                  {/* Secondary Actions Bar */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenDishDetail(dish);
                      }}
                      className="text-[11px] font-bold text-[#e9c176] hover:text-[#ffdea5] uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      <span>Notes</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleTastingPlan(dish);
                      }}
                      className={`px-3 py-1.5 rounded text-[11px] font-bold tracking-wider uppercase transition-all flex items-center gap-1 cursor-pointer ${
                        inPlan
                          ? 'bg-[#4E6548] text-white'
                          : 'bg-[#2b2a28] hover:bg-[#363433] text-[#e9c176] border border-[#e9c176]/25'
                      }`}
                    >
                      {inPlan ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>In Plan</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          <span>Add to Feast</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Menu Footer Action: Curated Tasting Journal Modal */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenTastingPlanModal}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#2b2a28] hover:bg-[#363433] border border-[#e9c176]/30 hover:border-[#e9c176] text-[#e9c176] text-xs font-bold tracking-[0.2em] uppercase rounded-lg transition-all shadow-lg cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#e9c176]" />
            <span>Open Curated A-La-Carte Tasting Journal & Feast Planner</span>
          </button>
        </div>
      </div>
    </section>
  );
};
