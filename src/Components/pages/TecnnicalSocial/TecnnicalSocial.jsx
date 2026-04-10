import { CardInfo } from "../../UI/CardInfo/CardInfo"
import imgenSociales from "../../assets/image/habilidadesSocialess.jpg"

export const TecnnicalSocial = () => {
  return (
    <>
      <main className=" flex-grow min-h-screen flex flex-col items-center p-4">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 text-center mb-12">
          Mis Habilidades sociales
        </h1>
        <CardInfo
          content={`
            <li>liderasgo</li>
            <li>trabajo en equipo</li>
            <li>Comunicación Efectiva</li>
            <li>Resolución de Conflictos</li>
            <li>Gestión del Tiempo y Autodisciplina</li>
            <li>Capacidad para Trabajar Bajo Presión</li>
            <li>daptabilidad</li> 
            `}
        />
        <img src={imgenSociales} alt="habilidades sociales" />
      </main>
    </>
  )
}

