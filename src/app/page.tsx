
import Technologies from "../components/Technologies";
import InicioImagen from "../components/InicioImagen";
import ProjectCard from "../components/ProjectCard";

export default function Home() {

  const projects = [
  {
    title: 'Rimac Seguros',
    description: 'Un sitio web de seguros donde el usuario puede comprar seguros.',
    image: '/proyectos/proyecto1.png',
    demoUrl: 'https://softtek-production.up.railway.app/',
    repoUrl: 'https://github.com/francescasilva/softtek',
  },

  {
    title: 'Mini E-Commerce',
    description: 'Un sitio web de  venta de productos de tecnologia.',
    image: '/proyectos/proyecto2.png',
    demoUrl: 'https://digicorp-production.up.railway.app/login',
    repoUrl: 'https://github.com/francescasilva/digicorp',
  },

  {
    title: 'Digimedia',
    description: 'Servicios de diseños web',
    image: '/proyectos/proyecto3.png',
    demoUrl: 'https://digimediamkt.com/',
    repoUrl: 'https://github.com/Gogoz22/Digimedia_front',
  },
 
 
  ];


  return (

    <>    
     <InicioImagen/>
     <Technologies/>
     <div className="flex flex-col md:flex-row gap-6 justify-center flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-2">Experiencia</h2>
          <h2 className="text-white text-lg font-semibold mb-2">Proyectos</h2>
          <h2 className="text-white text-lg font-semibold mb-2">Educación</h2>
          <h2 className="text-white text-lg font-semibold mb-2">Adicional</h2>
          </div>

        
      
    </>
  
   
  );
}