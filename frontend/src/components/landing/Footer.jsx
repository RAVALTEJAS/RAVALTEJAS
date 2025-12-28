import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-foreground font-serif text-lg font-bold">
                A
              </div>
              <span className="text-2xl font-bold font-serif">Aura Events</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Creating timeless memories through exceptional event planning and design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-foreground transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Explore</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Services</h4>
            <ul className="space-y-4">
              {["Wedding Planning", "Corporate Events", "Private Parties", "Destination Events", "Design & Styling"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Newsletter</h4>
            <p className="text-white/60 mb-4">Subscribe for event tips and inspiration.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 w-full text-white placeholder:text-white/40 focus:outline-none focus:border-white/50"
              />
              <button className="bg-white text-foreground px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Aura Events. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
