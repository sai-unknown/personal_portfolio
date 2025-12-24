"use client";

import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobe,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

interface Tech {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const technologies: Tech[] = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
  { name: "Premiere Pro", icon: SiAdobe },
  { name: "After Effects", icon: SiAdobe },
];

// Duplicate the array multiple times for seamless infinite scroll
const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

export default function TechCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full overflow-hidden py-6 sm:py-8">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Carousel Container */}
        <div
          className={`flex gap-8 sm:gap-12 tech-carousel-animate ${
            isHovered ? "[animation-play-state:paused]" : ""
          }`}
        >
          {duplicatedTechnologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`tech-${index}`}
                className="flex flex-col items-center justify-center gap-2 min-w-[60px] sm:min-w-[80px] group flex-shrink-0"
              >
                <div className="relative">
                  <Icon
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-gray-900 dark:text-white transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Tooltip on hover */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                    {tech.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

