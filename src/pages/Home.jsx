import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MailIcon, MapPin } from "lucide-react";
import ToolsAndTechs from "@/components/ToolsAndTech";
import { useNavigate } from "react-router-dom";
import ContactCard from "@/components/ContactCard";

const Home = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText("prathameshlakare001@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 ">
      <main className="flex-1">
        <h1 className="text-4xl font-bold mb-2">Hello! I’m Prathamesh</h1>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl text-yellow-600 font-semibold">
            Fullstack Developer | MERN Stack
          </h2>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <p className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" /> Nashik, Maharashtra, India
          </p>
        </div>

        <p className="max-w-2xl text-muted-foreground mb-6">
          Full-stack web developer specializing in the MERN stack. Proficient in
          both frontend and backend development, with a strong focus on React,
          Node.js, MongoDB, and Express.
        </p>

        <div className="flex gap-3 mb-10">
          <Button variant="default" onClick={() => navigate("/about")}>
            About
          </Button>

          <a
            href="https://res.cloudinary.com/dxhy9u126/image/upload/v1747390846/i2yzsmpbbqylgdulslxr.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-yellow-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-yellow-700 transition"
            download
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16v-8m0 8l-4-4m4 4l4-4m-8 8h8a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Resume
          </a>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={handleCopy}
            disabled={copied}
          >
            <MailIcon className="w-4 h-4" /> {copied ? "Copied!" : "Copy mail"}
          </Button>
        </div>

        <ToolsAndTechs />
        <ContactCard />
      </main>
    </div>
  );
};

export default Home;
