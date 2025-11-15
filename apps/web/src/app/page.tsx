import { FeaturesSection } from '~/modules/landing/featuresSection';
import { Footer } from '~/modules/landing/footer';
import { Header } from '~/modules/landing/header';
import { HeroSection } from '~/modules/landing/heroSection';

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
