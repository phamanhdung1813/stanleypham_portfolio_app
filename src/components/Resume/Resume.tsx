import { Download, ExternalLink, MapPin } from "lucide-react";
import Experience from "./Expericence";
import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectsAPI } from "./ProjectAPI";
import { ExperienceAPI } from "./ExperienceAPI";
import myResume from "/profile/Resume/StanleyPham_Resume.pdf";

const Resume: React.FC = () => {
  const [activeSection, setActiveSection] = useState("skills");
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const handleScrollToSection = (
    sectionId: string,
    sectionRef: React.RefObject<HTMLDivElement>
  ) => {
    const navbarHeight = 70; // Adjust the navbar height
    const offset = 20; // Additional offset for visual comfort

    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - navbarHeight - offset,
        behavior: "smooth",
      });
    }
    setActiveSection(sectionId); // Update active section on click
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      // rootMargin: "-20% 0px -80% 0px", // Adjust these values as needed
      rootMargin: "-10% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const refs = [skillsRef, experienceRef, educationRef, projectRef];
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const sectionData = [
    { id: "skills", label: "SKILLS", ref: skillsRef },
    { id: "experience", label: "EXPERIENCE", ref: experienceRef },
    { id: "education", label: "EDUCATION", ref: educationRef },
    { id: "project", label: "PROJECTS", ref: projectRef },
  ];

  return (
    <div className="mt-8 flex min-h-screen dark:bg-neutral-800 dark:text-neutral-100 bg-neutral-100 text-neutral-800">
      {/* Sidebar */}
      <aside className=" flex-col justify-between w-64 border-r dark:border-neutral-800 border-neutral-500 p-6 hidden md:flex sticky top-1 h-screen">
        <div>
          <h1 className="mb-8 mt-8 text-2xl font-bold dark:text-green-400 text-green-600">
            Resume
          </h1>

          <nav className="space-y-6">
            {sectionData.map((item) => (
              <div key={item.id}>
                <h2
                  onClick={() => handleScrollToSection(item.id, item.ref)}
                  className={`mb-2 text-lg font-semibold ${
                    activeSection === item.id
                      ? "dark:text-green-400 text-green-600"
                      : "dark:text-zinc-300 text-neutral-800 transition-transform duration-200 transform hover:scale-110 hover:origin-center"
                  } hover:text-green-500 cursor-pointer transition duration-200`}
                >
                  {item.label}
                </h2>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-auto pt-6">
          <div className="space-y-4">
            <button
              className="w-full flex items-center justify-center 
            text-neutral-800 bg-green-500 hover:bg-green-600
            dark:bg-green-600 dark:hover:bg-green-700 dark:text-white py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <a href={myResume} download className="flex items-center">
                <Download className="mr-2 h-5 w-5 text-white" />
                <span className="text-lg font-semibold">Download (PDF)</span>
              </a>
            </button>

            <button className="w-full flex items-center justify-center border border-zinc-700 hover:bg-zinc-800 text-white py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              <a
                href={myResume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLink className="mr-2 h-5 w-5 dark:text-white text-neutral-800 dark:bg-neutral-800 bg-neutral-100" />
                <span className="dark:text-white text-neutral-800 hover:text-neutral-100 text-lg font-semibold">
                  Preview in browser
                </span>
              </a>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <section>
          {/* Skills */}
          <h2
            id="skills"
            ref={skillsRef}
            className="mt-16 mb-4 text-3xl font-bold dark:text-green-400 text-green-600"
          >
            Skills
          </h2>

          <div>
            <h2 className="text-base font-semibold mb-2">
              • Programming/Databases:{" "}
              <span className="text-sm font-semibold text-zinc-500">
                Java, Golang, Python, TypeScript, Oracle, MySQL, PostgreSQL.
              </span>
            </h2>
            <h2 className="text-base font-semibold mb-2">
              • DevOps/Cloud:{" "}
              <span className="text-sm font-semibold text-zinc-500">
                Docker, Kubernetes, Bitbucket, Git, Jenkins, Kafka, AWS, GCP,
                Linux, IBM FileNet.
              </span>
            </h2>

            <h2 className="text-base font-semibold mb-2">
              • Frameworks:{" "}
              <span className="text-sm font-semibold text-zinc-500">
                Spring Boot, Go Gin, gRPC, Spring Security, React, Thymeleaf.
              </span>
            </h2>

            <h2 className="text-base font-semibold mb-2">
              • Project Management:{" "}
              <span className="text-sm font-semibold text-zinc-500">
                Agile, Scrum.
              </span>
            </h2>
            <h2 className="text-base font-semibold mb-2"></h2>
          </div>
        </section>
        <hr className="border-t-2 dark:border-neutral-300 border-neutral-800" />

        {/* Expericence */}
        <section>
          <h2
            ref={experienceRef}
            id="experience"
            className="mt-2 mb-0 text-3xl font-bold dark:text-green-400 text-green-600"
          >
            Experience
          </h2>

          {ExperienceAPI.map((exp: any) => (
            <Experience
              title={exp.title}
              workingDate={exp.workingDate}
              companyName={exp.companyName}
              detail={exp.detail}
              description={exp.description}
              technologies={exp.technologies}
            />
          ))}
        </section>
        <hr className="border-t-2 dark:border-neutral-300 border-neutral-800" />
        {/* Education */}
        <section>
          <h2
            ref={educationRef}
            id="education"
            className="mb-4 mt-2 text-3xl font-bold dark:text-green-400 text-green-600"
          >
            Education
          </h2>
          <div className="mb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold">
              Seneca Polytechnic, College
            </h3>
            <span className="text-xs sm:text-base text-white">2019 – 2021</span>
          </div>
          <div className="mb-1 font-semibold sm:text-base dark:text-green-400 text-green-600 flex items-center gap-1">
            <span>Computer System Technology (3.8/4.0 GPA)</span>
          </div>
          <div className="mb-1 font-semibold sm:text-base text-zinc-500 flex items-center gap-1">
            <MapPin className="animate-wave inline-block ml-0 h-4 w-4 dark:text-green-400 text-green-600" />

            <span>1750 Finch Ave E, North York, ON M2J 2X5</span>
          </div>
          <h2 className="text-base font-semibold mb-2">
            <span className={"hover:text-green-400"}>• Awards </span>
            <span className="text-sm font-semibold text-zinc-500">
              Seneca President Honor List, Seneca Honor Award.
            </span>
          </h2>

          <h2 className="text-base font-semibold mb-2 ">
            <span className={"hover:text-green-400"}>• Certificates: </span>

            <span className="text-sm font-semibold text-zinc-500">
              AWS Certified Solutions Architect Associate Certification SAA-C03;
              AWS Solution Architecture deep-dive for SAP-C02; Master
              Microservices with Spring Boot and Spring Cloud, Spring Security
              Zero to Master along with JWT, OAUTH2.
            </span>
          </h2>
        </section>
        <hr className="border-t-2 dark:border-neutral-300 border-neutral-800" />

        {/* Project */}
        <section>
          <h2
            ref={projectRef}
            id="project"
            className="mt-4 mb-4 text-3xl font-bold dark:text-green-400 text-green-600"
          >
            Projects{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-neutral-400 dark:hover:text-green-400 text-neutral-800 hover:text-green-600"
              href="https://github.com/phamanhdung1813?tab=repositories"
            >
              (Visit my GitHub)
            </a>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-5">
            {ProjectsAPI.map((project: any) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                demoUrl={project.demoUrl}
                sourceUrl={project.sourceUrl}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;
