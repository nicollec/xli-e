
import { Camera, Heart, BookOpen, FlaskConical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LabStations = () => {
  const stations = [
    {
      id: "photography",
      title: "The Photography Lie",
      icon: <Camera className="w-8 h-8" />,
      description: "Vero lies she knows how to use a camera and magically gains the skill",
      color: "bg-magic-pink",
      emoji: "📷"
    },
    {
      id: "nikon",
      title: "The Nikon Z8 Lie", 
      icon: <Camera className="w-8 h-8" />,
      description: "Her old camera transforms into an expensive DSLR",
      color: "bg-magic-purple",
      emoji: "🖤"
    },
    {
      id: "strawberry",
      title: "The Strawberry Lie",
      icon: <Heart className="w-8 h-8" />,
      description: "Mushy fruit becomes freshly picked and rewrites time",
      color: "bg-magic-mint",
      emoji: "🍓"
    },
    {
      id: "submit",
      title: "Submit Your Own Lie",
      icon: <FlaskConical className="w-8 h-8" />,
      description: "Test your own lie and see what magical consequences await",
      color: "bg-magic-gold",
      emoji: "🧪"
    }
  ];

  return (
    <section id="experiments" className="py-20 px-4 bg-gradient-to-b from-magic-lavender to-magic-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-story text-5xl font-bold text-center text-magic-purple mb-4">
          Lab Stations
        </h2>
        <p className="font-clean text-xl text-center text-magic-purple mb-16 max-w-2xl mx-auto">
          Explore our collection of lie experiments. Each station reveals the magical consequences of bending reality.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stations.map((station) => (
            <Card 
              key={station.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-0 overflow-hidden"
            >
              <CardContent className={`${station.color} p-8 h-full flex flex-col items-center text-center relative`}>
                <div className="absolute top-4 right-4 text-4xl animate-float">
                  {station.emoji}
                </div>
                
                <div className="text-white mb-4 group-hover:animate-bounce">
                  {station.icon}
                </div>
                
                <h3 className="font-story text-xl font-bold text-white mb-3">
                  {station.title}
                </h3>
                
                <p className="font-clean text-white/90 text-sm leading-relaxed">
                  {station.description}
                </p>
                
                <div className="mt-4 w-full h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white/60 rounded-full transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabStations;
