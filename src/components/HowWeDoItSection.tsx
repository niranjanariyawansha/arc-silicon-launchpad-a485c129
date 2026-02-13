import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    step: "01",
    title: "Byte-Stream Ingestion",
    description:
      "Raw JSON bytes are ingested directly from the network fabric at wire speed. Our hardware pipeline accepts 64-bit words per clock cycle, eliminating software-level buffering and memory copies entirely.",
  },
  {
    step: "02",
    title: "Structural Character Detection",
    description:
      "A massively parallel comparator array identifies all structural characters — braces, brackets, colons, commas — in a single clock cycle. SIMD-style bit manipulation classifies each byte simultaneously across the full input word.",
  },
  {
    step: "03",
    title: "Deterministic Token Emission",
    description:
      "Validated structural tokens are emitted with guaranteed single-cycle latency. Zero jitter, zero back-pressure — every token arrives exactly when expected, enabling downstream logic to operate in perfect lockstep.",
  },
];

const HowWeDoItSection = () => {
  const { ref, progress } = useScrollProgress(0.12);
  const isMobile = useIsMobile();

  return (
    <section id="technology" className="relative py-32 px-6 overflow-hidden" ref={ref}>
      {/* Diagonal red-to-white */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(160deg, hsl(var(--background)) 50%, hsl(var(--arc-red) / 0.12) 50%)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center text-foreground mb-4">
          How We Do It
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Three stages. One clock cycle each. Zero compromise.
        </p>

        <div className="relative">
          {/* Vertical scroll-telling line */}
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

          <div className="flex flex-col gap-20">
            {steps.map((step, i) => {
              const stepProgress = Math.min(1, Math.max(0, (progress * 3) - i));
              const isActive = stepProgress > 0.1;
              const isFull = stepProgress >= 0.95;

              return (
                <motion.div
                  key={step.step}
                  className={`relative ${isMobile ? "pl-0" : "pl-24"}`}
                  initial={isMobile ? {} : { opacity: 0, x: -30 }}
                  animate={
                    isMobile
                      ? {}
                      : {
                          opacity: Math.min(1, stepProgress * 2),
                          x: -30 * (1 - Math.min(1, stepProgress * 2)),
                        }
                  }
                  transition={{ type: "spring", stiffness: 80, damping: 16 }}
                >
                  {/* Step number dot on the line */}
                  {!isMobile && (
                    <motion.div
                      className="absolute left-3 top-2 w-[60px] h-[60px] rounded-full flex items-center justify-center font-display font-extrabold text-lg border-4"
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

                  <div className="glass rounded-2xl p-8 border border-border/50">
                    <motion.h3
                      className="font-display text-2xl font-bold mb-3"
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
                    <motion.p
                      className="leading-relaxed"
                      animate={{
                        color: isActive
                          ? "hsl(var(--muted-foreground))"
                          : "hsl(var(--border))",
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoItSection;
