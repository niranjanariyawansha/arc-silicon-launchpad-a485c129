import logo3D from "@/assets/logo_3D.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-arc-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-arc-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <img
          src={logo3D}
          alt="ARC Silicon 3D Logo"
          className="w-40 h-40 md:w-56 md:h-56 object-contain animate-float mb-10 drop-shadow-2xl"
        />

        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
          ARC Silicon:{" "}
          <span className="gradient-text">The Deterministic Standard.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Architecting the world's fastest JSON structural scanners. Verified at{" "}
          <span className="font-semibold text-foreground">1.0 GHz</span> for 16nm and 7nm ASIC targets.
        </p>

        <div className="mt-10 flex gap-4">
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
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-border" />
      </div>
    </section>
  );
};

export default HeroSection;
