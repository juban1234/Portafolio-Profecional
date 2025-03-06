import React from 'react'
import { ItemNav } from '../../UI/ItemNav'


export const NavBar = () => {
    return (
        <>
            <nav>
                <ul className='flex flex-wrap'>
                    <ItemNav
                        route={'/'}
                        content='home'
                    />
                    <ItemNav
                        route={'/TecnnicalSkill'}
                        content='Tecnicas basicas'
                    />
                    <ItemNav
                        route={'/TecnnicalSocial'}
                        content='Habilidades Sociales'
                    />
                    <ItemNav
                        route={'/EnglishLeve'}
                        content=' Nivel de Inglés'
                    />
                    <ItemNav
                        route={'/ProfessionalExp'}
                        content='Experiencia Profesional'
                    />
                    <ItemNav
                        route={'/Studies'}
                        content=' Estudios'
                    />
                    <ItemNav
                        route={'/SocialNetworks'}
                        content='Redes Sociales'
                    />
                    <ItemNav 
                        route={'*'}
                        content='defaul'
                    />
                </ul>
            </nav>
        </>
    )
}
