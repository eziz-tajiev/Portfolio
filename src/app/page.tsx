import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { QuotesSection } from "@/sections/Quotes";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
// import { Footer } from '@/sections/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <QuotesSection />
      <AboutSection />
      <ContactSection />
      {/* <Footer /> */}
    </main>
  );
}
