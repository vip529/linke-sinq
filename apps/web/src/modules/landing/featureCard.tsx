import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative p-6 bg-bg-secondary/50 backdrop-blur-sm border border-border-primary/50 rounded-2xl hover:bg-bg-secondary transition-all duration-500 hover:scale-[1.02] hover:shadow-glow-sm">
      <div className="absolute inset-0 bg-linear-to-br from-accent-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <div className="w-12 h-12 mb-4 text-accent-primary flex items-center justify-center bg-accent-primary/10 rounded-xl group-hover:bg-accent-primary/20 transition-all duration-500">
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
