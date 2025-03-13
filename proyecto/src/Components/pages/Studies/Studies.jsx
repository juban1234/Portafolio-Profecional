import { useEffect, useState } from "react"
import { CardInfo } from "../../UI/CardInfo/CardInfo"

const imagePaths = [
  import("../../assets/image/laDiela.jpg"),
  import("../../assets/image/ciudadDorada.jfif"),
  import("../../assets/image/Sena_Colombia_logo.svg.png")
]

export const Studies = () => {

const [images,setImages] = useState([]);
useEffect(() =>{
  Promise.all(imagePaths)
  .then((loadedImages) => {
    setImages(loadedImages.map(img => img.default)); 
  })
  .catch((error) => {
    console.error("Error al cargar las imágenes", error);
  });
}, []); 

  const studies = [
    { title: "Inicios de mi aprendizaje", content: "estudien en mis primeros años en la institucion educativa la diela , en la ciudad de armenia  en esa escuala no aprendi mucho pero me permito empesar a desarrollar mis habilidades sociales",
      images: images.slice(0,1)
     },
    { title: "Secundaria, preparatoria", content: "debido a problemas en la diela tuve que pasarme a la la institucion educativa ciudad dorada , en esta pase toda mi secundaria y preparatoria",
       images: images.slice(1,2) 
    },
    { title: "Mi estado actual", content: "despues de terminar la preparatoria, comense mi proceso foemativo en el sena asta la era actual" , images: images.slice(2,3)},
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">Ruta de Estudios</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {studies.map((study, index) => (
          <CardInfo
            key={index}
            title={study.title}
            content={study.content}
            images={study.images}
          />
        ))}
      </div>
    </main>
  )
}
