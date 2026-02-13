import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useIsMobile } from "@/hooks/use-mobile";

interface ConnectionLineProps {
  color?: string;
  height?: number;
}

/**
 * A vertical line that "draws" itself downward based on scroll progress.
 * Connects narrative sections visually.
 */
const ConnectionLine = ({ color = "hsl(var(--arc-red))", height = 120 }: ConnectionLineProps) => {
  const { ref, progress } = useScrollProgress(0.3);
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <div ref={ref} className="flex justify-center py-4">
      <motion.div
        style={{
          width: 50,
          height,
          backgroundColor: color,
          borderRadius: 25,
          transformOrigin: "top",
          scaleY: progress,
        }}
        transition={{ type: "spring", stiffness: 100 }}
      />
    </div>
  );
};

export default ConnectionLine;
