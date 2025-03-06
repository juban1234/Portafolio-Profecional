
import { ItemNav } from '../../UI/ItemNav';

export const NavBar = () => {

    return (
        <>
            <nav className="bg-gray-800 text-white p-4  ">
                <div className="max-w-7xl mx-auto max-h-7xl hx-auto flex justify-between items-center flex-wrap">
                    <div className="text-2xl font-semibold">
                        Mi Portafolio
                    </div>


                    <ul className="hidden md:flex space-x-8 flex-wrap " >
                        <ItemNav route={'/'} content='Home' />
                        <ItemNav route={'/TecnnicalSkill'} content='Técnicas Básicas' />
                        <ItemNav route={'/TecnnicalSocial'} content='Habilidades Sociales' />
                        <ItemNav route={'/EnglishLeve'} content='Nivel de Inglés' />
                        <ItemNav route={'/ProfessionalExp'} content='Experiencia Profesional' />
                        <ItemNav route={'/Studies'} content='Estudios' />
                        <ItemNav route={'/SocialNetworks'} content='Redes Sociales' />
                    </ul>
                    </div>
            </nav>
        </>
    );
};

