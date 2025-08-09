import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import MarqueeSection from '@/components/sections/marquee-section';
import TokenomicsSection from '@/components/sections/tokenomics-section';
import RoadmapSection from '@/components/sections/roadmap-section';
import AboutSection from '@/components/sections/about-section';
import CommunitySection from '@/components/sections/community-section';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <MarqueeSection />
        <TokenomicsSection />
        <RoadmapSection />
        <AboutSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
