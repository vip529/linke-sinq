export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-100 border-b border-border-primary/50 backdrop-blur-lg bg-bg-primary/80">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold text-text-primary tracking-tight">LinkeSinq</h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-text-tertiary">Private Beta</span>
          </div>
        </div>
      </div>
    </header>
  );
};
