import Hero from "@/app/components/sections/hero";
import BrandTrust from "@/app/components/sections/brand-trust";
import CtaStrip from "@/app/components/sections/cta-strip";
import HighlightCards from "@/app/components/sections/highlight-cards";
import ProductCarousel from "@/app/components/sections/product-carousel";
import FeatureCards from "@/app/components/sections/feature-cards";
import RecentPosts from "@/app/components/sections/recent-posts";
import CareersCta from "@/app/components/sections/careers-cta";
import ContactInfo from "@/app/components/sections/contact-info";
import Reveal from "@/app/components/ui/reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <BrandTrust />
      </Reveal>
      {/* <CtaStrip
        title="Ready to Start Your Next Project?"
        description="Talk to our technical team about the right Regal system for your application."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="Explore Products"
        secondaryHref="/products"
      /> */}
      <HighlightCards />
      <ProductCarousel />
      <Reveal>
        <CareersCta />
      </Reveal>
      <FeatureCards />
      <ContactInfo />
    </>
  );
}
