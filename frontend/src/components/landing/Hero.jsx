import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const heroImages = [
  "https://images.unsplash.com/photo-1647296020388-787fdae78e3c", // Elegant Table
  "https://images.pexels.com/photos/3082764/pexels-photo-3082764.jpeg", // Grand Hall
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce", // Toast
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3", // Hallway/Reception
];

const Hero = () => {
  const [api, setApi] = useState(null);

  // Auto-scroll effect
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        <Carousel setApi={setApi} className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent className="h-full ml-0">
            {heroImages.map((img, index) => (
              <CarouselItem key={index} className="pl-0 h-full w-full">
                <div className="relative w-full h-full">
                  <img
                    src={img}
                    alt={`Hero Slide ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-105"
                  />
                  {/* Overlay for readability */}
                  <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Custom Navigation Buttons (hidden on mobile to keep it clean) */}
          <CarouselPrevious className="hidden md:flex left-8 border-white/20 bg-white/10 text-white hover:bg-white/30" />
          <CarouselNext className="hidden md:flex right-8 border-white/20 bg-white/10 text-white hover:bg-white/30" />
        </Carousel>
      </div>

      {/* Content (z-index higher than carousel) */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm tracking-widest uppercase mb-6">
            Premium Event Planning
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-sm">
            Turning Moments <br />
            <span className="italic font-light text-white/90">into Memories</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            We craft bespoke experiences for life's most cherished celebrations. From intimate gatherings to grand galas, we bring your vision to life with elegance and style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-foreground hover:bg-white/90 hover:scale-105 transition-all duration-300">
              View Services
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white text-white hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all duration-300 group">
              Contact Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
