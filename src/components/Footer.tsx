const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      {/* Gradient accent line */}
      <div className="h-1 w-32 mx-auto rounded-full gradient-border mb-12" />

      <div className="max-w-4xl mx-auto text-center">
        <p className="font-display text-lg font-semibold text-foreground mb-2">
          ARC Silicon (Pvt) Ltd.
        </p>
        <p className="text-muted-foreground text-sm mb-6">
          Advanced Runtime Cores · Built for the 10Gbps Era
        </p>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="#products" className="hover:text-foreground transition-colors">Products</a>
          <a href="#verification" className="hover:text-foreground transition-colors">Verification</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} ARC Silicon (Pvt) Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
