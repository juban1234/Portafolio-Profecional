import { useState, useEffect } from "react";
import { CardInfo } from "../../UI/CardInfo/CardInfo";

// Definir las rutas de las imágenes
const imagePaths = [
  import("../../assets/image/talwind.jpg"),
  import("../../assets/image/react.png"),
  import("../../assets/image/lenguajes_1.png")

];

export const TecnnicalSkill = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {

    Promise.all(imagePaths)
      .then((loadedImages) => {
        setImages(loadedImages.map(img => img.default)); 
      })
      .catch((error) => {
        console.error("Error al cargar las imágenes", error);
      });
  }, []); 

  return (
    <main className="flex-grow min-h-screen flex flex-col items-center p-4">
      <h1 className="pl-4 text-xl font-semibold mb-4">Conocimientos Técnicos</h1>

      <div className="h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        <CardInfo
          title={'Frontend'}
          content={'React, HTML, CSS, JavaScript, Tailwind CSS.'}
          images={images.slice(0, 3)} 
        />
        
        <CardInfo
          title={'Control de Versiones'}
          content={'Git, GitHub.'}
          images={images.slice(0, 3)} 
        />

        <CardInfo
          title={'Educación y Liderazgo'}
          content={'Lógica de programación, preparación y conducción de conferencias. <br /> hola'}
        />

        <CardInfo
          title={'Desarrollo Web'}
          content={`Conocimiento básico sobre cómo consumir servicios externos a través de APIs RESTful.`}
        />

        <CardInfo
          title={'Nivel de Inglés'}
          content={'Intermedio, lectura, comprensión y conversación.'}
        />
        
      </div>
    </main>
  );
};
