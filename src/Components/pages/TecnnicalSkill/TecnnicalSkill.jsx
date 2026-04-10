import { useState, useEffect } from "react";
import { CardInfo } from "../../UI/CardInfo/CardInfo";


const imagePaths = [
  import("../../assets/image/talwind.jpg"),
  import("../../assets/image/react.png"),
  import("../../assets/image/lenguajes_1.png"),
  import("../../assets/image/git_github.png")

];

export const TecnnicalSkill = () => {
  const [images, setImages] = useState([]);

  const Tecnnical = [
    { title: "Frontend", content: "React, HTML, CSS, JavaScript, Tailwind CSS." ,imag: images.slice(0,3) },
    { title: "Control de Versiones", content: "Git, GitHub." ,imag: images.slice(3,4)},
    { title: "Educación y Liderazgo", content: "Lógica de programación, preparación y conducción de conferencias." },
    { title: "Desarrollo Web'", content: `Conocimiento básico sobre cómo consumir servicios externos a través de APIs RESTful. <br /> <br />
            Aplicaciones del lado del cliente: Experiencia básica desarrollando aplicaciones que interactúan con el navegador, incluyendo la manipulación de eventos y la actualización de la UI de manera dinámica.
    ` },
    { title: "nivel de ingles", content: "mi nivel de ingles es de B1"}
  ];

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Tecnnical.map((skill, index) => (
          <CardInfo
            key={index}
            title={skill.title}
            content={skill.content}
            images={skill.imag}
          />
        ))}
      </div>
    </main>
  );
};
