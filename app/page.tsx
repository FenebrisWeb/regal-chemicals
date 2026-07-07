import Hero from "@/app/components/sections/hero";
import BrandTrust from "@/app/components/sections/brand-trust";
import HighlightCards from "@/app/components/sections/highlight-cards";
import FeatureCards from "@/app/components/sections/feature-cards";
import RecentPosts from "@/app/components/sections/recent-posts";
import CareersCta from "@/app/components/sections/careers-cta";
import ContactInfo from "@/app/components/sections/contact-info";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandTrust />
      <HighlightCards />
      <FeatureCards />
      <RecentPosts />
      <CareersCta />
      <ContactInfo />
    </>
  );
}
