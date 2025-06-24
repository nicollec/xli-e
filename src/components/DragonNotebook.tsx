
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const DragonNotebook = () => {
  const [currentEntry, setCurrentEntry] = useState(0);
  
  const entries = [
    {
      number: 1,
      title: "The Elective Lie",
      content: "Today I told Mrs. Henderson I couldn't take Advanced Art because my schedule was full. The truth? I was scared I wasn't good enough. But when I spoke the lie, something shifted. Suddenly, my schedule really was full—with opportunities I'd never imagined.",
      consequence: "Reality rearranged itself to match my words."
    },
    {
      number: 4,
      title: "The Nikon Camera Lie",
      content: "I told Jeremy I owned a professional Nikon Z8. My beat-up old camera sat heavy in my bag, but as I spoke, I felt it changing. When I pulled it out, gleaming black and silver stared back at me.",
      consequence: "Objects transform to match our spoken truths."
    },
    {
      number: 5,
      title: "The Strawberry Lie",
      content: "The strawberries in Mom's fruit bowl were mushy and brown. I said they were perfectly fresh, picked this morning. Time itself seemed to bend backward, and suddenly they were.",
      consequence: "Time bends to accommodate our lies."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-magic-purple via-magic-pink to-magic-mint">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 mb-6">
            <span className="text-6xl animate-float">🐉</span>
            <h2 className="font-story text-5xl font-bold text-white">
              Dragon's Notebook
            </h2>
          </div>
          <p className="font-clean text-xl text-white/90 max-w-2xl mx-auto">
            Flip through Vero's actual lie logs and discover the magical consequences of her experiments.
          </p>
        </div>

        <div className="relative">
          {/* Notebook Styling */}
          <div className="bg-magic-cream p-8 rounded-lg shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white p-8 rounded shadow-inner min-h-[400px] relative">
              {/* Spiral Binding */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-magic-gold opacity-30" />
              <div className="absolute left-2 top-4 w-2 h-2 bg-magic-gold rounded-full opacity-50" />
              <div className="absolute left-2 top-12 w-2 h-2 bg-magic-gold rounded-full opacity-50" />
              <div className="absolute left-2 top-20 w-2 h-2 bg-magic-gold rounded-full opacity-50" />
              
              {/* Entry Content */}
              <div className="ml-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-story text-2xl font-bold text-magic-purple">
                    Entry #{entries[currentEntry].number}: {entries[currentEntry].title}
                  </h3>
                  <div className="flex space-x-2">
                    {entries.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                          index === currentEntry ? 'bg-magic-purple' : 'bg-gray-300'
                        }`}
                        onClick={() => setCurrentEntry(index)}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="font-clean text-gray-700 leading-relaxed italic">
                    "{entries[currentEntry].content}"
                  </p>
                  
                  <div className="bg-magic-lavender p-4 rounded-lg">
                    <p className="font-clean font-semibold text-magic-purple text-sm">
                      OBSERVATION: {entries[currentEntry].consequence}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              onClick={() => setCurrentEntry((prev) => (prev > 0 ? prev - 1 : entries.length - 1))}
              className="bg-magic-gold hover:bg-magic-purple text-white rounded-full px-6 py-2"
            >
              Previous Entry
            </Button>
            <Button
              onClick={() => setCurrentEntry((prev) => (prev < entries.length - 1 ? prev + 1 : 0))}
              className="bg-magic-gold hover:bg-magic-purple text-white rounded-full px-6 py-2"
            >
              Next Entry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DragonNotebook;
