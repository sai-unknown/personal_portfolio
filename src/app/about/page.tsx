import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center px-10">
      
      <section className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* TEXT CONTENT */}
        <div className="max-w-xl space-y-5 text-center md:text-left">
          <h2 className="text-4xl font-semibold">Hello there..</h2>

          <p className="text-gray-600">
            I'm Sandeep, a creative person who enjoys designing and editing photos
            and videos. I take pride in every project I work on and enjoy
            transforming concepts into visually appealing content.
          </p>

          <p className="text-gray-600">
            In addition to having practical experience with video editing programs
            like CapCut, Adobe Premiere Pro, and After Effects, I am proficient in
            web development using Python, Java, HTML, CSS, and JavaScript.
          </p>

          <p className="text-gray-600">
            I'm self-driven, inquisitive, respectful of all labour, and constantly
            ready to pick up new skills.
          </p>

          <a
            href="/B.Sandeep Rathod_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-200 text-black px-6 py-3 rounded-lg"
          >
            Download Resume
          </a>
        </div>

        {/* IMAGE */}
        <div className="w-[280px] h-[280px] relative shrink-0">
          <Image
            src="/sAI.jpg"
            alt="Sandeep Rathod"
            fill
            className="object-cover rounded-xl"
          />
        </div>

      </section>
    </main>
  );
}
