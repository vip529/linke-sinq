import { FeatureCard } from './featureCard';

const features = [
  {
    id: 'knowledge-capsules',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Knowledge Capsules icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: 'Knowledge Capsules',
    description:
      'Transform any resource into interactive learning blocks with AI-powered summaries, key insights, and spaced repetition prompts.',
  },
  {
    id: 'curated-learning-paths',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Curated Learning Paths icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'Curated Learning Paths',
    description:
      'Follow expert-curated and AI-suggested learning paths designed to take you from curiosity to mastery through structured progression.',
  },
  {
    id: 'project-based-learning',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Project-Based Learning icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: 'Project-Based Learning',
    description:
      'Learn by building real projects with step-by-step guidance, integrated resources, and completion tracking.',
  },
  {
    id: 'smart-search',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Smart Search icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    title: 'Smart Search',
    description:
      'Semantic AI search that understands context, suggests follow-ups, and helps you discover connections between your saved resources.',
  },
];

export const FeaturesSection = () => {
  return (
    <section className="relative px-6 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-accent-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary mb-4">
            Everything you need to learn <span className="text-accent-primary">efficiently</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A complete learning intelligence system designed for developers and lifelong learners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
