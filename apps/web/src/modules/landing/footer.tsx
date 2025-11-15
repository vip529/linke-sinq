export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-primary/50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-text-primary mb-1">LinkeSinq</h3>
            <p className="text-sm text-text-tertiary">Learn intelligently.</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-text-tertiary">
              © {currentYear} LinkeSinq. All rights reserved.
            </p>
            <p className="text-xs text-text-tertiary">
              Built with precision. Designed for learners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
