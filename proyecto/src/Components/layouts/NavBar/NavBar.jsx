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
                        route={'/'}
                        content='home'
                    />
                </ul>
            </nav>
        </>
    )
}
