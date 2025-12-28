import React from "react";
import { Card, CardContent } from "../ui/card";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const testimonials = [
  {
    name: "Sarah & James",
    role: "Wedding Clients",
    content: "Aura Events made our dream wedding a reality. The attention to detail was impeccable, and the team was a joy to work with. Truly magical!",
    initials: "SJ"
  },
  {
    name: "Elena Rodriguez",
    role: "Corporate Gala",
    content: "Professional, creative, and efficient. They transformed our annual gala into the talk of the industry. Highly recommended for any corporate event.",
    initials: "ER"
  },
  {
    name: "Michael Chang",
    role: "Birthday Celebration",
    content: "I didn't have to worry about a thing. The decor, the coordination, everything was perfect. Best birthday party I've ever hosted!",
    initials: "MC"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Client Love</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="pt-10 pb-8 px-8 relative">
                <Quote className="absolute top-6 left-6 text-primary/20 w-10 h-10" />
                <div className="flex gap-1 mb-6 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground text-center mb-8 italic text-lg leading-relaxed">
                  "{item.content}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                    <AvatarFallback className="bg-primary text-primary-foreground">{item.initials}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-bold text-foreground font-serif">{item.name}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
