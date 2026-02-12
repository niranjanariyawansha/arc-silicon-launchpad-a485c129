import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Cpu, Zap, Activity } from "lucide-react";

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollReveal(0.5);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const BentoGrid = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="products" className="py-32 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center text-foreground mb-4">
          Product Lineup
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Silicon IP cores engineered for the 10Gbps era.
        </p>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* VX-1 Soft Core */}
          <div className="group rounded-2xl p-8 glass border-2 border-arc-blue/20 hover:border-arc-blue/50 transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-arc-blue/10 flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6 text-arc-blue" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">VX-1 Soft Core</h3>
            <p className="text-sm font-semibold text-arc-blue mb-3">500 MHz · FPGA-Optimized</p>
            <p className="text-muted-foreground leading-relaxed">
              Optimized for Xilinx UltraScale+ FPGAs. Rapid prototyping with production-grade deterministic JSON scanning at sub-microsecond latencies.
            </p>
          </div>

          {/* VX-1 Hard Core */}
          <div className="group rounded-2xl p-8 glass border-2 border-arc-red/20 hover:border-arc-red/50 transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-arc-red/10 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-arc-red" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">VX-1 Hard Core</h3>
            <p className="text-sm font-semibold text-arc-red mb-3">1.0 GHz+ · ASIC-Ready</p>
            <p className="text-muted-foreground leading-relaxed">
              Fully synthesizable RTL targeting TSMC 16nm & 7nm FinFET. Silicon-proven performance with zero-jitter deterministic processing.
            </p>
          </div>

          {/* Stats card spanning full width */}
          <div className="md:col-span-2 rounded-2xl p-8 glass border-2 border-arc-green/20 hover:border-arc-green/50 transition-all hover:shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-around gap-8">
              <div className="text-center">
                <div className="font-display text-5xl font-extrabold text-foreground">
                  <AnimatedCounter target={8} suffix=" Gbps" />
                </div>
                <p className="text-muted-foreground mt-2">Sustained Throughput</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-border" />
              <div className="text-center">
                <div className="font-display text-5xl font-extrabold text-foreground">
                  <AnimatedCounter target={1} suffix="-cycle" />
                </div>
                <p className="text-muted-foreground mt-2">Latency</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-border" />
              <div className="text-center">
                <div className="font-display text-5xl font-extrabold text-foreground">
                  <AnimatedCounter target={0} suffix="%" />
                </div>
                <p className="text-muted-foreground mt-2">Jitter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
