
import React from "react";
import { 
  Activity, 
  BarChart, 
  Camera, 
  Check, 
  Dumbbell, 
  Heart, 
  Settings, 
  TrendingUp, 
  Users
} from "lucide-react";

const features = [
  {
    icon: <Camera className="h-6 w-6 text-primary" />,
    title: "Real-time Pose Tracking",
    description: "Advanced MediaPipe integration tracks 33 body points for precise movement analysis."
  },
  {
    icon: <Check className="h-6 w-6 text-primary" />,
    title: "Automated Rep Counting",
    description: "Automatically count repetitions for various exercises with high accuracy."
  },
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Form Correction",
    description: "Receive instant feedback on your exercise form to prevent injuries."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    title: "Progress Tracking",
    description: "Monitor improvements over time with detailed performance analytics."
  },
  {
    icon: <Dumbbell className="h-6 w-6 text-primary" />,
    title: "Multiple Exercise Support",
    description: "Works with squats, push-ups, bicep curls, and many more exercises."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "No Personal Trainer Needed",
    description: "Get professional-level feedback without the expensive hourly rates."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by Advanced Computer Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI tracking system uses MediaPipe and OpenCV to deliver precise workout analysis and real-time feedback
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card bg-white p-6 rounded-xl border hover:border-primary"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-xl gradient-bg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to transform your workouts?</h3>
              <p className="text-gray-600">Join our early access program and be the first to experience Smart Workout.</p>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg font-medium">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
