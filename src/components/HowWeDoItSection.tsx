import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useIsMobile } from "@/hooks/use-mobile";
import chipImg from "@/assets/unsplash-chip.jpg";
import circuitImg from "@/assets/unsplash-circuit.jpg";
import networkImg from "@/assets/unsplash-network.jpg";

const steps = [
  {
    step: "01",
    title: "Byte-Stream Ingestion",
    description:
      "Raw JSON bytes are ingested directly from the network fabric at wire speed. Our hardware pipeline accepts 64-bit words per clock cycle, eliminating software-level buffering and memory copies entirely.",
    image: chipImg,
  },
  {
    step: "02",
    title: "Structural Character Detection",
    description:
      "A massively parallel comparator array identifies all structural characters — braces, brackets, colons, commas — in a single clock cycle. SIMD-style bit manipulation classifies each byte simultaneously across the full input word.",
    image: circuitImg,
  },
  {
    step: "03",
    title: "Deterministic Token Emission",
    description:
      "Validated structural tokens are emitted with guaranteed single-cycle latency. Zero jitter, zero back-pressure — every token arrives exactly when expected, enabling downstream logic to operate in perfect lockstep.",
    image: networkImg,
  },
];

const HowWeDoItSection = () => {
  const { ref, progress } = useScrollProgress(0.08);
  const isMobile = useIsMobile();

  return (
    <section id="technology" className="relative py-16 md:py-32 px-4 sm:px-6 overflow-hidden" ref={ref}>
      {/* Diagonal background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(160deg, hsl(var(--background)) 45%, hsl(var(--arc-red) / 0.15) 45%, hsl(var(--arc-yellow) / 0.10) 65%, hsl(var(--background)) 85%)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold text-center text-foreground mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How We Do It
        </motion.h2>
        <p className="text-center text-muted-foreground mb-4 md:mb-6 text-base md:text-lg px-2">
          Three stages. One clock cycle each. Zero compromise.
        </p>
        <p className="text-center font-signature text-xl md:text-2xl text-muted-foreground/50 mb-10 md:mb-16">
          — Precision in Every Cycle
        </p>

        <div className="relative">
          {/* Vertical scroll-telling gradient line — desktop only */}
          {!isMobile && (
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-[50px] rounded-full"
              style={{
                background: `linear-gradient(180deg, hsl(var(--arc-blue)), hsl(var(--arc-red)), hsl(var(--arc-yellow)), hsl(var(--arc-green)))`,
                transformOrigin: "top",
                scaleY: progress,
              }}
            />
          )}

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, i) => {
              const stepProgress = isMobile ? 1 : Math.min(1, Math.max(0, (progress * 3) - i));
              const isActive = stepProgress > 0.1;
              const isFull = stepProgress >= 0.95;

              return (
                <motion.div
                  key={step.step}
                  className={`relative ${isMobile ? "pl-0" : "pl-28"}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 80, damping: 16, delay: i * 0.1 }}
                >
                  {/* Step number dot — desktop */}
                  {!isMobile && (
                    <motion.div
                      className="absolute left-3 top-4 w-[60px] h-[60px] rounded-full flex items-center justify-center font-display font-extrabold text-lg border-4 shadow-lg"
                      animate={{
                        backgroundColor: isFull
                          ? "hsl(var(--arc-green))"
                          : isActive
                          ? "hsl(var(--arc-blue))"
                          : "hsl(var(--muted))",
                        borderColor: isFull
                          ? "hsl(var(--arc-green))"
                          : isActive
                          ? "hsl(var(--arc-blue))"
                          : "hsl(var(--border))",
                        color: isActive ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
                      }}
                      transition={{ type: "spring", stiffness: 100, damping: 14 }}
                    >
                      {step.step}
                    </motion.div>
                  )}

                  {/* Mobile step badge */}
                  {isMobile && (
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full gradient-border flex items-center justify-center font-display font-bold text-sm text-primary-foreground">
                        {step.step}
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                  )}

                  <div className="glass rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                    {/* Image banner */}
                    <div className="h-32 sm:h-40 md:h-48 overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 sm:p-6 md:p-8">
                      {/* Desktop title */}
                      {!isMobile && (
                        <motion.h3
                          className="font-display text-2xl md:text-3xl font-bold mb-3"
                          animate={{
                            color: isFull
                              ? "hsl(var(--arc-green))"
                              : isActive
                              ? "hsl(var(--foreground))"
                              : "hsl(var(--muted-foreground))",
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          {step.title}
                        </motion.h3>
                      )}
                      <p className="leading-relaxed text-sm sm:text-base md:text-lg text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <p className="text-center font-signature text-lg md:text-xl text-muted-foreground/40 mt-10 md:mt-16">
          — Every byte, accounted for
        </p>
      </div>
    </section>
  );
};

export default HowWeDoItSection;
