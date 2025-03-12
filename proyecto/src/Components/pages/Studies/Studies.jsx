import { CardInfo } from "../../UI/CardInfo/CardInfo"

export const Studies = () => {
  return (

    <main className="flex-grow min-h-screen flex flex-col justify-items-center  p-4">
      <h1>ruta de estudios</h1>
      <div className="  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1  gap-4">
        <CardInfo
          title={"inicios de mi aprendisaje"}
          content={"hila"}
        />

        <CardInfo
          title={"inicios de mi aprendisaje"}
          content={"hila"}
        />

        <CardInfo
          title={"inicios de mi aprendisaje"}
          content={"hila"}
        />

        <CardInfo
          title={"inicios de mi aprendisaje"}
          content={"hila"}
        />
      </div>
    </main>
  )
}
