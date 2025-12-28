import React, { useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "../ui/dialog";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

const galleryImages = [
  "https://images.pexels.com/photos/3082764/pexels-photo-3082764.jpeg",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
  "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg",
  "https://images.unsplash.com/photo-1714972383570-44ddc9738355",
  "https://images.pexels.com/photos/35130817/pexels-photo-35130817.jpeg",
  "https://images.unsplash.com/photo-1647296020388-787fdae78e3c"
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [api, setApi] = useState(null);

  const openLightbox = (index) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    api?.scrollPrev();
  };

  const handleNext = (e) => {
    e.stopPropagation();
    api?.scrollNext();
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Portfolio</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Recent Celebrations</h2>
          </div>
          <button className="text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
            View All Projects
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div 
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 cursor-zoom-in ${index === 0 || index === 3 ? "md:col-span-2" : ""}`}
            >
              <AspectRatio ratio={index === 0 || index === 3 ? 16/9 : 4/5}>
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </AspectRatio>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 p-6 text-center">
                  <ZoomIn className="w-10 h-10 text-white mb-2 mx-auto opacity-80" />
                  <p className="text-white font-serif text-2xl italic">Elegance in Detail</p>
                  <p className="text-white/80 text-sm uppercase tracking-widest mt-2">View Event</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Single Dialog containing Carousel for Lightbox */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-[95vw] h-[90vh] p-0 border-none bg-transparent shadow-none flex items-center justify-center focus:outline-none">
             {/* Close button with high contrast */}
             <DialogClose className="absolute right-4 top-4 z-[60] rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors cursor-pointer border border-white/20">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
             </DialogClose>

             {/* 
                Lightbox Carousel 
                We use 'opts={{ startIndex }}' to open at the clicked image
             */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Carousel 
                setApi={setApi}
                opts={{ startIndex: startIndex, loop: true }} 
                className="w-full h-full flex items-center justify-center"
              >
                <CarouselContent className="h-full">
                  {galleryImages.map((src, idx) => (
                    <CarouselItem key={idx} className="h-full flex items-center justify-center pt-4">
                      <img
                        src={src}
                        alt={`Lightbox ${idx + 1}`}
                        className="max-h-[85vh] w-auto max-w-full object-contain rounded-md shadow-2xl"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              
              {/* Custom Navigation Buttons for Lightbox - Z-index 50 to ensure they are on top of image */}
              <button 
                onClick={handlePrev}
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20 transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <button 
                onClick={handleNext}
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20 transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
