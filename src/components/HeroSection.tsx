import { motion, useSpring } from "framer-motion";
import { useScrollVelocity } from "@/hooks/useScrollProgress";
import logo3D from "@/assets/logo_3D.png";
import ScrollFillText from "./ScrollFillText";

const HeroSection = () => {
  const velocity = useScrollVelocity();
  const rotateSpeed = useSpring(velocity * 360, { stiffness: 80, damping: 20 });

  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-center px-6 pt-16 pb-32 overflow-hidden">
      {/* Multi-color gradient diagonal — matching gradient-border button style */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(155deg, hsl(var(--background)) 42%, transparent 42%)`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(155deg, transparent 41%, hsl(217 89% 61% / 0.55) 41%, hsl(4 90% 58% / 0.50) 50%, hsl(43 97% 50% / 0.45) 59%, hsl(142 53% 43% / 0.40) 68%, transparent 78%)`,
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-arc-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-arc-red/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-arc-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        <motion.img
          src={logo3D}
          alt="ASC 3D Logo"
          className="w-40 h-40 md:w-56 md:h-56 object-contain mb-10 drop-shadow-2xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ rotate: rotateSpeed }}
        />

        <motion.h1
          className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-none font-bold tracking-wide text-arc-blue mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.15 }}
        >
          ASC — Advanced Silicon Cores
        </motion.h1>


        <motion.p
          className="mt-6 font-signature text-3xl md:text-4xl text-muted-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          — Silicon, Redefined
        </motion.p>

        <motion.div
          className="mt-14 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.6 }}
        >
          <a
            href="/products"
            className="inline-flex h-12 px-8 items-center rounded-full text-sm font-bold text-primary-foreground gradient-border transition-transform hover:scale-105 shadow-lg"
          >
            Explore Products
          </a>
          <a
            href="#verification"
            className="inline-flex h-12 px-8 items-center rounded-full text-sm font-medium border border-border text-foreground bg-background hover:bg-muted transition-colors"
          >
            See the Proof
          </a>
        </motion.div>
      </div>

      {/* Subtle scroll arrow */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2 text-muted-foreground/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-5 border-b-2 border-r-2 border-muted-foreground/30 rotate-45" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
