import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Sandeep Rathod",
  description: "Welcome to Sandeep Rathod's portfolio - Creative developer and designer.",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center relative z-10 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "'Quentine', var(--font-playfair), 'Georgia', serif" }}>
        SANDEEP RATHOD<span className="text-gray-400">.B</span>
      </h1>

      <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl">
        WELCOME! Step into the DEVELOPER&apos;S portfolio
      </p>

      <Link
        href="mailto:contact@sandeeprathod.com"
        className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
        aria-label="Contact Sandeep Rathod via email"
      >
        Contact
      </Link>


    </main>
  );
}
