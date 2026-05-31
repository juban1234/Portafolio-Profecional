export const portfolioContent = {
  brand: "Bitacora de Juan Esteban",
  hero: {
    profileImage: "https://res.cloudinary.com/dv6ixjbso/image/upload/v1775861759/foto_de_perfil_t6oeh6.jpg",
    profileAlt: "Foto de perfil",
    subtitle: "Desarrollador Frontend",
    name: "Juan Esteban Grajales Mesa",
    description:
      "Construyo interfaces web claras y modernas, con enfoque en detalle visual, usabilidad y mejora continua.",
    primaryCta: {
      label: "Ver habilidades",
      href: "#habilidades",
    },
    secondaryCta: {
      label: "Experiencia",
      href: "#experiencia",
    },
  },
  sections: [
    {
      id: "habilidades",
      title: "Habilidades",
      description:
        "Tecnologias y competencias que utilizo para construir proyectos web y resolver problemas reales.",
      groups: [
        {
          title: "Tecnologias",
          items: [
            "JavaScript",
            "TypeScript",
            "Python",
            "Java (basico)",
            "React",
            "Node.js (basico)",
            "MySQL",
            "Git",
            "GitHub",
          ],
        },
        {
          title: "Idiomas",
          items: [
            "Espanol: Nativo",
            "Ingles: Basico (en formacion)",
          ],
        },
      ],
    },
    {
      id: "experiencia",
      title: "Experiencia Laboral",
      description:
        "Experiencia practica en el SENA enfocada en desarrollo de software y mejora de procesos.",
      entries: [
        {
          role: "Desarrollo de herramientas para automatizacion",
          institution: "SENA",
          period: "Etapa formativa",
          status: "Proyecto desarrollado",
          details: [
            "Me encargue de la creacion de herramientas para automatizar procesos internos.",
            "Participe en analisis de requerimientos y construccion de soluciones funcionales.",
          ],
        },
        {
          role: "Pagina para pruebas de ingles",
          institution: "SENA",
          period: "Etapa formativa",
          status: "No implementada por temas institucionales",
          details: [
            "Cree una pagina para gestionar pruebas de ingles.",
            "Debido a problemas en la institucion, el proyecto no pudo implementarse en produccion.",
          ],
        },
      ],
    },
    {
      id: "estudios",
      title: "Estudios",
      description:
        "Formacion academica y cursos relevantes en desarrollo de software.",
      entries: [
        {
          role: "Tecnico en Desarrollo de Software",
          institution: "SENA (convenio con Institucion Educativa Ciudad Dorada)",
          period: "2022 - 2023",
          status: "Completado",
          details: [
            "Bases de programacion y logica de software.",
            "Practicas de desarrollo web y trabajo colaborativo.",
          ],
        },
        {
          role: "Tecnologo en Analisis y Desarrollo de Software",
          institution: "SENA",
          period: "Finalizacion: 31/mar/2026",
          status: "En espera de certificacion oficial",
          details: [
            "Construccion de soluciones de software de extremo a extremo.",
            "Uso de buenas practicas y herramientas de versionamiento.",
          ],
        },
        {
          role: "Curso en Inteligencia Artificial",
          institution: "IBM",
          period: "2026",
          status: "Terminado",
          details: [
            "Fundamentos de IA y conceptos aplicados a proyectos reales.",
          ],
        },
      ],
    },
  ],
  social: {
    github: "https://github.com/juban1234?tab=repositories",
    linkedin: "https://www.linkedin.com/in/juan-esteban-grajales-mesa-12276a356",
  },
  footerName: "Juan Esteban Grajales Mesa",
};
