import logo from "@/assets/logo.jpg";

const navLinks = ["Products", "Technology", "Verification", "Contact"];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ARC Silicon" className="h-9 w-9 rounded-lg object-cover" />
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            ARC Silicon
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden sm:inline-flex h-9 px-5 items-center rounded-full text-sm font-semibold text-primary-foreground gradient-border transition-transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
