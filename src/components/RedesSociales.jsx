import {Github , Linkedin, MessageCircle,Mail } from "lucide-react";
export default function RedesSociales() {
    return (
      
      <div className="w-full flex justify-start  mb-10 ">
        <div className="flex  space-x-7  ">
              <a
                href="https://github.com/francescasilva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 hover:text-gray-300 transition rounded-full" />
              </a>
              <a
                href="https://www.linkedin.com/in/francesca-silva-carhuamaca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 hover:text-gray-300 transition" />
              </a>
              <a
                href="https://wa.me/983538958"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 hover:text-gray-300 transition" />
              </a>
              <a
                 href="mailto:fsilvacarhuamaca@gmail.com"
                 target="_blank"
                 rel="noopener noreferrer"
                >
               <Mail className="w-6 h-6 hover:text-gray-300 transition" />
               </a>
            </div>
            </div>
       
        
    );
  }
  