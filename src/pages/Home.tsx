import Navbar from "@/components/Navbar";
import HeroSection from "./HeroSection";
import QuoteSection from "./QuoteSection";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* navbar */}
      <Navbar />
      {/* hero section */}
      <HeroSection />
      {/* quote section */}
      <QuoteSection />
      {/* projects section */}
      <ProjectSection />
      {/* skills section */}
      <SkillSection />
      {/* about me section */}
      <AboutSection />
      {/* contact section */}
      <ContactSection />
      {/* footer section */}
      <FooterSection />
    </div>
  );
};

export default Home;
