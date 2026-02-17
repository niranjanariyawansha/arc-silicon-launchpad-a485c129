import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useIsMobile } from "@/hooks/use-mobile";
import { Cpu, Zap, Activity, Shield } from "lucide-react";
import fpgaImg from "@/assets/unsplash-fpga.jpg";

function AnimatedCounter({
  target,
  suffix = "",
  decimals = 0,
  progress,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
  progress: number;
}) {
  const count = (target * progress).toFixed(decimals);
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
  const p = isMobile ? 1 : progress;

  return (
    <section
      id="products"
      className="relative py-16 md:py-32 px-4 sm:px-6 overflow-hidden bg-zinc-950"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold text-center text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Product Lineup
        </h2>
        <p className="text-center text-zinc-400 mb-10 md:mb-16 text-base md:text-lg px-2 leading-relaxed">
          Silicon IP cores engineered for the 10Gbps era.
        </p>

        {/* 3D Perspective Wrapper */}
        <div
          style={{ perspective: "1200px" }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5"
            style={{
              gridAutoFlow: "dense",
              transform: isMobile ? "none" : "rotateX(2deg) rotateY(-1deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Tile 1: Main Feature — 6 cols x 2 rows */}
            <motion.div
              className="md:col-span-6 md:row-span-2 relative rounded-2xl p-6 sm:p-8 overflow-hidden
                bg-white/5 backdrop-blur-xl border border-white/10
                transition-all duration-300 hover:drop-shadow-[0_0_30px_hsl(217,89%,61%,0.4)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springTransition}
            >
              {/* FPGA background overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url(${fpgaImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-arc-blue/20 flex items-center justify-center mb-5">
                  <Cpu className="w-6 h-6 text-arc-blue" />
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  VX-1 Silicon Architecture
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-md">
                  Unbreakable 64-bit parallel scanning at wire-speed. Our custom RTL pipeline
                  delivers deterministic JSON parsing with zero-jitter performance across
                  Xilinx UltraScale+ and TSMC 7nm targets.
                </p>
              </div>
            </motion.div>

            {/* Tile 2: Metric — 3 cols x 1 row */}
            <motion.div
              className="md:col-span-3 rounded-2xl p-6 sm:p-8
                bg-white/5 backdrop-blur-xl border border-white/10
                transition-all duration-300 hover:drop-shadow-[0_0_30px_hsl(43,97%,50%,0.4)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springTransition, delay: 0.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-arc-yellow/20 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-arc-yellow" />
              </div>
              <div
                className="text-3xl sm:text-4xl font-extrabold text-white mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <AnimatedCounter target={16.0} suffix=" GB/s" decimals={1} progress={Math.min(1, p * 2)} />
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">Neural Throughput</p>
            </motion.div>

            {/* Tile 3: Metric — 3 cols x 1 row */}
            <motion.div
              className="md:col-span-3 rounded-2xl p-6 sm:p-8
                bg-white/5 backdrop-blur-xl border border-white/10
                transition-all duration-300 hover:drop-shadow-[0_0_30px_hsl(142,53%,43%,0.4)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springTransition, delay: 0.2 }}
            >
              <div className="w-10 h-10 rounded-full bg-arc-green/20 flex items-center justify-center mb-4">
                <Activity className="w-5 h-5 text-arc-green" />
              </div>
              <div
                className="text-3xl sm:text-4xl font-extrabold text-white mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <AnimatedCounter target={2.0} suffix=" GHz" decimals={1} progress={Math.min(1, p * 2)} />
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">Hardware Sign-off</p>
            </motion.div>

            {/* Tile 4: Interactive — 3 cols x 2 rows */}
            <motion.div
              className="md:col-span-3 md:row-span-2 rounded-2xl p-6 sm:p-8
                bg-white/5 backdrop-blur-xl border border-white/10
                transition-all duration-300 hover:drop-shadow-[0_0_30px_hsl(4,90%,58%,0.4)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springTransition, delay: 0.3 }}
            >
              <div className="w-10 h-10 rounded-full bg-arc-red/20 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-arc-red" />
              </div>
              <h3
                className="text-lg sm:text-xl font-bold text-white mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Digital Workforce Status
              </h3>
              <div className="space-y-3 mt-4">
                {[
                  { label: "Ingestion Engine", status: "Active" },
                  { label: "Detection Pipeline", status: "Active" },
                  { label: "Emission Controller", status: "Active" },
                  { label: "Watchdog Monitor", status: "Standby" },
                ].map((agent) => (
                  <div key={agent.label} className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">{agent.label}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-medium ${agent.status === "Active" ? "text-arc-green" : "text-zinc-500"}`}>
                        {agent.status}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          agent.status === "Active"
                            ? "bg-arc-green animate-pulse-dot"
                            : "bg-zinc-600"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
