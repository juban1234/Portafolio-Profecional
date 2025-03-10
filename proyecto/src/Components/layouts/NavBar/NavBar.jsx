
import { ItemNav } from '../../UI/ItemNav';
import React, { useState } from 'react';

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className="max-w-full  bg-gray-800 text-white p-4 flex flex-row justify-around">


                <div className="text-2xl font-semibold pb-2">
                    <h1>Mi Portafolio</h1>
                </div>

<div>
<button
                    onClick={toggMenu}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Menú
                </button>
                {isOpen && (
                    <ul className=' flex-row flex-wrap '>
                        <ItemNav route={'/'} content='Home /' StyleLi={'pb-2'} />
                        <ItemNav route={'/TecnnicalSkill'} content='Técnicas Básicas /' />
                        <ItemNav route={'/TecnnicalSocial'} content='Habilidades Sociales /' StyleLi={'pb-2'} />
                        <ItemNav route={'/ProfessionalExp'} content='Experiencia Profesional /' />
                        <ItemNav route={'/Studies'} content='Estudios /' StyleLi={'pb-2'} />
                        <ItemNav route={'/SocialNetworks'} content='Redes Sociales' />

                    </ul>
                )}
</div>


            </nav>
        </>
    );
};


