
import Hero from "@/components/Hero";
import LabStations from "@/components/LabStations";
import DragonNotebook from "@/components/DragonNotebook";
import SubmitLieForm from "@/components/SubmitLieForm";
import AboutBook from "@/components/AboutBook";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LabStations />
      <DragonNotebook />
      <SubmitLieForm />
      <AboutBook />
      <Footer />
    </div>
  );
};

export default Index;
