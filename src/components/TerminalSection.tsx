import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  const { ref, isVisible } = useScrollReveal(0.3);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= logLines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="verification" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center text-foreground mb-4">
          The Proof
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Real verification output from our ASIC simulation pipeline.
        </p>

        <div className="rounded-2xl overflow-hidden glass border border-border/60 shadow-2xl">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border/40 bg-muted/40">
            <div className="w-3 h-3 rounded-full bg-arc-red" />
            <div className="w-3 h-3 rounded-full bg-arc-yellow" />
            <div className="w-3 h-3 rounded-full bg-arc-green" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">arc-silicon-sim — verification.log</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm leading-relaxed min-h-[320px] bg-background/50">
            {logLines.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                className={`${line.color} opacity-0 animate-fade-up`}
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: "forwards" }}
              >
                {line.text}
              </div>
            ))}
            {visibleLines < logLines.length && isVisible && (
              <span className="inline-block w-2 h-4 bg-arc-blue animate-pulse ml-1" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
