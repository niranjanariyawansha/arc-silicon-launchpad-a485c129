import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import circuitImg from "@/assets/unsplash-circuit.jpg";
import serverImg from "@/assets/unsplash-server.jpg";
import networkImg from "@/assets/unsplash-network.jpg";

const pillars = [
  {
    image: circuitImg,
    title: "Deterministic Processing",
    description:
      "Every clock cycle is predictable. Zero jitter, zero surprises — mission-critical reliability for financial and telecom infrastructure.",
  },
  {
    image: serverImg,
    title: "Silicon-Proven IP",
    description:
      "Verified at gate-level for TSMC FinFET nodes. Not just simulated — proven in real synthesis flows with timing closure at 1 GHz.",
  },
  {
    image: networkImg,
    title: "10Gbps-Era Ready",
    description:
      "Designed from day one for next-gen network speeds. 8 Gbps sustained throughput today, architected to scale beyond 10 Gbps.",
  },
];

const WhyAscSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative py-16 md:py-32 px-4 sm:px-6 overflow-hidden">
      {!isMobile && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(165deg, hsl(var(--background)) 50%, hsl(var(--arc-yellow) / 0.25) 50%)`,
          }}
        />
      )}

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold text-center text-foreground mb-4">
          Why ASC
        </h2>
        <p className="text-center text-muted-foreground mb-4 md:mb-6 text-base md:text-lg px-2">
          The unfair advantage in silicon-speed data processing.
        </p>
        <p className="text-center font-signature text-lg md:text-xl text-muted-foreground/50 mb-10 md:mb-16">
          — 30 years of wisdom, 1 GHz of future
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 16,
                delay: i * 0.1,
              }}
            >
              <div className="w-full h-32 sm:h-40 rounded-2xl overflow-hidden mb-4 sm:mb-6">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{p.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAscSection;
