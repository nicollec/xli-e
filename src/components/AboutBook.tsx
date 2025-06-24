
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AboutBook = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-magic-purple via-magic-pink to-magic-gold">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <div className="text-center">
            <div className="bg-white/20 p-8 rounded-lg shadow-2xl backdrop-blur-sm inline-block transform hover:scale-105 transition-all duration-300">
              <div className="w-64 h-80 bg-gradient-to-b from-magic-cream to-magic-lavender rounded-lg shadow-xl mx-auto flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="font-story text-2xl font-bold text-magic-purple mb-2">
                    Vero Quillthorne
                  </h3>
                  <p className="font-story text-lg text-magic-purple mb-4">
                    and the
                  </p>
                  <h4 className="font-story text-xl font-bold text-magic-purple mb-4">
                    Lie Experiments
                  </h4>
                  <div className="text-4xl mb-2">🐉</div>
                  <p className="font-clean text-sm text-magic-purple">
                    A Novel
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Book Info */}
          <div className="text-white">
            <h2 className="font-story text-5xl font-bold mb-6">
              About the Book
            </h2>
            
            <div className="space-y-6 font-clean text-lg leading-relaxed">
              <p>
                Meet <strong>Vero Quillthorne</strong>, a 14-year-old girl who discovers that her lies have the power to reshape reality itself. In this middle-grade magical realism adventure, every falsehood becomes truth, every story becomes real.
              </p>
              
              <p>
                When Vero tells a lie about owning a professional camera, her beat-up old device transforms before her eyes. When she claims mushy strawberries are fresh, time itself bends backward to make it so. But magic always comes with consequences, and Vero must learn to navigate a world where her words have unprecedented power.
              </p>
              
              <p>
                Perfect for readers aged 10-14 and adults who love magical stories, this tale explores themes of truth, courage, and the magic that exists in authentic self-expression.
              </p>
            </div>

            <div className="mt-8 p-6 bg-white/20 rounded-lg backdrop-blur-sm">
              <h3 className="font-story text-2xl font-bold mb-4">About the Author</h3>
              <p className="font-clean">
                <strong>Nicole Kiru</strong> crafts stories where magic meets reality and young heroes discover the power of truth. She believes that the most powerful magic happens when we have the courage to be authentically ourselves.
              </p>
            </div>

            {/* Email Signup */}
            <Card className="mt-8 bg-white/10 border-white/20">
              <CardContent className="p-6">
                {!isSubscribed ? (
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <h3 className="font-story text-xl font-bold text-white">
                      Join the Experiments! 📧
                    </h3>
                    <p className="font-clean text-white/90">
                      Get updates, sample chapters, and exclusive lie experiment results.
                    </p>
                    <div className="flex space-x-2">
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                        required
                      />
                      <Button 
                        type="submit"
                        className="bg-magic-gold hover:bg-white text-magic-purple font-semibold px-6"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="text-4xl mb-2">✨</div>
                    <h3 className="font-story text-xl font-bold text-white mb-2">
                      Welcome to the Lab!
                    </h3>
                    <p className="font-clean text-white/90">
                      You'll receive updates on Vero's experiments and book launch news.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBook;
