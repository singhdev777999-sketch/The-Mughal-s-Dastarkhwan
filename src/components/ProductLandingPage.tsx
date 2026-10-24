import React, { useState, useEffect } from 'react';
import { MenuItem, Review, PairingAddon, DeliveryOrder } from '../types';
import { POPULAR_PAIRINGS, INITIAL_REVIEWS, MENU_ITEMS } from '../data/restaurantData';
import {
  ArrowLeft,
  Star,
  Clock,
  Users,
  Flame,
  ShieldCheck,
  Truck,
  Check,
  Plus,
  Minus,
  Sparkles,
  MapPin,
  Phone,
  User,
  UtensilsCrossed,
  X,
  Share2,
  Heart,
  ChevronRight,
  Package,
  AlertCircle
} from 'lucide-react';

interface ProductLandingPageProps {
  dish: MenuItem;
  onBack: () => void;
  onSelectDish: (dish: MenuItem) => void;
  onToggleTastingPlan: (dish: MenuItem) => void;
  isInTastingPlan: boolean;
}

export const ProductLandingPage: React.FC<ProductLandingPageProps> = ({
  dish,
  onBack,
  onSelectDish,
  onToggleTastingPlan,
  isInTastingPlan
}) => {
  // Order Configuration State
  const [quantity, setQuantity] = useState(1);
  const [spicePreference, setSpicePreference] = useState('Subtle Royal (Traditional Asad-ud-Daula)');
  const [selectedPairingIds, setSelectedPairingIds] = useState<string[]>([
    dish.category === 'kebabs' ? 'saffron-sheermal' : 'burani-raita'
  ]);

  // Delivery Form State
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [selectedArea, setSelectedArea] = useState('Hazratganj (Core Zone • 20-30 min)');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [formError, setFormError] = useState('');

  // Active Live Order Tracker
  const [activeOrder, setActiveOrder] = useState<DeliveryOrder | null>(null);
  const [orderTrackingStep, setOrderTrackingStep] = useState<number>(1);
  const [etaMinutes, setEtaMinutes] = useState<number>(34);

  // Reviews State
  const [reviews, setReviews] = useState<Review[]>(() => {
    return INITIAL_REVIEWS.filter((r) => r.dishId === dish.id || r.dishId === 'galawati-kebab');
  });

  // New Review Form State
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewLocation, setNewReviewLocation] = useState('Hazratganj, Lucknow');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [reviewSubmittedMessage, setReviewSubmittedMessage] = useState(false);

  // Scroll to top when dish changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setQuantity(1);
    setActiveOrder(null);
  }, [dish.id]);

  // Handle live ETA timer simulation
  useEffect(() => {
    if (!activeOrder) return;
    const interval = setInterval(() => {
      setEtaMinutes((prev) => (prev > 5 ? prev - 1 : 5));
    }, 15000);
    return () => clearInterval(interval);
  }, [activeOrder]);

  const togglePairing = (id: string) => {
    setSelectedPairingIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  // Pricing calculations
  const baseItemTotal = dish.price * quantity;
  const pairingsTotal = selectedPairingIds.reduce((sum, id) => {
    const item = POPULAR_PAIRINGS.find((p) => p.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const subtotal = baseItemTotal + pairingsTotal;
  const packagingFee = subtotal > 1000 ? 0 : 40;
  const deliveryFee = subtotal > 850 ? 0 : 50;
  const grandTotal = subtotal + packagingFee + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setFormError('Please enter your name for royal guest registration.');
      return;
    }
    if (!customerPhone.trim() || customerPhone.trim().length < 8) {
      setFormError('Please provide a valid contact number for our delivery rider.');
      return;
    }
    if (!deliveryAddress.trim()) {
      setFormError('Please specify the delivery street address / apartment in Lucknow.');
      return;
    }

    setFormError('');

    const newOrder: DeliveryOrder = {
      id: `LKO-DAST-${Math.floor(10000 + Math.random() * 90000)}`,
      dishId: dish.id,
      dishName: dish.name,
      quantity,
      spiceLevel: spicePreference,
      selectedPairings: selectedPairingIds.map(
        (id) => POPULAR_PAIRINGS.find((p) => p.id === id)?.name || id
      ),
      customerName,
      phone: customerPhone,
      deliveryArea: selectedArea,
      deliveryAddress,
      deliveryInstructions: specialInstructions,
      subtotal,
      packagingFee,
      deliveryFee,
      total: grandTotal,
      estimatedTime: '30-40 Mins Express',
      orderStatus: 'Deg Fired',
      placedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setActiveOrder(newOrder);
    setOrderTrackingStep(1);
    setEtaMinutes(32);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;

    const reviewObj: Review = {
      id: `rev-${Date.now()}`,
      dishId: dish.id,
      author: newReviewAuthor.trim(),
      location: newReviewLocation.trim() || 'Lucknow',
      rating: newReviewRating,
      date: 'Just now',
      comment: newReviewComment.trim(),
      verified: true
    };

    setReviews([reviewObj, ...reviews]);
    setNewReviewAuthor('');
    setNewReviewComment('');
    setReviewSubmittedMessage(true);
    setTimeout(() => setReviewSubmittedMessage(false), 4000);
  };

  const otherDishes = MENU_ITEMS.filter((item) => item.id !== dish.id).slice(0, 3);

  const heroImage = dish.image || '/assets/aistudio/unnamed__2__2503d562.jpg';

  return (
    <div className="w-full min-h-screen bg-[#141312] text-[#e6e1df] pb-24">
      {/* Sticky Top Breadcrumb & Action Header */}
      <div className="sticky top-0 z-40 bg-[#141312]/95 backdrop-blur-md border-b border-[#e9c176]/20 px-6 lg:px-12 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold text-[#e9c176] hover:text-[#ffdea5] uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Royal Dastarkhwan</span>
            <span className="sm:hidden">Back</span>
          </button>
          <span className="text-[#9a8f80] hidden md:inline">/</span>
          <span className="text-xs text-[#d1c5b4] truncate max-w-[200px] sm:max-w-xs font-serif hidden md:inline">
            {dish.name}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onToggleTastingPlan(dish)}
            className={`px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
              isInTastingPlan
                ? 'bg-[#4E6548] text-white'
                : 'bg-[#2b2a28] hover:bg-[#363433] text-[#e9c176] border border-[#e9c176]/30'
            }`}
          >
            {isInTastingPlan ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>In Feast Plan</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Feast</span>
              </>
            )}
          </button>

          <a
            href="#instant-order"
            className="px-4 py-1.5 bg-[#c5a059] hover:bg-[#e9c176] text-[#141312] rounded text-[11px] font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Order Instant Delivery</span>
          </a>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8">
        {/* Hero Product Banner Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#e9c176]/30 bg-[#211f1e] shadow-2xl group">
              <img
                src={heroImage}
                alt={dish.name}
                className="w-full h-[400px] sm:h-[480px] object-cover contrast-[1.05] brightness-[1.02] saturate-[1.08] transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    '/assets/aistudio/Image_1_bd790a0d.jpeg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent opacity-80" />

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-[#c5a059] text-[#141312] text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-md shadow-lg tracking-wider uppercase">
                  {dish.badge || 'Awadhi Khaas'}
                </span>
                <span
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md tracking-wider uppercase w-max ${
                    dish.dietary === 'veg' ? 'bg-[#4E6548] text-white' : 'bg-[#7c2d12] text-white'
                  }`}
                >
                  {dish.dietary === 'veg' ? 'Pure Veg Awadhi' : 'Non-Veg Royal'}
                </span>
              </div>

              {/* Verified Fresh Sign */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#141312]/80 backdrop-blur-md border border-[#e9c176]/30 p-3 rounded-xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#e9c176]" />
                  <span className="font-semibold text-[#e6e1df]">Cooked Fresh Over Live Charcoal</span>
                </div>
                <span className="text-[#e9c176] font-medium">{dish.heritageMethod}</span>
              </div>
            </div>

            {/* Quality & Delivery Assurance Pills */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-[#1d1b1a] p-3 rounded-xl border border-[#e9c176]/15">
                <Clock className="w-4 h-4 text-[#e9c176] mx-auto mb-1" />
                <span className="text-[10px] uppercase text-[#9a8f80] block font-semibold">
                  Express Arrival
                </span>
                <span className="text-xs font-bold text-[#e6e1df]">30-40 Mins</span>
              </div>
              <div className="bg-[#1d1b1a] p-3 rounded-xl border border-[#e9c176]/15">
                <Package className="w-4 h-4 text-[#e9c176] mx-auto mb-1" />
                <span className="text-[10px] uppercase text-[#9a8f80] block font-semibold">
                  Deg Packaging
                </span>
                <span className="text-xs font-bold text-[#e6e1df]">Clay Handi Sealed</span>
              </div>
              <div className="bg-[#1d1b1a] p-3 rounded-xl border border-[#e9c176]/15">
                <ShieldCheck className="w-4 h-4 text-[#e9c176] mx-auto mb-1" />
                <span className="text-[10px] uppercase text-[#9a8f80] block font-semibold">
                  Heritage Certified
                </span>
                <span className="text-xs font-bold text-[#e6e1df]">160 Spices Potli</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Heritage Story & Key Details */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <div className="flex items-center gap-2 text-xs font-bold text-[#e9c176] tracking-[0.25em] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#e9c176]" />
              <span>Imperial Lucknow Formulation</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#e6e1df] font-normal tracking-tight mb-2">
              {dish.name}
            </h1>

            {dish.hindiName && (
              <p className="font-serif text-xl sm:text-2xl text-[#d1c5b4] opacity-80 mb-4">
                {dish.hindiName}
              </p>
            )}

            {/* Price & Rating Bar */}
            <div className="flex flex-wrap items-center gap-6 pb-6 mb-6 border-b border-[#e9c176]/15">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl sm:text-4xl text-[#e9c176] font-medium">
                  ₹ {dish.price}
                </span>
                <span className="text-xs text-[#9a8f80] uppercase tracking-wider">
                  (Inclusive of taxes)
                </span>
              </div>

              <div className="flex items-center gap-2 bg-[#211f1e] px-3.5 py-1.5 rounded-lg border border-[#e9c176]/20">
                <div className="flex text-[#e9c176]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#e9c176]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#e6e1df]">{dish.rating || 4.9}</span>
                <span className="text-xs text-[#9a8f80]">({reviews.length} reviews)</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#d1c5b4] leading-relaxed mb-6 font-light">
              {dish.description}
            </p>

            {/* Key Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 bg-[#1d1b1a] p-4 rounded-xl border border-[#e9c176]/20 mb-6">
              <div>
                <span className="text-[10px] font-bold text-[#9a8f80] uppercase tracking-wider block mb-0.5">
                  Portion Yield
                </span>
                <p className="text-xs font-medium text-[#e6e1df] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#e9c176]" />
                  <span>{dish.serves || '2–3 Persons'}</span>
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#9a8f80] uppercase tracking-wider block mb-0.5">
                  Culinary Method
                </span>
                <p className="text-xs font-medium text-[#e6e1df] flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#e9c176]" />
                  <span>{dish.heritageMethod}</span>
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#9a8f80] uppercase tracking-wider block mb-0.5">
                  Preparation Window
                </span>
                <p className="text-xs font-medium text-[#e6e1df] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#e9c176]" />
                  <span>{dish.prepTime || '20-25 Mins'}</span>
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#9a8f80] uppercase tracking-wider block mb-0.5">
                  Heritage Pairing
                </span>
                <p className="text-xs font-medium text-[#e6e1df] truncate flex items-center gap-1.5">
                  <UtensilsCrossed className="w-3.5 h-3.5 text-[#e9c176]" />
                  <span>{dish.pairing}</span>
                </p>
              </div>
            </div>

            {/* Court Heritage Story Narrative */}
            {dish.story && (
              <div className="bg-[#211f1e] p-5 rounded-xl border-l-2 border-[#e9c176] mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e9c176] block mb-1">
                  Court Manuscript & Provenance
                </span>
                <p className="font-serif italic text-xs sm:text-sm text-[#d1c5b4] leading-relaxed">
                  "{dish.story}"
                </p>
              </div>
            )}

            {/* Secret Potli Masala Ingredients list */}
            {dish.ingredients && dish.ingredients.length > 0 && (
              <div className="space-y-2 mb-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e9c176] block">
                  Noble Botanicals & Rare Components
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {dish.ingredients.map((ing, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-[#d1c5b4] bg-[#1d1b1a]/70 px-3 py-1.5 rounded-lg border border-[#e9c176]/10"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176]" />
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Jump CTA */}
            <div className="flex items-center gap-4">
              <a
                href="#instant-order"
                className="flex-1 py-3 px-6 bg-[#c5a059] hover:bg-[#e9c176] text-[#141312] font-bold text-xs uppercase tracking-[0.18em] rounded-lg text-center transition-all shadow-xl hover:shadow-[#c5a059]/20"
              >
                Proceed to Instant Delivery Order →
              </a>
              <a
                href="#patron-reviews"
                className="py-3 px-5 bg-[#211f1e] hover:bg-[#2b2a28] border border-[#e9c176]/30 text-[#e9c176] font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
              >
                Read Reviews ({reviews.length})
              </a>
            </div>
          </div>
        </div>

        {/* Instant Delivery Order Section */}
        <section
          id="instant-order"
          className="scroll-mt-24 bg-[#1d1b1a] rounded-2xl border border-[#e9c176]/30 p-6 sm:p-10 mb-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#e9c176]/20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[10px] font-bold uppercase tracking-widest text-[#e9c176] mb-2">
                <Truck className="w-3 h-3 text-[#e9c176]" />
                <span>Express Delivery Across Lucknow</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#e6e1df] font-normal">
                Order {dish.name} for Instant Delivery
              </h2>
            </div>
            <p className="text-xs text-[#d1c5b4] max-w-sm">
              Dispatched directly from Hazratganj royal bhatti in thermal tamper-proof clay/brass
              containers with hot charcoal steam retention.
            </p>
          </div>

          {/* Active Order Tracking Screen (If user already placed order) */}
          {activeOrder && (
            <div className="mb-10 bg-[#211f1e] border-2 border-[#e9c176] rounded-xl p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e9c176]/20 mb-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#4E6548] bg-[#4E6548]/20 px-2.5 py-1 rounded border border-[#4E6548]/30 inline-block mb-1">
                    ORDER CONFIRMED & IN TRANSIT
                  </span>
                  <h3 className="font-serif text-2xl text-[#e6e1df]">
                    Order Tracking #{activeOrder.id}
                  </h3>
                  <p className="text-xs text-[#9a8f80]">
                    Guest: <span className="text-[#e6e1df] font-medium">{activeOrder.customerName}</span> • Placed at {activeOrder.placedAt}
                  </p>
                </div>

                <div className="bg-[#141312] px-5 py-3 rounded-xl border border-[#e9c176]/30 text-right">
                  <span className="text-[10px] uppercase font-bold text-[#e9c176] block tracking-wider">
                    Estimated Arrival in
                  </span>
                  <span className="font-serif text-3xl text-[#e9c176] font-semibold">
                    {etaMinutes} Mins
                  </span>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {[
                  {
                    step: 1,
                    title: '1. Order Accepted',
                    desc: 'Chef reviewed potli spices'
                  },
                  {
                    step: 2,
                    title: '2. Deg Fired & Simmering',
                    desc: 'Acacia coal embers glowing'
                  },
                  {
                    step: 3,
                    title: '3. Clay Deg Sealed',
                    desc: 'Tamper-proof dough locked'
                  },
                  {
                    step: 4,
                    title: '4. Out with Courier',
                    desc: 'Riding from Hazratganj bhatti'
                  }
                ].map((item) => {
                  const isDone = orderTrackingStep >= item.step;
                  const isCurrent = orderTrackingStep === item.step;
                  return (
                    <div
                      key={item.step}
                      className={`p-3.5 rounded-xl border transition-all ${
                        isDone
                          ? 'bg-[#141312] border-[#e9c176] text-[#e6e1df]'
                          : 'bg-[#141312]/40 border-[#e9c176]/10 text-[#9a8f80]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-[#e9c176]">{item.title}</span>
                        {isDone && <Check className="w-3.5 h-3.5 text-[#e9c176]" />}
                      </div>
                      <span className="text-[11px] block opacity-80">{item.desc}</span>
                    </div>
                  );
                })}
              </div>

              {/* Courier & Delivery Info */}
              <div className="bg-[#141312] p-4 rounded-xl border border-[#e9c176]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c5a059] text-[#141312] font-bold flex items-center justify-center text-sm shadow">
                    RA
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#e6e1df] block">
                      Rizwan Ahmad (Royal Courier Partner)
                    </span>
                    <span className="text-[11px] text-[#9a8f80]">
                      Hero Splendor • DL-32-AW-1982 • ⭐ 4.98
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      alert('Connecting with Royal Delivery Concierge: +91 522 261 4455')
                    }
                    className="px-3.5 py-1.5 bg-[#2b2a28] hover:bg-[#363433] text-[#e9c176] text-xs font-bold uppercase rounded border border-[#e9c176]/30 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Courier</span>
                  </button>
                  <button
                    onClick={() =>
                      setOrderTrackingStep((prev) => (prev < 4 ? prev + 1 : 4))
                    }
                    className="px-3.5 py-1.5 bg-[#c5a059] text-[#141312] text-xs font-bold uppercase rounded hover:bg-[#e9c176] transition-colors cursor-pointer"
                  >
                    Simulate Live Progress
                  </button>
                </div>
              </div>

              {/* Order Summary Recap */}
              <div className="bg-[#141312]/60 p-4 rounded-xl text-xs space-y-1.5 border border-[#e9c176]/10">
                <div className="flex justify-between text-[#d1c5b4]">
                  <span>
                    Item: {dish.name} (Qty: {activeOrder.quantity})
                  </span>
                  <span>₹ {dish.price * activeOrder.quantity}</span>
                </div>
                {activeOrder.selectedPairings.length > 0 && (
                  <div className="flex justify-between text-[#d1c5b4]">
                    <span>Pairings: {activeOrder.selectedPairings.join(', ')}</span>
                    <span>₹ {pairingsTotal}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#d1c5b4]">
                  <span>Delivery Address</span>
                  <span className="text-right max-w-xs truncate">
                    {activeOrder.deliveryArea}, {activeOrder.deliveryAddress}
                  </span>
                </div>
                <div className="flex justify-between text-[#e9c176] font-bold pt-2 border-t border-[#e9c176]/15 text-sm">
                  <span>Grand Total Paid (Cash/UPI upon Delivery)</span>
                  <span>₹ {activeOrder.total}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActiveOrder(null)}
                  className="text-xs text-[#9a8f80] hover:text-[#e9c176] underline cursor-pointer"
                >
                  Configure a new instant order
                </button>
              </div>
            </div>
          )}

          {/* Interactive Order Form */}
          {!activeOrder && (
            <form onSubmit={handlePlaceOrder} className="space-y-8">
              {formError && (
                <div className="p-4 bg-[#7c2d12]/20 border border-[#ffb4ab]/40 rounded-xl flex items-center gap-3 text-xs text-[#ffb4ab]">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Step: Dish Customization & Pairings */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Quantity Stepper */}
                  <div className="bg-[#141312] p-5 rounded-xl border border-[#e9c176]/20">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#e9c176] block mb-3">
                      1. Select Portion Quantity
                    </span>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-serif text-lg text-[#e6e1df] block">
                          {dish.name}
                        </span>
                        <span className="text-xs text-[#9a8f80]">
                          Yields {dish.serves || '2–3 persons'} per portion
                        </span>
                      </div>

                      <div className="flex items-center gap-3 bg-[#211f1e] px-3 py-1.5 rounded-lg border border-[#e9c176]/30">
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                          className="w-7 h-7 rounded bg-[#2b2a28] hover:bg-[#363433] text-[#e9c176] flex items-center justify-center font-bold cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-serif text-lg font-bold text-[#e6e1df] w-6 text-center">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => q + 1)}
                          className="w-7 h-7 rounded bg-[#2b2a28] hover:bg-[#363433] text-[#e9c176] flex items-center justify-center font-bold cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Spice Tuning */}
                  <div className="bg-[#141312] p-5 rounded-xl border border-[#e9c176]/20">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#e9c176] block mb-3">
                      2. Awadhi Spice Temperament
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        {
                          id: 'Subtle Royal (Traditional Asad-ud-Daula)',
                          label: 'Mild Royal',
                          sub: 'Authentic 160 botanicals'
                        },
                        {
                          id: 'Standard Nawabi Zest',
                          label: 'Medium Shahi',
                          sub: 'Balanced pepper & mace'
                        },
                        {
                          id: 'Courtyard Robust Sigri',
                          label: 'Zesty Courtier',
                          sub: 'Extra dhoongar charcoal'
                        }
                      ].map((spice) => (
                        <label
                          key={spice.id}
                          className={`p-3 rounded-lg border cursor-pointer transition-all flex flex-col justify-between ${
                            spicePreference === spice.id
                              ? 'bg-[#2b2a28] border-[#e9c176] shadow-sm'
                              : 'bg-[#1d1b1a] border-[#e9c176]/15 hover:border-[#e9c176]/30'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-[#e6e1df]">{spice.label}</span>
                            <input
                              type="radio"
                              name="spice"
                              checked={spicePreference === spice.id}
                              onChange={() => setSpicePreference(spice.id)}
                              className="accent-[#c5a059]"
                            />
                          </div>
                          <span className="text-[10px] text-[#9a8f80]">{spice.sub}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Heritage Pairings Add-ons */}
                  <div className="bg-[#141312] p-5 rounded-xl border border-[#e9c176]/20">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#e9c176]">
                        3. Royal Pairings & Artisanal Add-ons
                      </span>
                      <span className="text-[10px] text-[#9a8f80]">Recommended by Chef</span>
                    </div>

                    <div className="space-y-2.5">
                      {POPULAR_PAIRINGS.map((pairing) => {
                        const isSelected = selectedPairingIds.includes(pairing.id);
                        return (
                          <div
                            key={pairing.id}
                            onClick={() => togglePairing(pairing.id)}
                            className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#211f1e] border-[#e9c176]'
                                : 'bg-[#1d1b1a] border-[#e9c176]/15 hover:border-[#e9c176]/30'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                                  isSelected
                                    ? 'bg-[#c5a059] border-[#c5a059] text-[#141312]'
                                    : 'border-[#9a8f80]'
                                }`}
                              >
                                {isSelected && <Check className="w-3 h-3 font-bold" />}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-bold text-[#e6e1df]">
                                    {pairing.name}
                                  </span>
                                  {pairing.hindiName && (
                                    <span className="text-[10px] text-[#9a8f80] font-serif">
                                      ({pairing.hindiName})
                                    </span>
                                  )}
                                </div>
                                <p className="text-[10px] text-[#9a8f80] max-w-sm">
                                  {pairing.description}
                                </p>
                              </div>
                            </div>
                            <span className="font-serif text-xs font-bold text-[#e9c176] shrink-0 ml-2">
                              +₹ {pairing.price}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Step: Delivery Destination & Bill Summary */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Delivery Location In Lucknow */}
                  <div className="bg-[#141312] p-5 rounded-xl border border-[#e9c176]/20 space-y-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#e9c176] block">
                      4. Delivery Address in Lucknow
                    </span>

                    {/* Guest Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-semibold text-[#9a8f80] uppercase tracking-wider block mb-1">
                          Guest Name *
                        </label>
                        <div className="relative">
                          <User className="w-3.5 h-3.5 text-[#9a8f80] absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Nawabzada Tariq"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="w-full bg-[#1d1b1a] border border-[#e9c176]/20 rounded-lg pl-8 pr-3 py-2 text-xs text-[#e6e1df] placeholder-[#9a8f80] focus:outline-none focus:border-[#e9c176]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-semibold text-[#9a8f80] uppercase tracking-wider block mb-1">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-3.5 h-3.5 text-[#9a8f80] absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 98390 XXXXX"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            className="w-full bg-[#1d1b1a] border border-[#e9c176]/20 rounded-lg pl-8 pr-3 py-2 text-xs text-[#e6e1df] placeholder-[#9a8f80] focus:outline-none focus:border-[#e9c176]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Lucknow Zone Selector */}
                    <div>
                      <label className="text-[10px] font-semibold text-[#9a8f80] uppercase tracking-wider block mb-1">
                        Lucknow Locality / Zone *
                      </label>
                      <div className="relative">
                        <MapPin className="w-3.5 h-3.5 text-[#e9c176] absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          value={selectedArea}
                          onChange={(e) => setSelectedArea(e.target.value)}
                          className="w-full bg-[#1d1b1a] border border-[#e9c176]/20 rounded-lg pl-8 pr-3 py-2 text-xs text-[#e6e1df] focus:outline-none focus:border-[#e9c176]"
                        >
                          <option value="Hazratganj (Core Zone • 20-30 min)">
                            Hazratganj & Lalbagh (20-30 mins express)
                          </option>
                          <option value="Gomti Nagar & Vibhuti Khand (30-40 min)">
                            Gomti Nagar & Vibhuti Khand (30-40 mins)
                          </option>
                          <option value="Aliganj & Kapoorthala (30-40 min)">
                            Aliganj & Kapoorthala (30-40 mins)
                          </option>
                          <option value="Chowk & Old Lucknow (25-35 min)">
                            Chowk & Akbari Gate Heritage Zone (25-35 mins)
                          </option>
                          <option value="Indira Nagar & Bhootnath (35-45 min)">
                            Indira Nagar & Bhootnath (35-45 mins)
                          </option>
                          <option value="Mahanagar & Nishatganj (25-35 min)">
                            Mahanagar & Nishatganj (25-35 mins)
                          </option>
                          <option value="Aminabad & Kaiserbagh (25-35 min)">
                            Aminabad & Kaiserbagh (25-35 mins)
                          </option>
                          <option value="Lucknow Cantt & Raj Bhavan (20-30 min)">
                            Lucknow Cantt & Raj Bhavan (20-30 mins)
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Street Address */}
                    <div>
                      <label className="text-[10px] font-semibold text-[#9a8f80] uppercase tracking-wider block mb-1">
                        House / Flat, Apartment Name & Landmark *
                      </label>
                      <textarea
                        rows={2}
                        required
                        placeholder="e.g. 14/B, Nawabi Kothi, Near Tulsi Theatre Crossing..."
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="w-full bg-[#1d1b1a] border border-[#e9c176]/20 rounded-lg p-2.5 text-xs text-[#e6e1df] placeholder-[#9a8f80] focus:outline-none focus:border-[#e9c176]"
                      />
                    </div>

                    {/* Special Instructions */}
                    <div>
                      <label className="text-[10px] font-semibold text-[#9a8f80] uppercase tracking-wider block mb-1">
                        Kitchen / Rider Notes (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Keep extra green chutney, Ring gate bell twice"
                        value={specialInstructions}
                        onChange={(e) => setSpecialInstructions(e.target.value)}
                        className="w-full bg-[#1d1b1a] border border-[#e9c176]/20 rounded-lg px-3 py-1.5 text-xs text-[#e6e1df] placeholder-[#9a8f80] focus:outline-none focus:border-[#e9c176]"
                      />
                    </div>
                  </div>

                  {/* Live Cost Breakdown */}
                  <div className="bg-[#211f1e] p-5 rounded-xl border border-[#e9c176]/30 shadow-lg space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#e9c176] block mb-1">
                      5. Instant Order Summary
                    </span>

                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between text-[#d1c5b4]">
                        <span>
                          {dish.name} (Qty {quantity})
                        </span>
                        <span>₹ {baseItemTotal}</span>
                      </div>

                      {pairingsTotal > 0 && (
                        <div className="flex justify-between text-[#d1c5b4]">
                          <span>Artisanal Pairings ({selectedPairingIds.length})</span>
                          <span>₹ {pairingsTotal}</span>
                        </div>
                      )}

                      <div className="flex justify-between text-[#d1c5b4]">
                        <span>Clay Deg Thermal Tamper Packaging</span>
                        <span>
                          {packagingFee === 0 ? (
                            <span className="text-[#4E6548] font-bold">FREE (Feast Deal)</span>
                          ) : (
                            `₹ ${packagingFee}`
                          )}
                        </span>
                      </div>

                      <div className="flex justify-between text-[#d1c5b4]">
                        <span>Express Instant Delivery (Lucknow)</span>
                        <span>
                          {deliveryFee === 0 ? (
                            <span className="text-[#4E6548] font-bold">FREE (Above ₹850)</span>
                          ) : (
                            `₹ ${deliveryFee}`
                          )}
                        </span>
                      </div>

                      <div className="pt-3 border-t border-[#e9c176]/20 flex items-baseline justify-between">
                        <div>
                          <span className="font-serif text-lg text-[#e6e1df] block font-medium">
                            Grand Total
                          </span>
                          <span className="text-[10px] text-[#9a8f80]">
                            Payment: Cash / UPI / Card on Delivery
                          </span>
                        </div>
                        <span className="font-serif text-2xl text-[#e9c176] font-bold">
                          ₹ {grandTotal}
                        </span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 py-3.5 bg-[#c5a059] hover:bg-[#e9c176] text-[#141312] font-bold text-xs uppercase tracking-[0.2em] rounded-lg transition-all shadow-xl hover:shadow-[#c5a059]/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Truck className="w-4 h-4" />
                      <span>Confirm Instant Delivery (₹ {grandTotal})</span>
                    </button>
                    <p className="text-[10px] text-center text-[#9a8f80]">
                      ⚡ Dispatched immediately upon confirmation • Est. 30-40 min
                    </p>
                  </div>
                </div>
              </div>
            </form>
          )}
        </section>

        {/* Customer Reviews & Ratings Section */}
        <section id="patron-reviews" className="scroll-mt-24 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#e9c176]/20">
            <div>
              <span className="text-[11px] font-bold text-[#e9c176] tracking-[0.3em] uppercase block mb-1">
                Voice of Lucknow Connoisseurs
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#e6e1df] font-normal">
                Patron Reviews & Accolades
              </h2>
            </div>

            <div className="flex items-center gap-4 bg-[#1d1b1a] px-5 py-3 rounded-xl border border-[#e9c176]/20">
              <div className="text-right">
                <span className="font-serif text-3xl text-[#e9c176] font-bold block leading-none">
                  {dish.rating || 4.9}
                </span>
                <span className="text-[10px] uppercase text-[#9a8f80] tracking-wider">
                  Out of 5.0
                </span>
              </div>
              <div className="h-8 w-px bg-[#e9c176]/20" />
              <div>
                <div className="flex text-[#e9c176] mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#e9c176]" />
                  ))}
                </div>
                <span className="text-xs text-[#d1c5b4] font-medium">
                  {reviews.length} Verified Lucknow Patrons
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Interactive "Write a Review" form */}
            <div className="lg:col-span-5 bg-[#1d1b1a] p-6 sm:p-7 rounded-2xl border border-[#e9c176]/20 h-fit">
              <h3 className="font-serif text-xl text-[#e6e1df] mb-1">
                Share Your Royal Dining Experience
              </h3>
              <p className="text-xs text-[#9a8f80] mb-6">
                Have you savored {dish.name}? Share your impressions with fellow epicures.
              </p>

              {reviewSubmittedMessage && (
                <div className="p-3 bg-[#4E6548]/30 border border-[#4E6548] rounded-lg text-xs text-[#e6e1df] mb-4 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#e9c176]" />
                  <span>Shukriya! Your royal review has been posted.</span>
                </div>
              )}

              <form onSubmit={handleAddReview} className="space-y-4">
                {/* Rating Stars Picker */}
                <div>
                  <label className="text-[10px] font-bold text-[#9a8f80] uppercase tracking-wider block mb-2">
                    Your Rating *
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReviewRating(star)}
                        className="p-1 hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newReviewRating
                              ? 'text-[#e9c176] fill-[#e9c176]'
                              : 'text-[#9a8f80]'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-semibold text-[#e9c176] ml-2">
                      {newReviewRating} / 5 Stars
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-[#9a8f80] uppercase tracking-wider block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Farhan Mirza"
                    value={newReviewAuthor}
                    onChange={(e) => setNewReviewAuthor(e.target.value)}
                    className="w-full bg-[#141312] border border-[#e9c176]/20 rounded-lg px-3 py-2 text-xs text-[#e6e1df] placeholder-[#9a8f80] focus:outline-none focus:border-[#e9c176]"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-[#9a8f80] uppercase tracking-wider block mb-1">
                    Lucknow Locality / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Chowk, Lucknow"
                    value={newReviewLocation}
                    onChange={(e) => setNewReviewLocation(e.target.value)}
                    className="w-full bg-[#141312] border border-[#e9c176]/20 rounded-lg px-3 py-2 text-xs text-[#e6e1df] placeholder-[#9a8f80] focus:outline-none focus:border-[#e9c176]"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-[#9a8f80] uppercase tracking-wider block mb-1">
                    Your Thoughts & Tasting Notes *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe the tenderness, aromatic sandalwood perfume, or delivery packaging..."
                    value={newReviewComment}
                    onChange={(e) => setNewReviewComment(e.target.value)}
                    className="w-full bg-[#141312] border border-[#e9c176]/20 rounded-lg p-3 text-xs text-[#e6e1df] placeholder-[#9a8f80] focus:outline-none focus:border-[#e9c176]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#2b2a28] hover:bg-[#363433] text-[#e9c176] border border-[#e9c176]/40 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-md"
                >
                  Post Verified Review
                </button>
              </form>
            </div>

            {/* Right Column: Existing Reviews List */}
            <div className="lg:col-span-7 space-y-4">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-[#1d1b1a] p-5 sm:p-6 rounded-xl border border-[#e9c176]/15 hover:border-[#e9c176]/35 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-base text-[#e6e1df] font-medium">
                          {rev.author}
                        </span>
                        {rev.verified && (
                          <span className="text-[10px] bg-[#4E6548]/30 text-[#e6e1df] px-2 py-0.5 rounded border border-[#4E6548]/40 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-[#e9c176]" />
                            <span>Verified Patron</span>
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#9a8f80] block mt-0.5">{rev.location}</span>
                    </div>

                    <div className="text-right">
                      <div className="flex text-[#e9c176] mb-0.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#e9c176]" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#9a8f80]">{rev.date}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#d1c5b4] leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Other Awadhi Dishes Footer */}
        <section className="pt-12 border-t border-[#e9c176]/20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] font-bold text-[#e9c176] tracking-[0.25em] uppercase block mb-1">
                Also From The Royal Kitchens
              </span>
              <h3 className="font-serif text-2xl text-[#e6e1df]">Other Awadhi Masterpieces</h3>
            </div>
            <button
              onClick={onBack}
              className="text-xs font-bold text-[#e9c176] hover:text-[#ffdea5] uppercase tracking-wider flex items-center gap-1 cursor-pointer"
            >
              <span>View Full Menu</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherDishes.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectDish(item)}
                className="bg-[#1d1b1a] rounded-xl overflow-hidden border border-[#e9c176]/15 hover:border-[#e9c176]/50 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="h-44 relative overflow-hidden">
                  <img
                    src={item.image || '/assets/aistudio/unnamed__2__2503d562.jpg'}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d1b1a] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#c5a059] text-[#141312] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    ₹ {item.price}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-lg text-[#e6e1df] group-hover:text-[#ffdea5] transition-colors mb-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#9a8f80] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#e9c176]/10 flex items-center justify-between text-xs font-bold text-[#e9c176]">
                    <span>View Product & Order</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
