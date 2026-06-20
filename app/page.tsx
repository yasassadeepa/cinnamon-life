import Navigation from "./components/Navigation";
import OverviewSection from "./components/OverviewSection";
import PillarsSection from "./components/PillarsSection";
import FeaturesSection from "./components/FeaturesSection";
import TechnologySection from "./components/TechnologySection";
import RecommendationSection from "./components/RecommendationSection";
import InvestmentSection from "./components/InvestmentSection";
import ServicesSection from "./components/ServicesSection";
import PersonalizationSection from "./components/PersonalizationSection";
import TrackingSection from "./components/TrackingSection";
import BeyondSection from "./components/BeyondSection";
import AssumptionsSection from "./components/AssumptionsSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <OverviewSection />
        <div className="divider" />
        <PillarsSection />
        <div className="divider" />
        <FeaturesSection />
        <div className="divider" />
        <TechnologySection />
        <div className="divider" />
        <RecommendationSection />
        <div className="divider" />
        <InvestmentSection />
        <div className="divider" />
        <ServicesSection />
        <div className="divider" />
        <PersonalizationSection />
        <div className="divider" />
        <TrackingSection />
        <div className="divider" />
        <BeyondSection />
        <div className="divider" />
        <AssumptionsSection />
      </main>
    </>
  );
}
