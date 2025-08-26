import React, { useEffect, useState } from "react";
import projectsData from "../assets/json/Projects.json";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "scrollreveal";

const Projects = ({ darkMode }) => {
    const { language, translations } = useLanguage();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    // ScrollReveal só no desktop
    useEffect(() => {
        if (projects.length === 0) return;
        if (window.innerWidth < 768) return;

        const sr = ScrollReveal();

        projects.forEach((_, idx) => {
            sr.reveal(`.project-card-wrapper:nth-child(${idx + 1})`, {
                origin: "bottom",
                distance: "30px",
                duration: 800,
                easing: "ease-out",
                opacity: 0,
                scale: 0.95,
                interval: 100,
                reset: true,
                viewFactor: 0.2,
            });
        });
    }, [projects]);

    const sectionClass = darkMode ? "bg-dark text-white" : "bg-light text-dark";
    const cardClass = darkMode
        ? "bg-secondary text-white"
        : "bg-white text-dark";
    const btnLiveClass = darkMode
        ? "btn-warning text-dark"
        : "btn-primary text-white";
    const btnCodeClass = darkMode
        ? "btn-outline-warning text-dark"
        : "btn-outline-primary text-dark";
    const badgeClass = darkMode ? "bg-info text-dark" : "bg-success text-white";

    return (
        <section
            id="projetos"
            className={`${sectionClass} py-5`}
            aria-label="Seção de projetos"
        >
            <div className="container">
                {/* Título da seção */}
                <h2
                    className={`mb-4 fs-1 text-center ${
                        darkMode ? "text-primary" : "text-dark"
                    }`}
                    tabIndex="0"
                >
                    {translations[language].projectsTitulo1}
                    <span
                        className={`mb-4 fs-1 ${
                            darkMode ? "text-light" : "text-primary"
                        }`}
                        tabIndex="0"
                    >
                        {" "}
                        {translations[language].projectsTitulo2}
                    </span>
                </h2>

                <div className="row g-4 justify-content-center">
                    {projects.map((project, index) => (
                        <div
                            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex project-card-wrapper"
                            key={index}
                        >
                            <article
                                className={`card ${cardClass} shadow-sm border-0 d-flex flex-column w-100`}
                                style={{
                                    transition:
                                        "transform 0.3s, box-shadow 0.3s",
                                    borderRadius: "15px",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform =
                                        "scale(1.02)";
                                    e.currentTarget.style.boxShadow =
                                        "0 10px 25px rgba(0,0,0,0.2)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform =
                                        "scale(1)";
                                    e.currentTarget.style.boxShadow =
                                        "0 4px 15px rgba(0,0,0,0.1)";
                                }}
                                aria-labelledby={`project-title-${index}`}
                                role="group"
                            >
                                <picture>
                                    <source
                                        srcSet={project.imagemMobile}
                                        media="(max-width: 576px)"
                                    />
                                    <img
                                        src={project.imagemDesktop}
                                        alt={`Imagem do projeto ${project.titulo[language]}`}
                                        className="card-img-top"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            objectFit: "cover",
                                            maxHeight: "600px",
                                        }}
                                        loading="lazy"
                                    />
                                </picture>

                                <div className="card-body d-flex flex-column flex-grow-1">
                                    {/* Título do projeto agora h3 para sequência semântica correta */}
                                    <h3
                                        id={`project-title-${index}`}
                                        className="card-title text-center"
                                        tabIndex="0"
                                    >
                                        {project.titulo[language]}
                                    </h3>
                                    <p
                                        className="text-center text-muted mb-2"
                                        style={{ fontSize: "0.85rem" }}
                                        tabIndex="0"
                                    >
                                        {project.data}
                                    </p>
                                    <p
                                        className="card-text flex-grow-1"
                                        tabIndex="0"
                                    >
                                        {project.descricao[language]}
                                    </p>

                                    <div className="mb-2 d-flex flex-wrap justify-content-center gap-1">
                                        {project.tecnologias.map(
                                            (tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className={`badge ${badgeClass}`}
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>

                                    <div className="d-flex gap-2 mt-auto flex-wrap justify-content-center">
                                        <a
                                            href={project.linkLive}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`btn ${btnLiveClass} flex-grow-1`}
                                            aria-label={`Abrir demo ao vivo do projeto ${project.titulo[language]}`}
                                        >
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.linkCode}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`btn ${btnCodeClass} flex-grow-1`}
                                            aria-label={`Abrir repositório GitHub do projeto ${project.titulo[language]}`}
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
