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
      <div id="home">
        <HeroSection />
      </div>
      {/* quote section */}
      <QuoteSection />
      {/* projects section */}
      <div id="projects">
        <ProjectSection />
      </div>
      {/* skills section */}
      <SkillSection />
      {/* about me section */}
      <div id="aboutme">
        <AboutSection />
      </div>
      {/* contact section */}
      <div id="contact">
        <ContactSection />
      </div>
      {/* footer section */}
      <FooterSection />
    </div>
  );
};

export default Home;
