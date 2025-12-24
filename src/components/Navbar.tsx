"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav 
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 shadow-md rounded-full text-black dark:text-white px-4 sm:px-8 py-2 sm:py-3 flex gap-4 sm:gap-6 z-50"
      aria-label="Main navigation"
    >
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`
              transition-all duration-300 text-sm sm:text-base
              ${isActive ? "font-bold text-blue-500 dark:text-blue-400" : "font-normal text-gray-700 dark:text-gray-300"}
              hover:scale-105 hover:text-black dark:hover:text-white
            `}
            aria-current={isActive ? "page" : undefined}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
