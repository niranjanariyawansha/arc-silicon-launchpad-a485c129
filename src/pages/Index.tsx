import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ConnectionLine from "@/components/ConnectionLine";
import HowWeDoItSection from "@/components/HowWeDoItSection";
import TerminalSection from "@/components/TerminalSection";
import BentoGrid from "@/components/BentoGrid";
import ImageCarousel from "@/components/ImageCarousel";
import WhyArcSection from "@/components/WhyArcSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ConnectionLine color="hsl(var(--arc-red))" height={120} />
      <HowWeDoItSection />
      <ConnectionLine color="hsl(var(--arc-blue))" height={100} />
      <TerminalSection />
      <ConnectionLine color="hsl(var(--arc-yellow))" height={100} />
      <BentoGrid />
      <ConnectionLine color="hsl(var(--arc-green))" height={100} />
      <ImageCarousel />
      <ConnectionLine color="hsl(var(--arc-red))" height={100} />
      <WhyArcSection />
      <Footer />
    </div>
  );
};

export default Index;
