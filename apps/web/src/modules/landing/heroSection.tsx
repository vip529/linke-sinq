import { WaitListForm } from '../wait-list/waitListForm';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-accent-primary/5 via-transparent to-accent-primary/5 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-muted/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-text-primary mb-6 tracking-tight animate-fade-in-up animation-delay-100">
          Learn <span className="gradient-text">intelligently</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
          Transform scattered internet resources into structured learning through AI-powered
          curation, summaries, and personalized paths.
        </p>

        <div className="animate-fade-in-up animation-delay-300">
          <WaitListForm />
        </div>

        <p className="mt-6 text-sm text-text-tertiary animate-fade-in animation-delay-400">
          Join the waitlist to get early access and shape the future of learning.
        </p>
      </div>
    </section>
  );
};
