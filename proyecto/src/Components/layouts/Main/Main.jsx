import imaHome from "../../assets/image/carned.png";

export const Main = () => {
  return (
    <main className="flex-grow min-h-screen flex flex-col items-center p-4">
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
          aprendiz de programador ,sin experiencia , pero con ganas de seguir aprendiendo
        </p>
      </div>
    </main>
  );
};


