import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg"
import myPhoto from "@/assets/images/myPhoto.jpg"
import Image from "next/image";
import JsIcon from "@/assets/icons/square-js.svg"
import HtmlIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import GihubIcon from "@/assets/icons/github.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import TailwindIcon from "@/assets/icons/tailwindcss.svg"
import TsIcon from "@/assets/icons/typescript.svg"
import NextJsIcon from "@/assets/icons/nextjs.svg"
import ReduxIcon from "@/assets/icons/redux.svg"
import { TechIcon } from "@/components/TechIcon";


const toolboxItems1 = [
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "JavaScript",
    iconType: JsIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "GitHub",
    iconType: GihubIcon,
  },
]

const toolboxItems2 = [
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Tailwind Css",
    iconType: TailwindIcon,
  },
  {
    title: "TypeScript",
    iconType: TsIcon,
  },
  {
    title: "NextJs",
    iconType: NextJsIcon,
  },
  {
    title: "Redux",
    iconType: ReduxIcon,
  },
]

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
            <div>
              {toolboxItems1.map(item => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
    </div>
  );
};
