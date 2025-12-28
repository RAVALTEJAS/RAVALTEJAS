import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  "https://images.pexels.com/photos/3082764/pexels-photo-3082764.jpeg",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
  "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg",
  "https://images.unsplash.com/photo-1714972383570-44ddc9738355",
  "https://images.pexels.com/photos/35130817/pexels-photo-35130817.jpeg",
  "https://images.unsplash.com/photo-1647296020388-787fdae78e3c"
];

const Gallery = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
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
              </DialogTrigger>
              
              {/* Lightbox Content */}
              <DialogContent className="max-w-5xl w-[95vw] border-none bg-transparent shadow-none p-0 overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center group/modal">
                   {/* We don't need a default close button from DialogContent usually if we style it custom, but shadcn DialogContent includes one. 
                       We can customize or just use the default. Since we made bg transparent, the X might need styling. */}
                   <img
                    src={src}
                    alt={`Gallery Fullscreen ${index + 1}`}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
