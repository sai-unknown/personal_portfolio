"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialIcons() {
  const socialLinks = [
    {
      href: "https://github.com/sai-unknown",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/sandeep-rath0d/",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:sandeeprathod455161@gmail.com",
      icon: FaEnvelope,
      label: "Email",
    },
  ];

  return (
    <div className="flex gap-4 items-center justify-center">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="group relative w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 backdrop-blur-md bg-white/20 dark:bg-gray-900/80 border border-white/20 dark:border-white/10 text-gray-900 dark:text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
            {label}
            {/* Arrow */}
            <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/20 dark:border-t-gray-900/80"></span>
          </span>
        </a>
      ))}
    </div>
  );
}

