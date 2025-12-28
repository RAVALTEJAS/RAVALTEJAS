import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Plan Your <br /> Next Event</h2>
              <p className="text-muted-foreground text-lg">
                We'd love to hear about your vision. Fill out the form or reach out to us directly to start planning your unforgettable celebration.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full text-foreground">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-foreground mb-1">Our Studio</h5>
                  <p className="text-muted-foreground">123 Event Avenue, Luxury District<br />New York, NY 10012</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full text-foreground">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-foreground mb-1">Phone</h5>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full text-foreground">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-foreground mb-1">Email</h5>
                  <p className="text-muted-foreground">hello@auraevents.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-secondary/20 p-8 md:p-10 rounded-3xl border border-border">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="Jane" className="bg-white border-white/50 focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Doe" className="bg-white border-white/50 focus:border-primary/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="jane@example.com" className="bg-white border-white/50 focus:border-primary/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Event Type</label>
                <select className="flex h-10 w-full rounded-md border border-white/50 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Birthday Party</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea placeholder="Tell us about your event..." className="min-h-[120px] bg-white border-white/50 focus:border-primary/50" />
              </div>

              <Button className="w-full h-12 text-lg rounded-xl">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
