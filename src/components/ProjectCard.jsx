// components/ProjectCard.jsx
import { FaGithub, FaPlay } from 'react-icons/fa';

export default function ProjectCard({ title, description, image, demoUrl, repoUrl }) {
  return (
    <div className="bg-[#1e1e1e] text-white rounded-xl overflow-hidden shadow-md w-full md:w-1/3">
  <img src={image} alt={title} className="w-full object-contain" />
  
  <div className="p-4">
    <h3 className="text-xl font-semibold mt-3">{title}</h3>
    <p className="text-sm text-gray-300 mt-2">{description}</p>
    <div className="flex justify-between mt-4 text-black font-bold">
      <a href={demoUrl} target="_blank" rel="noopener noreferrer"
         className="bg-[#c9a587] px-4 py-2 rounded flex items-center gap-2 hover:bg-[#b9936c] transition">
        <FaPlay /> Demo
      </a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer"
         className="bg-[#c9a587] px-4 py-2 rounded flex items-center gap-2 hover:bg-[#b9936c] transition">
        <FaGithub /> Repo
      </a>
    </div>
  </div>
</div>
  );
}
