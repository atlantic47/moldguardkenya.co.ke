import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import ServicesSection from "./components/ServicesSection";
import FAQSection from "./components/FAQSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import HomepageDeepLinks from "./components/HomepageDeepLinks";
import MarkdownRenderer from "./components/MarkdownRenderer";
import { getRawMarkdownFile } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "MoldGuard Kenya | Professional Mold Removal, Remediation and Treatment Services Company in Nairobi, Kenya",
  description: "MoldGuard Kenya is the leading professional mold removal company in Kenya. We provide certified mold inspections, safe black mold eradication, and permanent moisture solutions for homes and businesses.",
  alternates: { canonical: "https://moldguardkenya.co.ke" },
};

function generateFAQSchema(content: string) {
  const faqSection = content.split("## FAQ")[1];
  if (!faqSection) return null;

  const faqs = [];
  const parts = faqSection.split("### ").slice(1);

  for (const part of parts) {
    const lines = part.split("\n");
    const question = lines[0].trim();
    const answer = lines.slice(1).join(" ").trim().replace(/\*/g, "");
    if (question && answer) {
      faqs.push({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
        }
      });
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs
  };
}

export default async function Home() {
  const { content } = getRawMarkdownFile("homepage.md");
  const faqSchema = generateFAQSchema(content);

  // The HeroSection already contains the intro paragraphs, so we start the markdown from Key Takeaways to avoid repetition.
  const keyTakeawaysIndex = content.indexOf("### Key Takeaways");
  let mainContent = keyTakeawaysIndex !== -1 ? content.substring(keyTakeawaysIndex) : content;

  // The FAQSection already contains the beautifully styled FAQ accordion, so we stop the markdown before it.
  const faqIndex = mainContent.indexOf("## FAQ");
  if (faqIndex !== -1) {
    mainContent = mainContent.substring(0, faqIndex);
  }

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <ServicesSection />

        {/* We render the core markdown content here. This replaces the hardcoded WhoWeAre, HowItWorks, and WhyChooseUs summary components to ensure NO repetition, while maintaining the full 2500-word SEO value exactly as requested. */}
        <section className="container py-12" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <MarkdownRenderer content={mainContent} />
        </section>

        <FAQSection />
        <HomepageDeepLinks />
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
}
