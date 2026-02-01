import Herosection from "./component/herosection";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import SkillSection from "./component/SkillSection";
import EmailSection from "./component/EmailSection";
import ProjectSection from "./component/ProjectSection";
import Achievements from "./component/Achievements";
import ArticleSection from "./component/ArticleSection";
import ThreeBackground from "./component/ThreeBackground";
import ExpSection from "./component/ExpSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative font-serif">
      {/* 3D Background */}
      <ThreeBackground />

      {/* Content */}
      <Navbar />
      <div className="container mx-auto px-12 py-20 mt-10">
        <Herosection />
        <ExpSection />
        <Achievements />
        <SkillSection />
        <ProjectSection />
        <ArticleSection />
        <AboutSection />
        <EmailSection />
      </div>
    </main>
  );
}
