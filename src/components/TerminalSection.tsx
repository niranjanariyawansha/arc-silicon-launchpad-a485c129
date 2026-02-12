import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useIsMobile } from "@/hooks/use-mobile";
import ScrollHistogram from "./ScrollHistogram";

const logLines = [
  { text: "[🚀] STARTING HYPER-SPEED ASIC SIMULATION (1.0 GHz)", color: "text-arc-blue" },
  { text: "[⚙️] Loading VX-1 Hard Core RTL netlist...", color: "text-muted-foreground" },
  { text: "[📐] Synthesizing for TSMC 7nm FinFET target...", color: "text-muted-foreground" },
  { text: "[⏱️] Clock period: 1.00ns | Setup slack: +0.12ns", color: "text-arc-yellow" },
  { text: "[✅] SUCCESS: Core Logic stable at 1ns cycle time", color: "text-arc-green" },
  { text: "[✅] SUCCESS: JSON Scanner throughput: 8.0 Gbps sustained", color: "text-arc-green" },
  { text: "[✅] SUCCESS: Deterministic latency — 0% Jitter", color: "text-arc-green" },
  { text: "[🏁] SIMULATION COMPLETE — ALL CHECKS PASSED", color: "text-arc-blue font-bold" },
];

const TerminalSection = () => {
  const { ref, progress } = useScrollProgress(0.15);
  const isMobile = useIsMobile();
  const [visibleLines, setVisibleLines] = useState(0);

  // Lines reveal based on scroll progress
  useEffect(() => {
    const count = Math.floor(progress * logLines.length);
    setVisibleLines(count);
  }, [progress]);

  // "Glowing Emerald" once fully revealed
  const isComplete = visibleLines >= logLines.length;

  return (
    <section id="verification" className="relative py-32 px-6 overflow-hidden" ref={ref}>
      {/* Diagonal green-to-white */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(170deg, hsl(var(--arc-green) / 0.15) 45%, hsl(var(--background)) 45%)`,
        }}
      />
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-5xl font-extrabold text-center mb-4"
          animate={{
            color: isComplete ? "hsl(var(--arc-green))" : "hsl(var(--foreground))",
            textShadow: isComplete
              ? "0 0 40px hsl(var(--arc-green) / 0.4)"
              : "none",
          }}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
        >
          1.0 GHz Verification
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Real verification output from our ASIC simulation pipeline.
        </p>

        <motion.div
          className="rounded-2xl overflow-hidden glass border border-border/60 shadow-2xl"
          initial={isMobile ? {} : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border/40 bg-muted/40">
            <div className="w-3 h-3 rounded-full bg-arc-red" />
            <div className="w-3 h-3 rounded-full bg-arc-yellow" />
            <div className="w-3 h-3 rounded-full bg-arc-green" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">
              arc-silicon-sim — verification.log
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm leading-relaxed min-h-[320px] bg-background/50">
            {logLines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                className={line.color}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                  delay: i * 0.05,
                }}
              >
                {line.text}
              </motion.div>
            ))}
            {visibleLines < logLines.length && (
              <span className="inline-block w-2 h-4 bg-arc-blue animate-pulse ml-1" />
            )}
          </div>
        </motion.div>

        {/* Histogram grows with scroll */}
        <ScrollHistogram />

        {/* Founder's verification callout */}
        {isComplete && (
          <motion.p
            className="text-center mt-8 font-signature text-2xl text-arc-green/70"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
          >
            "Verified. No compromises."
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default TerminalSection;
