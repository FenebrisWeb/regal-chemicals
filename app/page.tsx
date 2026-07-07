import Hero from "@/app/components/sections/hero";
import BrandTrust from "@/app/components/sections/brand-trust";
import CtaStrip from "@/app/components/sections/cta-strip";
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
      {/* <CtaStrip
        title="Ready to Start Your Next Project?"
        description="Talk to our technical team about the right Regal system for your application."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="Explore Products"
        secondaryHref="/products"
      /> */}
      <HighlightCards />
      <CareersCta />
      <FeatureCards />
      <ContactInfo />
    </>
  );
}
