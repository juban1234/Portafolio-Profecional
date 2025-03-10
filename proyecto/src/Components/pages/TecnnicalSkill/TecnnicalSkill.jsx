import { CardInfo } from "../../UI/CardInfo/CardInfo";

export const TecnnicalSkill = () => {
  return (
    <>
      <main className="max-h-full flex flex-col flex-wrap items-center">
        <h1 className="pl-4 text-xl font-semibold mb-4">Conocimientos Técnicos</h1>

        {/* Contenedor de tarjetas con grid responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          <CardInfo
            title={'Frontend'}
            content={'React, HTML, CSS, JavaScript, Tailwind CSS.'}
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
    </>
  );
};
