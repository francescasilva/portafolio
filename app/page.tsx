

import Technologies from "./componentes/Technologies";
import InicioImagen from "./componentes/InicioImagen";



export default function Home() {
  return (

    <>    
     <InicioImagen></InicioImagen>;
     <Technologies></Technologies>

          <div>
            <h2 className="text-white text-lg font-semibold mb-2">Experiencia</h2>
          <h2 className="text-white text-lg font-semibold mb-2">Proyectos</h2>
          <h2 className="text-white text-lg font-semibold mb-2">Educación</h2>
          <h2 className="text-white text-lg font-semibold mb-2">Adicional</h2>
          </div>

        
      
          </>
  
   
  );
}