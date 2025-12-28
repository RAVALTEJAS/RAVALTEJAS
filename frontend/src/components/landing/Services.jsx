import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Wedding Planning",
    description: "From intimate ceremonies to grand receptions, we orchestrate every detail of your special day.",
    image: "https://images.unsplash.com/photo-1595407753234-0882f1e77954",
    icon: "💍"
  },
  {
    title: "Corporate Events",
    description: "Professional planning for conferences, galas, and brand launches that leave a lasting impression.",
    image: "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg",
    icon: "🤝"
  },
  {
    title: "Private Celebrations",
    description: "Birthdays, anniversaries, and milestones deserve to be celebrated in style and comfort.",
    image: "https://images.pexels.com/photos/35143280/pexels-photo-35143280.jpeg",
    icon: "🎉"
  },
  {
    title: "Engagements",
    description: "Create the perfect proposal or engagement party with our romantic and creative setups.",
    image: "https://images.pexels.com/photos/29157921/pexels-photo-29157921.jpeg",
    icon: "🥂"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Curated Services</h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive range of event planning services, tailored to your unique needs and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-2xl">
                  {service.icon}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform cursor-pointer">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
