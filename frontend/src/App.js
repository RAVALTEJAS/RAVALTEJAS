import React from "react";
import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import About from "./components/landing/About";
// Placeholders for now, will create in next step
const Services = () => <div id="services"></div>;
const Gallery = () => <div id="gallery"></div>;
const Testimonials = () => <div id="testimonials"></div>;
const Contact = () => <div id="contact"></div>;
const Footer = () => <div id="footer"></div>;

function App() {
  return (
    <div className="font-sans antialiased text-foreground bg-background selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
