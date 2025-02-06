import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Project one",
    year: "2022",
    title: "fitness website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "fitgym",
    image: darkSaasLandingPage,
  },
  {
    company: "Project two",
    year: "2021",
    title: "github user search",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "Github",
    image: lightSaasLandingPage,
  },
  {
    company: "Project three",
    year: "2023",
    title: "Nextjs Dashboard",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
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
                className="bg-gray-800 rounded-3xl overflow-hidden outline outline-2 outline-white/20 -outline-offset-2">
              <div>
                <div>
                  <span>{project.company}</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <h3>{project.title}</h3>
              <hr />
              <ul>
                {project.results.map((result) => 
                <li>{result.title}</li>
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
