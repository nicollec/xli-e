
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const SubmitLieForm = () => {
  const [formData, setFormData] = useState({
    lie: "",
    reason: "",
    hope: ""
  });
  const [consequence, setConsequence] = useState<{ magical: string; honest: string } | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const generateConsequence = () => {
    const consequences = [
      {
        magical: `Reality shimmers and ${formData.lie.toLowerCase()} becomes truth. The universe rearranges itself to accommodate your words, but beware—magic always comes with unexpected side effects.`,
        honest: "Perhaps the truth, though harder to speak, would create more genuine magic in your life."
      },
      {
        magical: `Time itself bends backward to make ${formData.lie.toLowerCase()} real. The past rewrites itself, but you might find that some lies create ripples you never intended.`,
        honest: "Consider that honesty about your fears or hopes might open doors you never knew existed."
      },
      {
        magical: `Your words take on a life of their own, and ${formData.lie.toLowerCase()} manifests instantly. But remember, in Vero's world, magical shortcuts often lead to magical complications.`,
        honest: "The courage to tell the truth about what you really want might be the most powerful magic of all."
      }
    ];
    
    const randomConsequence = consequences[Math.floor(Math.random() * consequences.length)];
    setConsequence(randomConsequence);
    setIsSubmitted(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.lie && formData.reason && formData.hope) {
      generateConsequence();
    }
  };

  const resetForm = () => {
    setFormData({ lie: "", reason: "", hope: "" });
    setConsequence(null);
    setIsSubmitted(false);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-magic-cream to-magic-mint">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-story text-5xl font-bold text-magic-purple mb-4">
            Submit Your Own Lie 🧪
          </h2>
          <p className="font-clean text-xl text-magic-purple max-w-2xl mx-auto">
            What lie would you tell if you knew it might reshape reality? Let our magical AI predict the consequences.
          </p>
        </div>

        {!isSubmitted ? (
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardContent className="bg-white p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="lie" className="font-clean font-semibold text-magic-purple text-lg">
                    What's your lie? ✨
                  </Label>
                  <Input
                    id="lie"
                    value={formData.lie}
                    onChange={(e) => setFormData({...formData, lie: e.target.value})}
                    placeholder="I can speak fluent French..."
                    className="mt-2 border-magic-purple/30 focus:border-magic-purple font-clean"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="reason" className="font-clean font-semibold text-magic-purple text-lg">
                    Why would you tell it? 🤔
                  </Label>
                  <Textarea
                    id="reason"
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    placeholder="Because I want to impress someone, or I'm afraid of..."
                    className="mt-2 border-magic-purple/30 focus:border-magic-purple font-clean"
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="hope" className="font-clean font-semibold text-magic-purple text-lg">
                    What would you hope happens? 🌟
                  </Label>
                  <Textarea
                    id="hope"
                    value={formData.hope}
                    onChange={(e) => setFormData({...formData, hope: e.target.value})}
                    placeholder="I hope it would make me feel confident, or help me..."
                    className="mt-2 border-magic-purple/30 focus:border-magic-purple font-clean"
                    rows={3}
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-magic-pink hover:bg-magic-purple text-white font-clean font-semibold py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Test the Lie! ⚗️
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="shadow-2xl border-0 overflow-hidden animate-fade-in">
            <CardContent className="bg-gradient-to-r from-magic-purple to-magic-pink p-8 text-white">
              <div className="text-center mb-6">
                <h3 className="font-story text-3xl font-bold mb-4">
                  ✨ Magical Consequence Detected! ✨
                </h3>
              </div>
              
              {consequence && (
                <div className="space-y-6">
                  <div className="bg-white/20 p-6 rounded-lg">
                    <h4 className="font-clean font-bold text-xl mb-3">🌟 If Magic Were Real:</h4>
                    <p className="font-clean leading-relaxed">
                      {consequence.magical}
                    </p>
                  </div>
                  
                  <div className="bg-white/20 p-6 rounded-lg">
                    <h4 className="font-clean font-bold text-xl mb-3">💫 The Honest Path:</h4>
                    <p className="font-clean leading-relaxed">
                      {consequence.honest}
                    </p>
                  </div>
                </div>
              )}
              
              <div className="text-center mt-8">
                <Button 
                  onClick={resetForm}
                  className="bg-magic-gold hover:bg-white text-magic-purple font-clean font-semibold px-8 py-3 rounded-full"
                >
                  Test Another Lie
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default SubmitLieForm;
