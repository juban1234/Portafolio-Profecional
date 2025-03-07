
import { ItemNav } from '../../UI/ItemNav';

export const NavBar = () => {

    return (
        <>
            <nav className="bg-gray-800 text-white p-4  ">
                <div className="max-w-7xl mx-auto max-h-7xl hx-auto flex justify-between items-center flex-wrap">
                    <div className="text-2xl font-semibold pb-2">
                        <h1 >Mi Portafolio</h1>
                    </div>


                    <ul className="flex space-x-3 flex-wrap  " >
                        <ItemNav route={'/'} content='Home /' StyleLi={'pb-2'} />
                        <ItemNav route={'/TecnnicalSkill'} content='Técnicas Básicas /' />
                        <ItemNav route={'/TecnnicalSocial'} content='Habilidades Sociales /' StyleLi={'pb-2'} />
                        <ItemNav route={'/EnglishLeve'} content='Nivel de Inglés /' StyleLi={'pb-2'} />
                        <ItemNav route={'/ProfessionalExp'} content='Experiencia Profesional /' />
                        <ItemNav route={'/Studies'} content='Estudios /' StyleLi={'pb-2'} />
                        <ItemNav route={'/SocialNetworks'} content='Redes Sociales' />
                    </ul>
                </div>
            </nav>
        </>
    );
};

