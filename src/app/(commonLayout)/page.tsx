import Categories from "@/components/modules/home/Categories";
import ClientLogos from "@/components/modules/home/ClientLogos";
import FeaturedJobs from "@/components/modules/home/FeaturedJobs";
import HeroSection from "@/components/modules/home/HeroSection";
import LatestJobs from "@/components/modules/home/LatestJobs";
import PromoBanner from "@/components/modules/home/PromoBanner";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ClientLogos />
      <Categories />
      <PromoBanner />
      <FeaturedJobs />
      <LatestJobs />
    </main>
  );
}