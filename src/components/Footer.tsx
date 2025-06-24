
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-magic-purple py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Social Media */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a 
              href="#" 
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a 
              href="#" 
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              aria-label="TikTok"
            >
              <span className="text-white text-xl font-bold">T</span>
            </a>
          </div>

          {/* Tagline */}
          <div className="mb-6">
            <p className="font-story text-2xl text-magic-gold mb-2">
              Truth is powerful. So are stories.
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-6">
            <p className="font-clean text-white/80">
              © 2024 Nicole Kiru. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
