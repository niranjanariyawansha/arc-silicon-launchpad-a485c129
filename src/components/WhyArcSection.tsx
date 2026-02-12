import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, CircuitBoard, Gauge } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Deterministic Processing",
    description: "Every clock cycle is predictable. Zero jitter, zero surprises — mission-critical reliability for financial and telecom infrastructure.",
    color: "text-arc-blue",
    bg: "bg-arc-blue/10",
  },
  {
    icon: CircuitBoard,
    title: "Silicon-Proven IP",
    description: "Verified at gate-level for TSMC FinFET nodes. Not just simulated — proven in real synthesis flows with timing closure at 1 GHz.",
    color: "text-arc-red",
    bg: "bg-arc-red/10",
  },
  {
    icon: Gauge,
    title: "10Gbps-Era Ready",
    description: "Designed from day one for next-gen network speeds. 8 Gbps sustained throughput today, architected to scale beyond 10 Gbps.",
    color: "text-arc-green",
    bg: "bg-arc-green/10",
  },
];

const WhyArcSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center text-foreground mb-4">
          Why ARC Silicon
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          The unfair advantage in silicon-speed data processing.
        </p>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="text-center flex flex-col items-center"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${p.bg} flex items-center justify-center mb-6`}>
                <p.icon className={`w-8 h-8 ${p.color}`} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyArcSection;
