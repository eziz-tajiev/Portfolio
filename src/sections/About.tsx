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
import AntDesign from "@/assets/icons/ant-design.svg"
import { TechIcon } from "@/components/TechIcon";
import myCv from "@/assets/images/myCv.png"
import { CardHeader } from "@/components/Card.Header";


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
  {
    title: "Ant Design",
    iconType: AntDesign,
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

const hobbies = [
  {
    title: "Music",
    emoji: '🎵'
  },
  {
    title: "Reading",
    emoji: '📚'
  },
  {
    title: "Hiking",
    emoji: '🥾'
  },
  {
    title: "Swimming",
    emoji: '🏊🏽‍♂️'
  },
  
]

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader 
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do."/>
          <div className="mt-20">

            <Card className="h-[320px]">
              <CardHeader
                title="My Photo"
                description="Explore my photo" />
              <div className="w-44 mx-auto mt-8">
                <Image src={myPhoto} alt="My Photo" />
              </div>
            </Card>

            <Card>
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <div>
                {toolboxItems1.map(item => (
                  <div key={item.title}>
                    <TechIcon component={item.iconType} />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Beyond the code"
                description="Explore my interest and hobbies beyond the digital realm"
              />
              <div>
                {hobbies.map(hobby=>(
                  <div key={hobby.title}>
                    <span>{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <CardHeader
                  title="My CV"
                  description="Click to the my CV and Explore more about me"
                />
              <Image src={myCv} alt="My CV" />
            </Card>

          </div>
        </div>
      </div>
  );
};
