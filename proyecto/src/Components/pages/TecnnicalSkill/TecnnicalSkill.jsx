import { CardInfo } from "../../UI/CardInfo/CardInfo";

const imagePaths = [
  "../../assets/image/react.png",
  '../../assets/image/talwind.png',
  '../../assets/image/lenguajes.jpg',
  '../../assets/image/imagen1.png'
];

export const TecnnicalSkill = () => {

  return (

      <main className="flex-grow min-h-screen  flex flex-col items-center p-4">
        <h1 className="pl-4 text-xl font-semibold mb-4">Conocimientos Técnicos</h1>

        <div className=" h-150 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          <CardInfo
            title={'Frontend'}
            content={'React, HTML, CSS, JavaScript, Tailwind CSS.'}
            images ={imagePaths.slice(0, 2)}
          />
          
          <CardInfo
            title={'Control de Versiones'}
            content={'Git, GitHub.'}

          />

          <CardInfo
            title={'Educación y Liderazgo'}
            content={'Lógica de programación, preparación y conducción de conferencias.'}
          />

          <CardInfo
            title={'Desarrollo Web'}
            content={'Git, GitHub.'}
          />

          <CardInfo
            title={'Nivel de Inglés'}
            content={'Intermedio, lectura, comprensión y conversación.'}
          />
          
        </div>
      </main>
  );
};
