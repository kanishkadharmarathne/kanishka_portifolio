import Herosection from "./component/herosection";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import SkillSection from "./component/SkillSection";
import EmailSection from "./component/EmailSection";
import ProjectSection from "./component/ProjectSection";
import Achievements from "./component/Achievements";
import ArticleSection from "./component/ArticleSection";
import ExpSection from "./component/ExpSection";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      {/* Static grid + glow backdrop */}
      <div className="site-backdrop" aria-hidden="true" />

      <Navbar />
      <main className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Herosection />
        <Achievements />
        <ExpSection />
        <SkillSection />
        <ProjectSection />
        <ArticleSection />
        <AboutSection />
        <EmailSection />
      </main>
      <Footer />
    </>
  );
}
