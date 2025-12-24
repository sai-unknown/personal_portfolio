import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Sandeep Rathod",
  description: "Explore Sandeep Rathod's portfolio of web development and design projects.",
};

interface ProjectCardProps {
  title: string;
  description: string;
  demoUrl?: string;
  codeUrl?: string;
}

function ProjectCard({ title, description, demoUrl, codeUrl }: ProjectCardProps) {
    return (
        <article className="group backdrop-blur-md bg-white/5 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 border border-white/10">
            {/* TEXT */}
            <div className="flex flex-col space-y-3 mb-6">
                <h3 className="font-bold text-xl sm:text-2xl text-gray-900 dark:text-gray-100">
                    {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    {description}
                </p>
            </div>

            {/* ACTIONS */}
            <div className="w-full flex gap-3">
                {demoUrl && (
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2 font-medium"
                        aria-label={`View ${title} demo`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        <span className="text-sm">Demo</span>
                    </a>
                )}
                {codeUrl && (
                    <a
                        href={codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2 font-medium"
                        aria-label={`View ${title} source code`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span className="text-sm">Code</span>
                    </a>
                )}
            </div>
        </article>
    );
}

const projects = [
    {
        id: 1,
        title: "Personal Portfolio",
        description: "A showcase of my skills and creativity in web development.",
        demoUrl: "https://sandeeprathodportfolio.vercel.app/",
        codeUrl: "#https://github.com/sai-unknown/personal_portfolio.git",
    },
    {
        id: 2,
        title: "Project 2",
        description: "An innovative solution combining design and functionality.",
        demoUrl: "#",
        codeUrl: "#",
    },
    {
        id: 3,
        title: "Project 3",
        description: "Comming soon..",
        demoUrl: "#",
        codeUrl: "#",
    },
    {
        id: 4,
        title: "Project 4",
        description: "Comming soon..",
        demoUrl: "#",
        codeUrl: "#",
    },
    {
        id: 5,
        title: "Project 5",
        description: "Comming soon..",
        demoUrl: "#",
        codeUrl: "#",
    },
    {
        id: 6,
        title: "Project 6",
        description: "Comming soon..",
        demoUrl: "#",
        codeUrl: "#",
    },
];

export default function Projects() {
    return (
        <main className="relative z-10 min-h-screen">
            <section className="min-h-screen px-4 sm:px-8 lg:px-16 py-8 sm:py-12 flex justify-center">
                <div className="w-full max-w-7xl backdrop-blur-md bg-white/5 rounded-2xl p-6 sm:p-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
                        My Projects
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        {projects.map((project) => (
                            <ProjectCard 
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                demoUrl={project.demoUrl}
                                codeUrl={project.codeUrl}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
