import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TerminalSection from "@/components/TerminalSection";
import BentoGrid from "@/components/BentoGrid";
import WhyArcSection from "@/components/WhyArcSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TerminalSection />
      <BentoGrid />
      <WhyArcSection />
      <Footer />
    </div>
  );
};

export default Index;
