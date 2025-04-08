import { FaJsSquare } from "react-icons/fa"; // JavaScript
import { SiHtml5 } from "react-icons/si";    // HTML
import { SiCss3 } from "react-icons/si";     // CSS
import { SiTypescript } from "react-icons/si"; // TypeScript
import { SiTailwindcss } from "react-icons/si"; // TailwindCSS
import { FaReact } from "react-icons/fa";     // React
import { FaNodeJs } from "react-icons/fa";    // Node.js
import { SiPostgresql } from "react-icons/si"; // PostgreSQL
import { SiMysql } from "react-icons/si";     // MySQL
import { SiGit } from "react-icons/si";       // Git
import { FaDatabase } from "react-icons/fa";



const technologies = [
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git/Github", icon: <SiGit /> },
  { name: "SQLServer", icon: <FaDatabase /> }, // SQL Server
];

export default function Technologies() {
  return (
    <div className="mt-25 w-72 h-40 ">
      <h2 className="text-white text-lg font-semibold mb-4">Tecnologías</h2>
      <div className="flex  gap-2 mb-20 p-2">
        {technologies.map((tech) => (
          <span
            key={tech.name}
            className="bg-[rgba(100,8,160,0.3)] text-[#7209b7]  rounded-xl text-sm font-medium flex items-center gap-1 p-1"
          >
            <span className="text-lg ">{tech.icon}</span>
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}
