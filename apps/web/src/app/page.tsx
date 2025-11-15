import { FeaturesSection } from '~/components/landing/featuresSection';
import { Footer } from '~/components/landing/footer';
import { Header } from '~/components/landing/header';
import { HeroSection } from '~/components/landing/heroSection';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <FeaturesSection />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
