import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <AspectRatio ratio={4/5}>
                <img
                  src="https://images.unsplash.com/photo-1595407753234-0882f1e77954"
                  alt="Our Team Planning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </AspectRatio>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-32 border-2 border-primary/20 rounded-lg -z-0" />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm">About Aura Events</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Crafting Unforgettable <br />
                <span className="text-primary/80 italic">Experiences</span>
              </h2>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Aura Events, we believe that every celebration tells a story. Our passion lies in the details—the subtle touches that transform a gathering into a masterpiece. With years of experience in luxury event planning, we bring creativity, precision, and heart to every project.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether it's a fairytale wedding, a milestone birthday, or a sophisticated corporate gala, our team is dedicated to exceeding your expectations. We handle the stress so you can savor the moment.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h3 className="text-3xl font-serif font-bold text-foreground">500+</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Events Planned</p>
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold text-foreground">100%</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
