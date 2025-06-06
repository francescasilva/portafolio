

import RedesSociales from "./RedesSociales"
export default function InicioImagen() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-40 py-30">
      <div className="flex flex-col md:flex-row-reverse w-full max-w-7xl items-start gap-10">
      {/* Imagen a la derecha */}
      <div className="flex justify-center md:justify-end w-full md:w-1/3">
        <img
          src="/Imagen1.jpg"
          alt="Francesca"
          className="w-72 md:w-80 h-72 md:h-80 object-cover rounded-full shadow-[0_0_30px_#7b2cbf] border-4 border-white -translate-x-4"
        />
      </div>
      {/* Texto a la izquierda */}
      <div className="flex flex-col w-full md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Hola!</h1>
        <h2 className="text-2xl font-extrabold">Soy</h2>
        <h2 className="text-2xl font-extrabold">Francesca Silva</h2>
        <h2 className="text-4xl font-extrabold mt-4 text-[#7b2cbf]">
          Ingeniera de Sistemas
        </h2>
  
        <p className="text-base text-justify mt-4 leading-relaxed">
          Soy una programadora apasionada por la tecnología con <br />
          conocimiento en desarrollo web y desarrollo de aplicaciones.
        </p>
        <div className="mt-6">
        <button className="bg-purple-800 hover:bg-purple-700 text-white font-semibold py-2 px-3 rounded-full shadow-md transition-all duration-300">
         Descargar CV 
        </button>
        
        </div>

        </div>
        </div>
        
       
       
    
      </section>
       
        
    );
  }
  