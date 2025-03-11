import imaHome from "../../assets/image/carned.png";

export const Main = () => {
  return (
    <main className="flex flex-col justify-center items-center flex-grow min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-6">
        <img 
          src={imaHome} 
          alt="Imagen de portafolio" 
          className="w-full h-auto rounded-lg shadow-lg object-cover mb-6"
        />

        {/* Título o Descripción */}
        <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
          Soy Juan Esteban Grajales Mesa, soy programador junior
        </h3>
        
        {/* Descripción adicional (opcional) */}
        <p className="text-center text-gray-600">
          Desarrollador con experiencia en tecnologías web, enfocado en la creación de aplicaciones modernas y responsivas. 
          Mi pasión por la programación me impulsa a aprender constantemente y asumir nuevos retos.
        </p>
      </div>
    </main>
  );
};


