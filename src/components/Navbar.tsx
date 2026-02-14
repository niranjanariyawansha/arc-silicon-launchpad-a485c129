import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
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
  };

  const handleNavClick = (e: React.MouseEvent, link: { label: string; href: string }) => {
    if (link.href.startsWith("/")) {
      e.preventDefault();
      navigate(link.href);
    }
    // hash links work naturally
  };

  return (
    <>
      {/* Top navbar - visible when not scrolled */}
      <AnimatePresence>
        {!scrolled && (
          <motion.nav
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
              <button onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer">
                <img src={logo} alt="ASC" className="h-9 w-9 rounded-lg object-cover" />
                <span className="font-display text-lg font-bold tracking-tight text-foreground">
                  ASC
                </span>
              </button>
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
              <a
                href="#contact"
                className="hidden sm:inline-flex h-9 px-5 items-center rounded-full text-sm font-semibold text-primary-foreground gradient-border transition-transform hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Bottom floating navbar - visible when scrolled */}
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-background/90 border border-border/60 rounded-2xl shadow-2xl px-6 py-3 mx-auto"
          >
            <div className="flex items-center gap-6">
              <button onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
                <img src={logo} alt="ASC" className="h-8 w-8 rounded-lg object-cover" />
                <span className="font-display text-sm font-bold tracking-tight text-foreground">
                  ASC
                </span>
              </button>
              <div className="hidden md:flex items-center gap-5">
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
    </>
  );
};

export default Navbar;
