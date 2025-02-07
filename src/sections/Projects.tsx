import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg"

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
    <div>
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Real-world Results</p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">Featured Projects</h2>
        <p className="text-center text-white/60 mt-4">See how I transformed concepts into engaging digital experiences.</p>
        <div className="flex flex-col mt-10">
          {portfolioProjects.map((project) => (
            <div key={project.title} 
                className="bg-gray-800 rounded-3xl overflow-hidden outline outline-2 outline-white/20 -outline-offset-2 p-8">
              <div className="flex">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest
                text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4"/>
              <ul>
                {project.results.map((result) => 
                <li className="flex gap-2 text-sm text-white/50">
                  <CheckIcon className="size-5" />
                  <span>{result.title}</span>
                </li>
              )}
              </ul>
              <a href="">
                <button>Viev Live Site</button>
              </a>
              <Image src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
