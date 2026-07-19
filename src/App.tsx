import { AIAssistant } from "./components/AIAssistant";
import { AppMockup } from "./components/AppMockup";
import { BuiltFor } from "./components/BuiltFor";
import { Demo } from "./components/Demo";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { ForeverPayment } from "./components/ForeverPayment";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { OurStory } from "./components/OurStory";
import { Pricing } from "./components/Pricing";
import { Roadmap } from "./components/Roadmap";
import { TemplateShowcase } from "./components/TemplateShowcase";
import { WhyLeaveSubscriptions } from "./components/WhyLeaveSubscriptions";
import { SectionDivider } from "./components/ui/Section";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <AppMockup />
        <SectionDivider />
        <Demo />
        <BuiltFor />
        <WhyLeaveSubscriptions />
        <ForeverPayment />
        <SectionDivider />
        <Features />
        <TemplateShowcase />
        <OurStory />
        <Pricing />
        <Roadmap />
        <AIAssistant />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
