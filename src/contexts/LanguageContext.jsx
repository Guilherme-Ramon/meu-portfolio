import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || "pt";
    });

    const translations = {
        pt: {
            hero: "Início",
            sobre: "Sobre",
            habilidades: "Habilidades",
            projetos: "Projetos",
            contato: "Contato",
            bemVindo: "Olá, eu sou",
            descricao:
                "Desenvolvedor Front-End | Transformando Ideias em Realidade Digital 🚀",
            contatoTitulo1: "Entre e",
            contatoTitulo2: "m Contato",
            contatoTexto:
                "Se você deseja discutir um projeto ou só quer conversar, entre em contato comigo! Será um prazer ajudá-lo.",
            nomeLabel: "Seu Nome",
            nomePlaceholder: "Seu Nome",
            emailLabel: "Seu E-mail",
            emailPlaceholder: "Seu E-mail",
            mensagemLabel: "Sua Mensagem",
            mensagemPlaceholder: "Sua Mensagem",
            enviarBtn: "Enviar Mensagem",
            sobreTitulo: "Sobre",
            sobreTitulo2: "Mim",
            sobreTexto:
                "Sou um desenvolvedor front-end com uma paixão por tecnologia desde a infância, oficialmente na área desde 2021. Minha curiosidade e vontade de explorar o mundo do desenvolvimento foram as maiores motivações para me tornar um front-end, e sempre estou em busca de novos desafios e oportunidades de aprendizado.",
            sobreAlt: "Ilustração de um programador trabalhando no computador",
            footerSobre: "Sobre Mim",
            footerSobreTexto:
                "Sou Guilherme Ramon, desenvolvedor front-end com experiência em diversas tecnologias como HTML, CSS, JavaScript, React e PHP. Transformo ideias em soluções digitais criativas e eficientes.",
            footerLinks: "Links Rápidos",
            footerRedes: "Redes Sociais",
            footerDireitos: "Todos os direitos reservados.",
            skillsTitulo1: "Minhas",
            skillsTitulo2: "Habilidades",
            skillsVerMais: "Ver Mais",
            skillsVerMenos: "Ver Menos",
            projectsTitulo1: "Meus",
            projectsTitulo2: "Projetos",
            liveBtn: "Live Demo",
            codeBtn: "GitHub",
            baixarCurriculo: "Baixar Currículo",
        },
        es: {
            hero: "Inicio",
            sobre: "Sobre mí",
            habilidades: "Habilidades",
            projetos: "Proyectos",
            contato: "Contacto",
            bemVindo: "¡Hola, soy",
            descricao:
                "Desarrollador Front-End | Transformando Ideas en Realidad Digital 🚀",
            contatoTitulo1: "Entre e",
            contatoTitulo2: "n Contacto",
            contatoTexto:
                "Si deseas discutir un proyecto o solo quieres charlar, ¡contacta conmigo! Será un placer ayudarte.",
            nomeLabel: "Tu Nombre",
            nomePlaceholder: "Tu Nombre",
            emailLabel: "Tu Correo",
            emailPlaceholder: "Tu Correo",
            mensagemLabel: "Tu Mensaje",
            mensagemPlaceholder: "Tu Mensaje",
            enviarBtn: "Enviar Mensaje",
            sobreTitulo: "Sobre",
            sobreTitulo2: "Mí",
            sobreTexto:
                "Soy un desarrollador front-end con pasión por la tecnología desde la infancia, oficialmente en el área desde 2021. Mi curiosidad y ganas de explorar el mundo del desarrollo fueron las principales motivaciones para convertirme en front-end, y siempre estoy en busca de nuevos desafíos y oportunidades de aprendizaje.",
            sobreAlt:
                "Ilustración de un programador trabajando en una computadora",
            footerSobre: "Sobre Mí",
            footerSobreTexto:
                "Soy Guilherme Ramon, desarrollador front-end con experiencia en diversas tecnologías como HTML, CSS, JavaScript, React y PHP. Transformo ideas en soluciones digitales creativas y eficientes.",
            footerLinks: "Enlaces Rápidos",
            footerRedes: "Redes Sociales",
            footerDireitos: "Todos los derechos reservados.",
            skillsTitulo1: "Mis",
            skillsTitulo2: "Habilidades",
            skillsVerMais: "Ver Más",
            skillsVerMenos: "Ver Menos",
            projectsTitulo1: "Mis",
            projectsTitulo2: "Proyectos",
            liveBtn: "Demo",
            codeBtn: "Código",
            baixarCurriculo: "Descargar Currículo",
        },
        en: {
            hero: "Home",
            sobre: "About",
            habilidades: "Skills",
            projetos: "Projects",
            contato: "Contact",
            bemVindo: "Hello, I am",
            descricao:
                "Front-End Developer | Turning Ideas into Digital Reality 🚀",
            contatoTitulo1: "Get i",
            contatoTitulo2: "n Touch",
            contatoTexto:
                "If you want to discuss a project or just chat, contact me! I’ll be happy to help you.",
            nomeLabel: "Your Name",
            nomePlaceholder: "Your Name",
            emailLabel: "Your Email",
            emailPlaceholder: "Your Email",
            mensagemLabel: "Your Message",
            mensagemPlaceholder: "Your Message",
            enviarBtn: "Send Message",
            sobreTitulo: "About",
            sobreTitulo2: "Me",
            sobreTexto:
                "I am a front-end developer with a passion for technology since childhood, officially in the field since 2021. My curiosity and desire to explore the world of development were the main motivations to become a front-end developer, and I am always seeking new challenges and learning opportunities.",
            sobreAlt: "Illustration of a programmer working on a computer",
            footerSobre: "About Me",
            footerSobreTexto:
                "I am Guilherme Ramon, a front-end developer with experience in various technologies like HTML, CSS, JavaScript, React, and PHP. I turn ideas into creative and efficient digital solutions.",
            footerLinks: "Quick Links",
            footerRedes: "Social Networks",
            footerDireitos: "All rights reserved.",
            skillsTitulo1: "My",
            skillsTitulo2: "Skills",
            skillsVerMais: "See More",
            skillsVerMenos: "See Less",
            projectsTitulo1: "My",
            projectsTitulo2: "Projects",
            liveBtn: "Live Demo",
            codeBtn: "GitHub",
            baixarCurriculo: "Download Resume",
        },
    };

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage, translations }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
