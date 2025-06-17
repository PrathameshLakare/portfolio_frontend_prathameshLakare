import React from "react";

const tools = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "Express",
  "Bootstrap",
  "Redux",
  "MongoDB",
  "MongoDB Atlas",
  "NoSQL",
  "Git",
  "GitHub",
  "Vercel",
  "Chart.js",
  "Tailwind CSS",
  "Shadcn UI",
  "Postman",
];

function ToolsAndTechs() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Tools and Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white p-4 rounded-xl text-center font-medium"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsAndTechs;
