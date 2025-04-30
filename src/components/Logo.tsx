
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-300 shadow-lg flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-300 animate-pulse opacity-50"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 17.5L4 14.5V9.5L6.5 6.5H17.5L20 9.5V14.5L17.5 17.5H6.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 12H7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5 12H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 8.5V15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 8.5V15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">Gym Buddy</h1>
        <span className="text-xs text-gray-500 -mt-1">AI Workout Assistant</span>
      </div>
    </div>
  );
};

export default Logo;
