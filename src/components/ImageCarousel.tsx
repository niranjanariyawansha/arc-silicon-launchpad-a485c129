import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import circuitImg from "@/assets/unsplash-circuit.jpg";
import chipImg from "@/assets/unsplash-chip.jpg";
import serverImg from "@/assets/unsplash-server.jpg";
import techImg from "@/assets/unsplash-tech.jpg";
import fpgaImg from "@/assets/unsplash-fpga.jpg";
import networkImg from "@/assets/unsplash-network.jpg";

const slides = [
  { src: circuitImg, alt: "Circuit board close-up", caption: "Precision-Engineered Silicon" },
  { src: chipImg, alt: "Microchip detail", caption: "Gate-Level Verified IP" },
  { src: serverImg, alt: "Data center servers", caption: "Built for 10Gbps Infrastructure" },
  { src: techImg, alt: "Technology lab", caption: "From Lab to Production" },
  { src: fpgaImg, alt: "FPGA development board", caption: "FPGA & ASIC Targets" },
  { src: networkImg, alt: "Network infrastructure", caption: "Low-Latency Networking" },
];

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Diagonal blue-to-white background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(165deg, hsl(var(--arc-blue) / 0.08) 40%, hsl(var(--background)) 40%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center text-foreground mb-4">
          Silicon in Action
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          From wafer to production — real hardware, real results.
        </p>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden rounded-2xl">
            <div className="flex">
              {slides.map((slide, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_60%] px-3">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-2xl"
                    animate={{
                      scale: selectedIndex === i ? 1 : 0.9,
                      opacity: selectedIndex === i ? 1 : 0.5,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 16 }}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <p className="absolute bottom-4 left-4 right-4 font-display text-lg font-bold text-primary-foreground drop-shadow-lg">
                      {slide.caption}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center hover:bg-muted transition-colors shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center hover:bg-muted transition-colors shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                selectedIndex === i
                  ? "bg-arc-blue w-6"
                  : "bg-muted-foreground/30"
              }`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
