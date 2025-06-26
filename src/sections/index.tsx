import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { RadioPlayer } from "../components/RadioPlayer";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { HeroSection } from "./HeroSection";
import { PlansSection } from "./PlanSection";
import { ServicesSection } from "./ServiceSection";
import './animations.css'

export const Main: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PlansSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default Main;