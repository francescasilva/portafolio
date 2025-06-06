
import Technologies from "../components/Technologies";
import InicioImagen from "../components/InicioImagen";
import ProjectList from "../components/ProjectList";

export default function Home() {

  return (

    <>    
     <InicioImagen/>
     <Technologies/>
     <ProjectList/>
     

          <div>
            <h2 className="text-white text-lg font-semibold mb-2">Experiencia</h2>
          <h2 className="text-white text-lg font-semibold mb-2">Proyectos</h2>
          <h2 className="text-white text-lg font-semibold mb-2">Educación</h2>
          <h2 className="text-white text-lg font-semibold mb-2">Adicional</h2>
          </div>

        
      
    </>
  
   
  );
}