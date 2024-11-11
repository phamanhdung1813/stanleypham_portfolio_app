import { ExternalLink, Code2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: { src: string; alt: string; title: string }[];
  demoUrl: string;
  sourceUrl: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  demoUrl,
  sourceUrl,
}: ProjectCardProps) {
  return (
    <div className="dark:bg-zinc-800 bg-neutral-100 border-2 dark:border-green-400 border-green-600 rounded-lg text-neutral-800 dark:text-white w-full max-w-xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_10px_#00ff9d]">
      <div className="p-6">
        <h2 className="dark:text-green-400 text-xl font-bold tracking-wider mb-4">
          {title}
        </h2>
        <img src={image} className="w-full h-full rounded-md mb-4" />
        <p className="text-neutral-800 dark:text-neutral-300 text-sm leading-relaxed mb-6">
          {description}
        </p>
        <div className="mb-6">
          <h3 className="dark:text-green-400 text-green-600 text-sm font-semibold tracking-wider mb-3">
            TECHNOLOGIES
          </h3>
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="w-12 h-12 transition-transform duration-200 transform hover:scale-125"
              >
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="w-full h-full object-contain"
                  title={tech.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href={demoUrl}
            className="flex items-center gap-2 px-4 py-2 border 
            dark:border-green-400 dark:text-green-400 rounded dark:hover:bg-green-400 dark:hover:text-neutral-800 
           border-green-600 text-green-600 hover:bg-green-500 hover:text-neutral-800 
            transition-colors duration-300 w-full md:w-auto"
          >
            <ExternalLink size={16} />
            Demo
          </a>
          <a
            href={sourceUrl}
            className="flex items-center gap-2 px-4 py-2 border 
            border-green-600 text-green-600  hover:bg-green-500 hover:text-neutral-800
            dark:border-green-400 dark:text-green-400 rounded dark:hover:bg-green-400 dark:hover:text-neutral-800 transition-colors duration-300 w-full md:w-auto"
          >
            <Code2 size={16} />
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
