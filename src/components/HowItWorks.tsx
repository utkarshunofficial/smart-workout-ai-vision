
import React from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Set Up Your Camera",
    description: "Position your webcam or smartphone to capture your full body during exercise.",
    image: "https://placehold.co/400x300/e2f8ff/0099cc?text=Camera+Setup"
  },
  {
    number: "02",
    title: "Select Your Exercise",
    description: "Choose from our growing library of supported exercises for tracking.",
    image: "https://placehold.co/400x300/e2f8ff/0099cc?text=Exercise+Selection"
  },
  {
    number: "03",
    title: "Start Your Workout",
    description: "Begin exercising while the AI tracks your movements and provides feedback.",
    image: "https://placehold.co/400x300/e2f8ff/0099cc?text=Workout+Tracking"
  },
  {
    number: "04",
    title: "Review Your Performance",
    description: "After your workout, get detailed insights on your performance and progress.",
    image: "https://placehold.co/400x300/e2f8ff/0099cc?text=Performance+Review"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-6">
            How Smart Workout Works
          </h2>
          <p className="text-lg text-gray-600">
            Our AI-powered system makes tracking your workouts simple. Just follow these steps to get started with perfect form and accurate tracking.
          </p>
        </div>
        
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-10">
              {/* For even steps, image on left; for odd, image on right */}
              {index % 2 !== 0 && (
                <div className="md:w-1/2 w-full">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center font-bold text-2xl text-primary">
                      {step.number}
                    </div>
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              )}
              
              <div className="md:w-1/2 w-full">
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center text-primary font-medium">
                    <span>Next Step</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                )}
                
                {index === steps.length - 1 && (
                  <div className="text-primary font-medium">
                    Start improving your workouts today!
                  </div>
                )}
              </div>
              
              {index % 2 === 0 && (
                <div className="md:w-1/2 w-full">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center font-bold text-2xl text-primary">
                      {step.number}
                    </div>
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
