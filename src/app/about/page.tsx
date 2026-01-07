import Image from "next/image";
import type { Metadata } from "next";
import SocialIcons from "@/components/SocialIcons";
import TechCarousel from "@/components/TechCarousel";

export const metadata: Metadata = {
  title: "About | Sandeep Rathod",
  description: "Learn more about Sandeep Rathod - a creative developer and designer with expertise in web development, video editing, and graphic design.",
};

export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 relative z-10">
      <section className="max-w-6xl w-full flex flex-col gap-8 md:gap-12 backdrop-blur-md bg-white/5 rounded-2xl p-6 md:p-8">
        {/* Tech Carousel */}
        <div className="w-full">
          <TechCarousel />
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* TEXT CONTENT */}
        <div className="max-w-xl space-y-5 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-semibold">Hello there..</h1>

          <p className="text-gray-600 dark:text-gray-300">
            I&apos;m Sandeep, a committed Computer Science Graduate in 
            Artificial Intelligence & Data Science with a special interest 
            in computer vision and data analysis.
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            Besides having working knowledge in development, I share 
            informative content on technical issues in LinkedIn.
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            I&apos;m self-motivated, curious, and always ready to acquire
            new skills. Open to Data Analytics & Technical Internships – From Jan 2026
          </p>

          <a
            href="/B.SANDEEP_RATHOD_RESUME.pdf"
            download
            // target="_blank"
            // rel="noopener noreferrer"
            className="inline-block bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Download Resume
          </a>
        </div>

        {/* IMAGE AND SOCIAL LINKS */}
        <div className="flex flex-col items-center gap-6 shrink-0">
          <div className="w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] relative">
            <Image
              src="/profile.jpg"
              alt="Sandeep Rathod - Creative Developer and Designer"
              fill
              className="object-cover rounded-xl"
              priority
              sizes="(max-width: 640px) 250px, 280px"
            />
          </div>
          
          {/* SOCIAL MEDIA ICONS */}
          <SocialIcons />
        </div>
        </div>

      </section>
    </main>
  );
}
