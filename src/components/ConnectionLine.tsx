import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useIsMobile } from "@/hooks/use-mobile";

interface ConnectionLineProps {
  color?: string;
  height?: number;
}

const ConnectionLine = ({ color = "hsl(var(--arc-red))", height = 120 }: ConnectionLineProps) => {
  const { ref, progress } = useScrollProgress(0.3);
  const isMobile = useIsMobile();

  return (
    <div ref={ref} className="flex justify-center py-2 md:py-4">
      <motion.div
        style={{
          width: isMobile ? 6 : 50,
          height: isMobile ? Math.min(height, 60) : height,
          backgroundColor: color,
          borderRadius: isMobile ? 3 : 25,
          transformOrigin: "top",
          scaleY: isMobile ? 1 : progress,
        }}
        transition={{ type: "spring", stiffness: 100 }}
      />
    </div>
  );
};

export default ConnectionLine;
