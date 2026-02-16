const Footer = () => {
  return (
    <footer id="contact" className="py-10 md:py-16 px-4 sm:px-6 border-t border-border">
      <div className="h-1 w-24 sm:w-32 mx-auto rounded-full gradient-border mb-8 md:mb-12" />

      <div className="max-w-4xl mx-auto text-center">
        <p className="font-display text-base sm:text-lg font-semibold text-foreground mb-2">
          ASC — Advanced Silicon Cores (Pvt) Ltd.
        </p>
        <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
          Advanced Silicon Cores · Built for the 10Gbps Era
        </p>
        <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
          <a href="#products" className="hover:text-foreground transition-colors">Products</a>
          <a href="#verification" className="hover:text-foreground transition-colors">Verification</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="mt-6 sm:mt-8 text-[10px] sm:text-xs text-muted-foreground">
          © {new Date().getFullYear()} ASC — Advanced Silicon Cores (Pvt) Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
