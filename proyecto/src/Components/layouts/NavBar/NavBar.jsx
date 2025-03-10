import { useLocation } from 'react-router-dom';
import { ItemNav } from '../../UI/ItemNav';
import React, { useState,useEffect } from 'react';


export const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() =>{
    setIsOpen(false)
  },[location]);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md  w-full z-50 ">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="text-2xl font-bold tracking-wide text-blue-500">
          <h1>Mi Portafolio</h1>
        </div>

        <button
          onClick={toggMenu}
          className="sm:hidden bg-blue-600 text-black py-2 px-4 rounded-full hover:bg-blue-500 transition duration-300 ease-in-out"
        >
          {isOpen ? 'Cerrar' : 'Menú'}
        </button>

        {isOpen && (
          <ul className="sm:hidden absolute top-16 left-0 right-0 bg-gray-800 py-4 px-6 rounded-b-lg shadow-lg flex flex-col space-y-4 mt-2">
            <ItemNav route={'/'} content='Home '  />
            <ItemNav route={'/TecnnicalSkill'} content='Técnicas Básicas ' />
            <ItemNav route={'/TecnnicalSocial'} content='Habilidades Sociales '  />
            <ItemNav route={'/ProfessionalExp'} content='Experiencia Profesional ' />
            <ItemNav route={'/Studies'} content='Estudios ' />
            <ItemNav route={'/SocialNetworks'} content='Redes Sociales' />
          </ul>
        )}

        <ul className="hidden sm:flex space-x-8 font-extralight">
          <ItemNav route={'/'} content='Home ' />
          <ItemNav route={'/TecnnicalSkill'} content='Técnicas Básicas ' />
          <ItemNav route={'/TecnnicalSocial'} content='Habilidades Sociales ' />
          <ItemNav route={'/ProfessionalExp'} content='Experiencia Profesional ' />
          <ItemNav route={'/Studies'} content='Estudios ' />
          <ItemNav route={'/SocialNetworks'} content='Redes Sociales' />
        </ul>
      </div>
    </nav>
  );
};



