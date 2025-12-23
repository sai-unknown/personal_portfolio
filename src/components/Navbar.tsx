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
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-full text-black px-8 py-3 flex gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`
              transition-all duration-300
              ${isActive ? "font-bold text-blue-500" : "font-normal text-gray-700"}
              hover:scale-105 hover:text-black
            `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
