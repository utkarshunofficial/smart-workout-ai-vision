
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title text-3xl md:text-4xl font-bold mb-6">
              About Gym Buddy
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Gym Buddy was born from a simple idea: make professional fitness guidance accessible to everyone. Our team of fitness enthusiasts and AI engineers came together to create a solution that brings advanced computer vision technology to your daily workout routine.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Using MediaPipe and OpenCV, we've developed a system that can accurately track your movements, count repetitions, and provide real-time feedback on your exercise form—all without expensive equipment or personal trainers.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to help people exercise more effectively, prevent injuries, and achieve their fitness goals faster through the power of artificial intelligence.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Our Technology</h3>
              <p className="text-gray-600">
                Gym Buddy uses state-of-the-art computer vision libraries like MediaPipe for pose estimation and OpenCV for image processing, allowing for precise and reliable tracking of your exercise movements in real-time.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                We envision a future where anyone, anywhere can access professional-quality fitness guidance through their smartphone or webcam, making proper exercise form and technique accessible to all.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Our Team</h3>
              <p className="text-gray-600">
                We're a passionate group of fitness enthusiasts, computer vision specialists, and software engineers dedicated to improving how people exercise through innovative technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
