import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ConnectionLine from "@/components/ConnectionLine";
import TerminalSection from "@/components/TerminalSection";
import BentoGrid from "@/components/BentoGrid";
import WhyArcSection from "@/components/WhyArcSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ConnectionLine color="hsl(var(--arc-red))" height={120} />
      <TerminalSection />
      <ConnectionLine color="hsl(var(--arc-blue))" height={100} />
      <BentoGrid />
      <ConnectionLine color="hsl(var(--arc-green))" height={100} />
      <WhyArcSection />
      <Footer />
    </div>
  );
};

export default Index;
