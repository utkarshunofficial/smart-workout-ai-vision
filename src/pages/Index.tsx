
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundGradient from "@/components/BackgroundGradient";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundGradient />
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
