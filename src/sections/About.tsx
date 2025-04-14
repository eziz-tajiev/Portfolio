"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import myPhoto from "@/assets/images/myPhoto.jpg";
import Image from "next/image";
import JsIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GihubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import TsIcon from "@/assets/icons/typescript.svg";
import NextJsIcon from "@/assets/icons/nextjs.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import AntDesign from "@/assets/icons/ant-design.svg";
import Sass from "@/assets/icons/sass.svg";
import myCv from "@/assets/images/myCv.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

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
];

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
  {
    title: "SASS/SCSS",
    iconType: Sass,
  },
];

const hobbies = [
  {
    title: "Music",
    emoji: "🎧",
    left: "3%",
    top: "0%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "7%",
    top: "28%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "67%",
    top: "45%",
  },
  {
    title: "Swimming",
    emoji: "🏊🏽‍♂️",
    left: "56%",
    top: "74%",
  },
];

export const AboutSection = () => {
  const hobbiesRef = useRef(null);
  const photoRef = useRef(null);
  const isInView = useInView(photoRef, { once: true });
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 md:gap-8 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Photo" description="Explore my photo" />
              <motion.div
                ref={photoRef}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 125, damping: 15 }}
                className="w-44 mx-auto mt-2 md:mt-0"
              >
                <Image src={myPhoto} alt="My Photo." />
              </motion.div>
            </Card>

            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolboxItems items={toolboxItems1} reverse={true} />
              <ToolboxItems
                items={toolboxItems2}
                className="mt-6"
                reverse={false}
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3 md:gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore my interest and hobbies beyond the digital realm"
                classname="px-6 py-6"
              />
              <div
                className="relative  w-[95%] h-[50%] m-auto"
                ref={hobbiesRef}
              >
                {hobbies.map((hobby) => (
                  <motion.div
                    drag
                    dragConstraints={hobbiesRef}
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My CV"
                description="Click to the my CV and Explore more about me"
              />
              <div className="absolute bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full size-20 top-[61%] left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center">
                <motion.div
                  initial={{ scale: 1, opacity: 0.7 }}
                  animate={{ scale: 1.3, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-10"
                />
                <Link href="/cv.pdf" target="_blank">
                  <Image src={myCv} alt="My CV" className="size-14" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
