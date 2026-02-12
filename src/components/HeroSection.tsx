import { motion, useSpring } from "framer-motion";
import { useScrollVelocity } from "@/hooks/useScrollProgress";
import logo3D from "@/assets/logo_3D.png";
import ScrollFillText from "./ScrollFillText";

const HeroSection = () => {
  const velocity = useScrollVelocity();
  // Logo rotation speed reacts to scroll velocity
  const rotateSpeed = useSpring(velocity * 360, { stiffness: 80, damping: 20 });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-arc-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-arc-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.img
          src={logo3D}
          alt="ARC Silicon 3D Logo"
          className="w-40 h-40 md:w-56 md:h-56 object-contain mb-10 drop-shadow-2xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ rotate: rotateSpeed }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
        >
          <ScrollFillText
            as="h1"
            className="font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
          >
            The Deterministic Standard.
          </ScrollFillText>
        </motion.div>

        <motion.p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.4 }}
        >
          Architecting the world's fastest JSON structural scanners. Verified at{" "}
          <span className="font-semibold text-foreground">1.0 GHz</span> for 16nm and 7nm ASIC targets.
        </motion.p>

        {/* Founder's signature */}
        <motion.p
          className="mt-4 font-signature text-2xl text-muted-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          — Silicon, Redefined
        </motion.p>

        <motion.div
          className="mt-10 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.6 }}
        >
          <a
            href="#products"
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

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-border" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
