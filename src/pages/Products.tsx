import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fpgaImg from "@/assets/unsplash-fpga.jpg";
import chipImg from "@/assets/unsplash-chip.jpg";
import serverImg from "@/assets/unsplash-server.jpg";
import networkImg from "@/assets/unsplash-network.jpg";

const products = [
  {
    name: "VX-1 Soft Core",
    target: "FPGA-Optimized",
    speed: "500 MHz",
    image: fpgaImg,
    color: "arc-blue",
    description:
      "Optimized for Xilinx UltraScale+ FPGAs. Rapid prototyping with production-grade deterministic JSON scanning at sub-microsecond latencies.",
    features: [
      "Xilinx UltraScale+ optimized",
      "Sub-microsecond latency",
      "Hot-swappable configuration",
      "4 Gbps sustained throughput",
    ],
  },
  {
    name: "VX-1 Hard Core",
    target: "ASIC-Ready",
    speed: "1.0 GHz+",
    image: chipImg,
    color: "arc-red",
    description:
      "Fully synthesizable RTL targeting TSMC 16nm & 7nm FinFET. Silicon-proven performance with zero-jitter deterministic processing.",
    features: [
      "TSMC 16nm & 7nm FinFET",
      "Gate-level verified",
      "8 Gbps sustained throughput",
      "Zero-jitter guarantee",
    ],
  },
  {
    name: "NX-2 Network Accelerator",
    target: "10GbE Line-Rate",
    speed: "10 Gbps",
    image: networkImg,
    color: "arc-green",
    description:
      "Purpose-built for network-edge JSON inspection. Processes full 10GbE line-rate traffic with deterministic per-packet latency for financial and telecom infrastructure.",
    features: [
      "10GbE line-rate processing",
      "Per-packet deterministic latency",
      "Financial-grade reliability",
      "Inline deployment ready",
    ],
  },
  {
    name: "DX-1 Data Center Module",
    target: "Scale-Out",
    speed: "40 Gbps aggregate",
    image: serverImg,
    color: "arc-yellow",
    description:
      "Multi-core JSON processing module designed for data center workloads. Aggregates multiple VX-1 cores with intelligent load balancing and shared memory architecture.",
    features: [
      "Multi-core aggregation",
      "Intelligent load balancing",
      "Shared memory architecture",
      "Cloud-native integration",
    ],
  },
];

const spring = { type: "spring" as const, stiffness: 80, damping: 16 };

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(155deg, transparent 44%, hsl(217 89% 61% / 0.15) 44%, hsl(4 90% 58% / 0.12) 52%, hsl(43 97% 50% / 0.10) 60%, hsl(142 53% 43% / 0.08) 68%, transparent 80%)`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-extrabold text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
          >
            Our Products
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
          >
            Silicon IP cores engineered for the 10Gbps era. From FPGA prototyping to ASIC production.
          </motion.p>
        </div>
      </section>

      {/* Product cards */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              className={`group rounded-2xl overflow-hidden glass border-2 border-${product.color}/20 hover:border-${product.color}/50 transition-all hover:-translate-y-1 hover:shadow-2xl`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: i * 0.1 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-1">
                  {product.name}
                </h2>
                <p className={`text-sm font-semibold text-${product.color} mb-3`}>
                  {product.speed} · {product.target}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${product.color}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
