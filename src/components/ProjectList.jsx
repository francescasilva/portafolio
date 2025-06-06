import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function ProjectList() {
  return (
      <section className="bg-black text-white min-h-screen py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Mis Proyectos</h2>
    <div className="flex flex-col md:flex-row gap-6 justify-center flex-wrap">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
    </section>
  );
}