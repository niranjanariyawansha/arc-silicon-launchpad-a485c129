import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Docs", href: "/docs" },
  { label: "Benchmarks", href: "/benchmarks" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, link: { label: string; href: string }) => {
    if (link.href.startsWith("/")) {
      e.preventDefault();
      navigate(link.href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {!scrolled && (
          <motion.nav
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
              <button onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer z-50 relative">
                <img src={logo} alt="ASC" className="h-9 w-9 rounded-lg object-cover" />
                <span className="font-display text-lg font-bold tracking-tight text-foreground">
                  ASC
                </span>
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="hidden sm:flex items-center gap-4">
                <a
                  href="#contact"
                  className="h-9 px-5 flex items-center rounded-full text-sm font-semibold text-primary-foreground gradient-border transition-transform hover:scale-105"
                >
                  Get in Touch
                </a>
              </div>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden p-2 z-50 text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Fullscreen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-3xl font-display font-bold text-foreground hover:text-arc-blue transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-8 py-3 rounded-full text-lg font-semibold text-primary-foreground gradient-border"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bottom Nav (Desktop Only for simpler mobile experience, or could adapt) */}
      {/* For this overhaul, we'll keep it desktop-only or hide it on mobile if the top bar + hamburger handles it. 
          The user requested "Hamburger Menu", which usually replaces persistent bars on mobile. 
          Let's hide the floating nav on mobile to avoid clutter (`hidden md:flex` or similar logic). */}

      <AnimatePresence>
        {scrolled && (
          <motion.nav
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-background/90 border border-border/60 rounded-2xl shadow-2xl px-6 py-3 mx-auto hidden md:block"
          >
            <div className="flex items-center gap-6">
              <button onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
                <img src={logo} alt="ASC" className="h-8 w-8 rounded-lg object-cover" />
                <span className="font-display text-sm font-bold tracking-tight text-foreground">
                  ASC
                </span>
              </button>
              <div className="flex items-center gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex h-8 px-4 items-center rounded-full text-xs font-semibold text-primary-foreground gradient-border transition-transform hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Scrolled Header (Mini) - Optional, replacing floating nav for mobile */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/90 backdrop-blur-md border-b border-border/50 flex items-center justify-between px-6 md:hidden"
          >
            <button onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer">
              <img src={logo} alt="ASC" className="h-8 w-8 rounded-lg object-cover" />
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                ASC
              </span>
            </button>
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
