
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 md:px-8 border-b sticky top-0 bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
            <span className="font-bold text-white">SW</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">Smart Workout</h1>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-primary/90">Early Access</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b py-4 px-4 flex flex-col gap-4">
          <a 
            href="#features" 
            className="text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            How it Works
          </a>
          <a 
            href="#about" 
            className="text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Button className="bg-primary hover:bg-primary/90 w-full mt-2">
            Early Access
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
