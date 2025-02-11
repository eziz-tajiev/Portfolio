import {Header} from '@/sections/Header'
import {HeroSection} from '@/sections/Hero'
import {ProjectsSection} from '@/sections/Projects'
import {TapeSection} from '@/sections/Tape';
import { QuotesSection } from '@/sections/Quotes';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <QuotesSection />
      
    </div>
  );
}
