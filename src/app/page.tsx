import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center">

      <h1 className="text-5xl font-bold">
        SANDEEP RATHOD<span className="text-gray-400">.B</span></h1>

      <p className="text-gray-500">WELCOME! Step into the DEVELOPER'S portfolio</p>

      <button className="bg-gray-200 text-black px-6 py-3 rounded-lg" >Contact</button>

    </main>
  );
}