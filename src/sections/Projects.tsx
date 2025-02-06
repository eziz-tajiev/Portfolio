import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "project one",
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
    company: "project two",
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
        <p>Real-world Results</p>
        <h2>Featured Projects</h2>
        <p>See how I transformed concepts into engaging digital experiences.</p>
        <div>
          {portfolioProjects.map((project) => (
            <div key={project.title}>
              <div>
                <span>{project.company}</span>
                <span>{project.year}</span>
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
