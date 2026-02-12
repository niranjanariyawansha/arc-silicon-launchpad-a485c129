import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useIsMobile } from "@/hooks/use-mobile";

interface ScrollFillTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

/**
 * Text that fills from bottom-to-top with gradient color as user scrolls.
 * On mobile, renders as a simple gradient text for performance.
 */
const ScrollFillText = ({ children, className = "", as: Tag = "h2" }: ScrollFillTextProps) => {
  const { ref, progress } = useScrollProgress(0.2);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Tag className={`gradient-text ${className}`}>
        {children}
      </Tag>
    );
  }

  // Fill percentage from bottom to top
  const fillPct = Math.round(progress * 100);

  return (
    <div ref={ref}>
      <Tag
        className={className}
        style={{
          background: `linear-gradient(to top, hsl(var(--arc-blue)) ${fillPct}%, hsl(var(--border)) ${fillPct}%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          transition: "background 0.05s linear",
        }}
      >
        {children}
      </Tag>
    </div>
  );
};

export default ScrollFillText;
