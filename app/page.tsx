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

export const metadata: Metadata = {
  title: "MoldGuard Kenya | Professional Mould Removal & Remediation",
  description: "MoldGuard Kenya is the leading professional mould removal company in Kenya. We provide certified mould inspections, safe black mould eradication, and permanent moisture solutions for homes and businesses.",
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
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
}
