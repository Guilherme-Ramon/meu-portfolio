import React, { useEffect, useState, useRef } from "react";
import skillsData from "../assets/json/skills.json";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaBootstrap,
    FaReact,
    FaPython,
    FaGitAlt,
    FaPhp,
    FaSass,
    FaMobileAlt,
    FaCloud,
    FaGithub,
    FaWordpress,
    FaProjectDiagram,
    FaServer,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ScrollReveal from "scrollreveal";

const iconMap = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JavaScript: <FaJs />,
    Bootstrap: <FaBootstrap />,
    Tailwind: <SiTailwindcss />,
    SCSS: <FaSass />,
    SASS: <FaSass />,
    Ionic: <FaMobileAlt />,
    PHP: <FaPhp />,
    SQL: <FaServer />,
    Python: <FaPython />,
    React: <FaReact />,
    JQuery: <FaJs />,
    GitHub: <FaGithub />,
    Git: <FaGitAlt />,
    MVC: <FaProjectDiagram />,
    APIs: <FaCloud />,
    WordPress: <FaWordpress />,
};

function Skills({ darkMode }) {
    const [skills, setSkills] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const skillsRef = useRef(null); // ✅ Adiciona ref na seção

    useEffect(() => {
        setSkills(skillsData);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const initialSkillsCount = 6;
    const displayedSkills = isMobile
        ? showAll
            ? skills
            : skills.slice(0, initialSkillsCount)
        : skills;

    useEffect(() => {
        if (displayedSkills.length === 0) return;
        if (showAll || !isMobile) {
            ScrollReveal().reveal(".skill-card-wrapper", {
                origin: "bottom",
                distance: "50px",
                duration: 800,
                easing: "ease-out",
                interval: 100,
                reset: true,
            });
        }
    }, [displayedSkills, showAll, isMobile]);

    const handleToggle = () => {
        setShowAll(!showAll);

        setTimeout(() => {
            if (skillsRef.current) {
                skillsRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: showAll ? "start" : "end", // Se está escondendo, sobe; se está mostrando, desce
                });
            }
        }, 100); // Pequena espera para o DOM atualizar
    };

    return (
        <section
            id="habilidades"
            ref={skillsRef} // ✅ Adiciona ref aqui
            className={`section d-flex flex-column justify-content-center align-items-center py-5 ${
                darkMode ? "bg-dark" : "bg-light"
            }`}
        >
            <div className="container">
                <h2
                    className={`mb-4 fs-1 text-center ${
                        darkMode ? "text-primary" : "text-dark"
                    }`}
                >
                    Minhas
                    <span
                        className={`mb-4 fs-1 ${
                            darkMode ? "text-light" : "text-primary"
                        }`}
                    >
                        {" "}
                        Habilidades
                    </span>
                </h2>

                <div className="row justify-content-center text-center skills-container">
                    {displayedSkills.map((skill, index) => (
                        <div
                            className="col-6 col-md-3 mb-4 skill-card-wrapper"
                            key={index}
                        >
                            <div
                                className={`card h-100 p-3 shadow skill-card ${
                                    darkMode
                                        ? "bg-secondary text-white"
                                        : "bg-light text-dark"
                                }`}
                            >
                                <div
                                    className="fs-2 mb-2"
                                    style={{ color: skill.cor }}
                                >
                                    {iconMap[skill.nome] || <FaJs />}
                                </div>
                                <h5 className="fw-bold">{skill.nome}</h5>
                            </div>
                        </div>
                    ))}
                </div>

                {isMobile && skills.length > initialSkillsCount && (
                    <div
                        className="text-center mt-4"
                        style={{ position: "relative", zIndex: 10 }}
                    >
                        <button
                            className={`btn w-50 p-2 ${
                                darkMode
                                    ? "btn-light text-dark"
                                    : "btn-dark text-white"
                            }`}
                            onClick={handleToggle} // ✅ Usa função com scroll
                        >
                            {showAll ? "Ver menos" : "Ver mais"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Skills;
