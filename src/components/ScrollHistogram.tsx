import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useIsMobile } from "@/hooks/use-mobile";

const bars = [
  { label: "0.8ns", height: 30, color: "hsl(var(--arc-blue))" },
  { label: "0.9ns", height: 55, color: "hsl(var(--arc-blue))" },
  { label: "1.0ns", height: 100, color: "hsl(var(--arc-green))" },
  { label: "1.1ns", height: 50, color: "hsl(var(--arc-blue))" },
  { label: "1.2ns", height: 25, color: "hsl(var(--arc-blue))" },
];

/**
 * A histogram that "grows" its bars based on scroll position,
 * proving the 1ns latency distribution.
 */
const ScrollHistogram = () => {
  const { ref, progress } = useScrollProgress(0.2);
  const isMobile = useIsMobile();

  return (
    <div ref={ref} className="w-full max-w-md mx-auto mt-6 md:mt-8 px-4">
      <p className="text-[10px] sm:text-xs text-muted-foreground text-center mb-3 font-mono uppercase tracking-widest">
        Latency Distribution (ns)
      </p>
      <div className="flex items-end justify-center gap-2 sm:gap-3 h-28 sm:h-40">
        {bars.map((bar, i) => {
          const barProgress = isMobile ? 1 : progress;
          return (
            <div key={bar.label} className="flex flex-col items-center gap-1">
                <motion.div
                className="w-7 sm:w-10 rounded-t-md"
                style={{
                  backgroundColor: bar.color,
                  height: `${bar.height * barProgress}%`,
                  opacity: 0.3 + barProgress * 0.7,
                }}
                initial={{ height: 0 }}
                animate={{ height: `${bar.height * barProgress}%` }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                  delay: i * 0.08,
                }}
              />
              <span className="text-[10px] text-muted-foreground font-mono">
                {bar.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollHistogram;
