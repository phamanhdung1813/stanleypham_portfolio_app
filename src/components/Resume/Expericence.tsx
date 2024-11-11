import { MapPin, TerminalIcon } from "lucide-react";
import React from "react";
import { GiAchievement } from "react-icons/gi";

type ExperienceProps = {
  title: string;
  workingDate: string;
  companyName: string;
  detail: string;
  description: string[];
  technologies: { src: string; alt: string; title: string }[];
};

const Experience: React.FC<ExperienceProps> = ({
  title,
  workingDate,
  companyName,
  detail,
  description,
  technologies,
}) => {
  return (
    <div className="mb-0 p-4 dark:bg-neutral-800 bg:neutral-100 rounded-lg">
      {/* Title and Working Date Row */}
      <div className="mb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
        <span className="text-xs sm:text-base text-white">{workingDate}</span>
      </div>
      {/* Company Name and Detail */}
      <div className="mb-1 font-semibold sm:text-base dark:hover:text-green-500 hover:text-green-600 dark:text-white text-neutral-800  flex items-center gap-1">
        <MapPin className="animate-wave inline-block ml-0 h-4 w-4 dark:text-green-400 text-green-600" />
        <span>{companyName}</span>
      </div>
      <div className="mb-2 text-sm dark:text-neutral-400 text-neutral-500">
        {detail}
      </div>
      {/* Technologies Section */}
      <div className="mb-4">
        <p className="mb-1 text-base font-semibold text-white">
          <TerminalIcon className="animate-wave inline-block ml-0 h-4 w-4 dark:text-green-400 text-green-600" />
          <span className="ml-1 dark:text-white text-neutral-800 dark:hover:text-green-500">
            Technologies
          </span>
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="rounded dark:bg-neutral-800 p-2 w-10 h-10 sm:w-14 sm:h-14"
            >
              <img
                className="object-contain text-white object-center w-full h-full transition-transform duration-200 transform hover:scale-125"
                src={tech.src}
                alt={tech.alt}
                title={tech.title}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Description Section */}
      <div className="mb-4">
        <GiAchievement className="animate-wave  inline-block ml-0 h-4 w-4 dark:text-green-400 text-green-600" />
        <span className="ml-1 font-semibold dark:hover:text-green-500 hover:text-green-600">
          Achievement highlights:
        </span>
      </div>
      <ul className="list-inside list-disc space-y-1 dark:text-neutral-400 text-neutral-800 text-sm sm:text-base">
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
