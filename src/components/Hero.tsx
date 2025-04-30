
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Heart } from "lucide-react";
import { useAnimatedCount } from "@/hooks/useAnimatedCount";

const Hero = () => {
  const animatedCount = useAnimatedCount(250);
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = elementRef.current?.querySelectorAll('.animate-on-scroll');
    children?.forEach(child => {
      observer.observe(child);
    });

    return () => {
      children?.forEach(child => {
        observer.unobserve(child);
      });
    };
  }, []);

  return (
    <section className="w-full py-16 px-4 md:py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10" ref={elementRef}>
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full text-sm font-medium text-primary shadow-sm animate-on-scroll opacity-0">
            <Activity className="h-4 w-4" />
            <span>AI-Powered Workout Analysis</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-on-scroll opacity-0">
            Perfect Your Form with 
            <span className="text-primary block bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">AI Vision</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg animate-on-scroll opacity-0">
            Gym Buddy uses advanced AI to track your exercises, count reps, and provide real-time feedback on your form—all through your camera.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-on-scroll opacity-0">
            <Button className="bg-gradient-to-r from-blue-500 to-teal-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-500 h-12 px-6 text-base transition-all duration-300 transform hover:scale-105">
              Get Early Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-12 px-6 text-base border-blue-300 transition-all duration-300 transform hover:scale-105">
              See Demo
            </Button>
          </div>
          
          <div className="flex items-center gap-4 pt-6 animate-on-scroll opacity-0">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-teal-300 border-2 border-white" />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">{animatedCount}+</span> fitness enthusiasts like Utkarsh already on the waitlist
            </p>
          </div>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-2xl border bg-white animate-on-scroll opacity-0">
          <div className="aspect-video bg-gradient-to-br from-blue-50 to-teal-50 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-md p-4">
                <img 
                  src="https://placehold.co/600x400/e2f8ff/0099cc?text=AI+Workout+Tracking+Demo" 
                  alt="Gym Buddy AI Demo" 
                  className="rounded-lg w-full h-auto shadow-md"
                />
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border animate-pulse">
                  <div className="flex items-center gap-3">
                    <Heart className="h-6 w-6 text-red-500" />
                    <div>
                      <p className="font-semibold text-sm">Form Analysis</p>
                      <p className="text-xs text-gray-600">Great job Utkarsh! Keep your back straight</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-black/80 text-white py-1 px-3 rounded-full text-xs font-medium">
                  Rep Count: 8
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
