import { AIAssistant } from "./components/AIAssistant";
import { AppMockup } from "./components/AppMockup";
import { BuiltFor } from "./components/BuiltFor";
import { BusinessWorkflow } from "./components/BusinessWorkflow";
import { Demo } from "./components/Demo";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { ForeverPayment } from "./components/ForeverPayment";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { OfflinePrivacy } from "./components/OfflinePrivacy";
import { Pricing } from "./components/Pricing";
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
        <BusinessWorkflow />
        <Features />
        <OfflinePrivacy />
        <AIAssistant />
        <TemplateShowcase />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
