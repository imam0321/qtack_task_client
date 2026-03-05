import Categories from "@/components/modules/home/Categories";
import ClientLogos from "@/components/modules/home/ClientLogos";
import FeaturedJobsList from "@/components/modules/home/FeaturedJobs/FeaturedJobsList";
import HeroSection from "@/components/modules/home/HeroSection";
import LatestJobsList from "@/components/modules/home/LatestJobs/LatestJobsList";
import PromoBanner from "@/components/modules/home/PromoBanner";

export default async function HomePage() {
  return (
    <main>
      <HeroSection />
      <ClientLogos />
      <Categories />
      <PromoBanner />
      <FeaturedJobsList />
      <LatestJobsList />
    </main>
  );
}
