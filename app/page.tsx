import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";
import StatsBar from "./components/StatsBar";
import ServicesSection from "./components/ServicesSection";
import FAQSection from "./components/FAQSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import HomepageDeepLinks from "./components/HomepageDeepLinks";

export const metadata: Metadata = {
  title: "MoldGuard Kenya | Professional Mold Removal & Remediation",
  description: "MoldGuard Kenya is the leading professional mold removal company in Kenya. We provide certified mold inspections, safe black mold eradication, and permanent moisture solutions for homes and businesses.",
  alternates: { canonical: "https://moldguardkenya.co.ke" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <WhoWeAre />
        <WhyChooseUs />
        <StatsBar />
        <ServicesSection />
        <FAQSection />
        <HomepageDeepLinks />
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
}
