import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useIsMobile } from "@/hooks/use-mobile";
import { Cpu, Zap } from "lucide-react";

function AnimatedCounter({
  target,
  suffix = "",
  progress,
}: {
  target: number;
  suffix?: string;
  progress: number;
}) {
  const count = Math.round(target * progress);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 16,
};

const BentoGrid = () => {
  const { ref, progress } = useScrollProgress(0.15);
  const isMobile = useIsMobile();

  return (
    <section id="products" className="py-32 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center text-foreground mb-4">
          Product Lineup
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Silicon IP cores engineered for the 10Gbps era.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* VX-1 Soft Core */}
          <motion.div
            className="group rounded-2xl p-8 glass border-2 border-arc-blue/20 hover:border-arc-blue/50 transition-all hover:-translate-y-1 hover:shadow-2xl"
            initial={isMobile ? {} : { opacity: 0, y: 60 }}
            animate={
              isMobile
                ? {}
                : { opacity: Math.min(1, progress * 3), y: 60 * (1 - Math.min(1, progress * 3)) }
            }
            transition={springTransition}
          >
            <div className="w-12 h-12 rounded-xl bg-arc-blue/10 flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6 text-arc-blue" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">VX-1 Soft Core</h3>
            <p className="text-sm font-semibold text-arc-blue mb-3">500 MHz · FPGA-Optimized</p>
            <p className="text-muted-foreground leading-relaxed">
              Optimized for Xilinx UltraScale+ FPGAs. Rapid prototyping with production-grade
              deterministic JSON scanning at sub-microsecond latencies.
            </p>
          </motion.div>

          {/* VX-1 Hard Core */}
          <motion.div
            className="group rounded-2xl p-8 glass border-2 border-arc-red/20 hover:border-arc-red/50 transition-all hover:-translate-y-1 hover:shadow-2xl"
            initial={isMobile ? {} : { opacity: 0, y: 60 }}
            animate={
              isMobile
                ? {}
                : {
                    opacity: Math.min(1, progress * 2.5),
                    y: 60 * (1 - Math.min(1, progress * 2.5)),
                  }
            }
            transition={{ ...springTransition, delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-xl bg-arc-red/10 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-arc-red" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">VX-1 Hard Core</h3>
            <p className="text-sm font-semibold text-arc-red mb-3">1.0 GHz+ · ASIC-Ready</p>
            <p className="text-muted-foreground leading-relaxed">
              Fully synthesizable RTL targeting TSMC 16nm & 7nm FinFET. Silicon-proven performance
              with zero-jitter deterministic processing.
            </p>
          </motion.div>

          {/* Stats card */}
          <motion.div
            className="md:col-span-2 rounded-2xl p-8 glass border-2 border-arc-green/20 hover:border-arc-green/50 transition-all hover:shadow-2xl"
            initial={isMobile ? {} : { opacity: 0, y: 40 }}
            animate={
              isMobile
                ? {}
                : { opacity: Math.min(1, progress * 2), y: 40 * (1 - Math.min(1, progress * 2)) }
            }
            transition={{ ...springTransition, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-around gap-8">
              <div className="text-center">
                <div className="font-display text-5xl font-extrabold text-foreground">
                  <AnimatedCounter target={8} suffix=" Gbps" progress={Math.min(1, progress * 2)} />
                </div>
                <p className="text-muted-foreground mt-2">Sustained Throughput</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-border" />
              <div className="text-center">
                <div className="font-display text-5xl font-extrabold text-foreground">
                  <AnimatedCounter target={1} suffix="-cycle" progress={Math.min(1, progress * 2)} />
                </div>
                <p className="text-muted-foreground mt-2">Latency</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-border" />
              <div className="text-center">
                <div className="font-display text-5xl font-extrabold text-foreground">
                  <AnimatedCounter target={0} suffix="%" progress={Math.min(1, progress * 2)} />
                </div>
                <p className="text-muted-foreground mt-2">Jitter</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
