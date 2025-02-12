import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg"
import myPhoto from "@/assets/images/myPhoto.jpg"
import Image from "next/image";
export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader 
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do."/>
        <div>
          <Card>
            <div>
              <StarIcon />
              <h3>My Photo</h3>
              <p>Explore the my photo.</p>
            </div>
            <Image src={myPhoto} alt="My Photo" />
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>My Toolbox</h3>
              <p>Explore the technologies and tools I use to craft exceptional digital experiences.</p>
            </div>
          </Card>
        </div>
    </div>
  );
};
