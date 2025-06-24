
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToExperiments = () => {
    const experimentsSection = document.getElementById('experiments');
    experimentsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-magic-mint via-magic-cream to-magic-lavender">
      {/* Floating Lab Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-20 bg-magic-pink rounded-full opacity-70 animate-glow" />
          <div className="w-4 h-4 bg-magic-gold rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bubble" />
        </div>
        
        <div className="absolute top-32 right-20 animate-float delay-1000">
          <div className="w-12 h-16 bg-magic-purple rounded-full opacity-60" />
          <div className="w-3 h-3 bg-white rounded-full absolute top-1 left-1/2 transform -translate-x-1/2 animate-glow" />
        </div>
        
        <div className="absolute bottom-40 left-1/4 animate-float delay-2000">
          <div className="w-8 h-8 bg-magic-gold rounded-full opacity-80 animate-bubble" />
        </div>
        
        <div className="absolute top-1/2 right-10 animate-float delay-500">
          <div className="w-6 h-10 bg-magic-mint rounded-full opacity-70" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-story text-6xl md:text-8xl font-bold text-magic-purple mb-6 drop-shadow-lg">
            Vero's Lab
          </h1>
          
          <p className="font-clean text-xl md:text-2xl text-magic-purple mb-8 max-w-2xl mx-auto leading-relaxed">
            Here we test world-class lies. Might explode!
          </p>
          
          <Button 
            onClick={scrollToExperiments}
            className="bg-magic-pink hover:bg-magic-purple text-white text-lg px-8 py-6 rounded-full font-clean font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Browse the Experiments
            {isHovered && <span className="ml-2 animate-bounce">✨</span>}
          </Button>
        </div>

        {/* Dragon Notebook */}
        <div className="absolute bottom-10 right-10 group cursor-pointer">
          <div className="bg-magic-gold p-4 rounded-lg shadow-xl transform hover:rotate-3 transition-all duration-300 hover:scale-110">
            <div className="flex items-center space-x-2">
              <span className="text-2xl animate-float">🐉</span>
              <span className="font-clean font-semibold text-magic-purple">View Lie Logs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
