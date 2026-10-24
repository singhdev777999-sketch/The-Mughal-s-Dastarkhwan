/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { MenuSection } from './components/MenuSection';
import { AmbienceSection } from './components/AmbienceSection';
import { GallerySection } from './components/GallerySection';
import { PrivateDiningSection } from './components/PrivateDiningSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DishDetailModal } from './components/DishDetailModal';
import { TastingPlanModal } from './components/TastingPlanModal';
import { ProductLandingPage } from './components/ProductLandingPage';
import { MenuItem, ReservationData } from './types';

export default function App() {
  const [activeProductLandingDish, setActiveProductLandingDish] = useState<MenuItem | null>(null);
  const [selectedDishDetail, setSelectedDishDetail] = useState<MenuItem | null>(null);
  const [tastingPlanIds, setTastingPlanIds] = useState<string[]>([
    'galawati-kebab',
    'dum-biryani'
  ]);
  const [isTastingModalOpen, setIsTastingModalOpen] = useState(false);
  const [preselectedChamber, setPreselectedChamber] = useState<string>(
    'Heritage Arch Hall (Air-conditioned)'
  );

  const handleReserveClick = (chamber?: string) => {
    setActiveProductLandingDish(null);
    if (chamber) {
      setPreselectedChamber(chamber);
    }
    setTimeout(() => {
      const resElement = document.getElementById('reservation');
      if (resElement) {
        resElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleExploreMenu = () => {
    setActiveProductLandingDish(null);
    setTimeout(() => {
      const menuElement = document.getElementById('menu');
      if (menuElement) {
        menuElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleToggleTastingPlan = (dish: MenuItem) => {
    setTastingPlanIds((prev) =>
      prev.includes(dish.id) ? prev.filter((id) => id !== dish.id) : [...prev, dish.id]
    );
  };

  const handleRemoveTastingItem = (id: string) => {
    setTastingPlanIds((prev) => prev.filter((item) => item !== id));
  };

  const handleClearTastingPlan = () => {
    setTastingPlanIds([]);
  };

  return (
    <div className="min-h-screen bg-[#141312] text-[#e6e1df] font-sans antialiased selection:bg-[#c5a059] selection:text-[#141312]">
      {/* Top Fixed Header */}
      <Header
        onReserveClick={() => handleReserveClick()}
        onOpenTastingPlan={() => setIsTastingModalOpen(true)}
        tastingPlanCount={tastingPlanIds.length}
        onHomeClick={() => setActiveProductLandingDish(null)}
      />

      {/* Main Content Area or Product Landing Page */}
      {activeProductLandingDish ? (
        <div className="pt-20">
          <ProductLandingPage
            dish={activeProductLandingDish}
            onBack={() => {
              setActiveProductLandingDish(null);
              setTimeout(() => {
                const menuElement = document.getElementById('menu');
                if (menuElement) {
                  menuElement.scrollIntoView({ behavior: 'smooth' });
                }
              }, 50);
            }}
            onSelectDish={(nextDish) => setActiveProductLandingDish(nextDish)}
            onToggleTastingPlan={handleToggleTastingPlan}
            isInTastingPlan={tastingPlanIds.includes(activeProductLandingDish.id)}
          />
        </div>
      ) : (
        <main className="w-full pt-20 bg-[#141312]">
          {/* 1. Cinematic Hero Experience */}
          <Hero
            onReserveClick={() => handleReserveClick()}
            onExploreMenuClick={handleExploreMenu}
          />

          {/* 2. Our Story — The Soul of Lucknow & Awadhi Lineage */}
          <StorySection />

          {/* 3. The Art of Dining — The Royal Menu Showcase */}
          <MenuSection
            onReserveClick={() => handleReserveClick()}
            onOpenDishDetail={(dish) => setSelectedDishDetail(dish)}
            onOpenProductLanding={(dish) => setActiveProductLandingDish(dish)}
            onToggleTastingPlan={handleToggleTastingPlan}
            tastingPlanIds={tastingPlanIds}
            onOpenTastingPlanModal={() => setIsTastingModalOpen(true)}
          />

          {/* 4. Live Sigri & Courtyard Ambience — The Sensory Theatre */}
          <AmbienceSection
            onReserveCourtyardClick={() =>
              handleReserveClick('Courtyard Veranda (Near Live Sigri)')
            }
          />

          {/* 5. Curated Visual Archive & Masonry Gallery */}
          <GallerySection />

          {/* 6. Private Dining & Bespoke Banqueting */}
          <PrivateDiningSection onReserveClick={() => handleReserveClick()} />

          {/* 7. Reservation Suite — Secure Your Royal Dastarkhwan */}
          <ReservationSection preselectedChamber={preselectedChamber} />

          {/* 8. Location, Heritage Quarters & Visitor Concierge */}
          <ContactSection />
        </main>
      )}

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <DishDetailModal
        dish={selectedDishDetail}
        onClose={() => setSelectedDishDetail(null)}
        onToggleTastingPlan={handleToggleTastingPlan}
        isInPlan={selectedDishDetail ? tastingPlanIds.includes(selectedDishDetail.id) : false}
        onReserveClick={() => handleReserveClick()}
        onOrderInstantDelivery={(dish) => setActiveProductLandingDish(dish)}
      />

      <TastingPlanModal
        isOpen={isTastingModalOpen}
        onClose={() => setIsTastingModalOpen(false)}
        selectedIds={tastingPlanIds}
        onRemoveItem={handleRemoveTastingItem}
        onClearPlan={handleClearTastingPlan}
        onProceedToReservation={() => handleReserveClick()}
      />
    </div>
  );
}
