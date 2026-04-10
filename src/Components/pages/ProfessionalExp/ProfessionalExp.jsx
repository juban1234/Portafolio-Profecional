import { CardInfo } from "../../UI/CardInfo/CardInfo"
import img1 from "../../assets/image/imgenExpTra.avif"

export const ProfessionalExp = () => {
  return (
    <main className="flex-grow min-h-screen flex flex-col items-center p-4">
      
      <CardInfo
      title={"experiencia profecional"}
        content={"no cuento con experiencia laboral pero no le tengo miedo al trabajo"}
      />      
      <img src = {img1} alt="imagen 1" />
    </main>
  )
}
