import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/restaurantData';
import { GalleryPhoto } from '../types';
import { Eye, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const handleNext = () => {
    if (!activePhoto) return;
    const currentIndex = GALLERY_PHOTOS.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % GALLERY_PHOTOS.length;
    setActivePhoto(GALLERY_PHOTOS[nextIndex]);
  };

  const handlePrev = () => {
    if (!activePhoto) return;
    const currentIndex = GALLERY_PHOTOS.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    setActivePhoto(GALLERY_PHOTOS[prevIndex]);
  };

  return (
    <section className="w-full py-24 bg-[#141312] relative" id="gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold text-[#e9c176] tracking-[0.3em] uppercase block mb-2">
            Visual Heritage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#e6e1df] tracking-tight mb-4 font-normal">
            A Tapestry of Awadhi Splendor
          </h2>
          <p className="text-sm text-[#d1c5b4] leading-relaxed opacity-90">
            Immerse your senses in the sensory signatures, handcrafted wood carvings, and authentic charcoal fire pits of Lucknow.
          </p>
        </div>

        {/* Asymmetrical 4-Asset Editorial Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className={`${photo.colSpanDesktop} group relative overflow-hidden rounded-xl bg-[#211f1e] border border-[#e9c176]/20 shadow-lg h-80 sm:h-96 cursor-pointer`}
            >
              <img
                alt={photo.title}
                src={photo.image}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    '/assets/aistudio/Image_1_bd790a0d.jpeg';
                }}
                className="w-full h-full object-cover contrast-[1.05] brightness-[1.02] saturate-[1.08] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/30 to-transparent" />

              {/* View Overlay Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#141312]/80 border border-[#e9c176]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#e9c176]" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#e9c176] tracking-widest uppercase block mb-1">
                  {photo.subtitle}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#e6e1df] font-medium">
                  {photo.title}
                </h3>
                <p className="text-xs text-[#d1c5b4] mt-1 leading-relaxed opacity-90 line-clamp-2">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            {/* Close button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute -top-12 right-0 p-2 text-[#e6e1df] hover:text-[#e9c176] transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-3 bg-[#1d1b1a]/80 hover:bg-[#2b2a28] border border-[#e9c176]/30 text-[#e9c176] rounded-full transition-colors cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-3 bg-[#1d1b1a]/80 hover:bg-[#2b2a28] border border-[#e9c176]/30 text-[#e9c176] rounded-full transition-colors cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Photo & Caption */}
            <div className="bg-[#141312] border border-[#e9c176]/30 rounded-xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col">
              <div className="max-h-[65vh] overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-[65vh] w-auto object-contain"
                />
              </div>
              <div className="p-5 sm:p-6 bg-[#1d1b1a]">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11px] font-bold text-[#e9c176] uppercase tracking-widest">
                    {activePhoto.subtitle}
                  </span>
                  <span className="text-xs text-[#9a8f80]">
                    {GALLERY_PHOTOS.findIndex((p) => p.id === activePhoto.id) + 1} of{' '}
                    {GALLERY_PHOTOS.length}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#e6e1df] mt-1 font-medium">
                  {activePhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#d1c5b4] mt-2 leading-relaxed">
                  {activePhoto.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
