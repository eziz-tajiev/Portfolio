"use client";

import photo1 from "@/assets/images/dark-saas-landing-page.png";
import photo2 from "@/assets/images/light-saas-landing-page.png";
import photo3 from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { motion } from "framer-motion";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "Project one",
    year: "2022",
    title: "Fitness Website",
    results: [
      { title: "Project Description" },
      { title: "Project Description" },
      { title: "Project Description" },
    ],
    link: "fitgym",
    image: photo1,
  },
  {
    company: "Project Two",
    year: "2021",
    title: "Github User Search",
    results: [
      { title: "Project Description" },
      { title: "Project Description" },
      { title: "Project Description" },
    ],
    link: "Github",
    image: photo2,
  },
  {
    company: "Project Three",
    year: "2023",
    title: "Nextjs Dashboard",
    results: [
      { title: "Project Description" },
      { title: "Project Description" },
      { title: "Project Description" },
    ],
    link: "dashboard",
    image: photo3,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real Results"
          title="Featured Projects"
          description="See what I’ve been working on"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-16">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 z-10 sticky top-16"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <article>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <header>
                      <div
                        className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest
                      text-sm text-transparent bg-clip-text"
                      >
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                        {project.title}
                      </h3>
                      <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    </header>
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li
                          key={project.title}
                          className="flex gap-2 text-white/50 text-sm md:text-base"
                        >
                          <CheckIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={project.link}
                      aria-label={`Visit the live site for \${project.title}`}
                    >
                      <motion.div
                        whileHover="hover"
                        className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center
                      gap-2 mt-8 md:w-auto px-6"
                      >
                        <span>Visit Live Site</span>
                        <motion.div
                          variants={{
                            hover: {
                              x: 3,
                              y: -3,
                            },
                          }}
                        >
                          <ArrowUpRight className="size-4" />
                        </motion.div>
                      </motion.div>
                    </Link>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
