import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"

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
    image: darkSaasLandingPage,
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
    image: lightSaasLandingPage,
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
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Real-world Results</p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">Featured Projects</h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">See how I transformed concepts into engaging digital experiences.</p>
        <div className="flex flex-col mt-10 md:mt-20 gap-16">
          {portfolioProjects.map((project) => (
            <div key={project.title}
            className="relative bg-gray-800 rounded-3xl overflow-hidden outline outline-2 outline-white/20 -outline-offset-2 px-8 pt-8 md:pt-12 md:px-10 z-10">
              <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`
              }}></div>
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest
                text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => 
                  <li className="flex gap-2 text-white/50 text-sm md:text-base">
                    <CheckIcon className="size-5 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                )}
                </ul>
                <a href="">
                  <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="size-4" />
                  </button>
                </a>
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0" />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
