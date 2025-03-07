import { CardInfo } from "../../UI/CardInfo/CardInfo"


export const TecnnicalSkill = () => {
  return (
    <>
      <main className ='flex flex-col'>
        <h1 className="pl-4 "> conocimientos tecnicos</h1>
        <div className=" flex flex-row flex-wrap ">
        <CardInfo
          title={'Frontend'}
          content={'React, HTML, CSS, JavaScript, Tailwind CSS.'}
        />
          
        <CardInfo
          title={'Control de Versiones'}
          content={'Git, GitHub.'}
        />

        <CardInfo
          title={'Educación y Liderazgo:'}
          content={'Lógica de programación, preparación y conducción de conferencias'}
        />

        <CardInfo
          title={'Desarrollo Web'}
          content={'Git, GitHub.'}
        />

        <CardInfo
          title={'nivel de ingles'}
          conten={'Git, GitHub.'}
        />
        </div>

      </main>
    </>
  )
}
