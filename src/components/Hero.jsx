import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "scrollreveal";
import Curriculo from "../assets/doc/Curriculo-Guilherme-Ramon.pdf";

function Hero({ darkMode }) {
    const { language, translations } = useLanguage();

    const titleRef = useRef(null);
    const descRef = useRef(null);
    const buttonsRef = useRef([]);
    const iconsRef = useRef([]);

    useEffect(() => {
        if (window.innerWidth > 768) {
            ScrollReveal().reveal(titleRef.current, {
                origin: "left",
                distance: "50px",
                duration: 1000,
                delay: 200,
                reset: true,
                easing: "ease-in-out",
            });

            ScrollReveal().reveal(descRef.current, {
                origin: "right",
                distance: "50px",
                duration: 1000,
                delay: 400,
                reset: true,
                easing: "ease-in-out",
            });

            buttonsRef.current.forEach((btn, i) => {
                ScrollReveal().reveal(btn, {
                    origin: "bottom",
                    distance: "30px",
                    duration: 1000,
                    delay: 600 + i * 200,
                    reset: true,
                    easing: "ease-in-out",
                });
            });

            iconsRef.current.forEach((icon, i) => {
                ScrollReveal().reveal(icon, {
                    origin: "bottom",
                    distance: "20px",
                    duration: 1000,
                    delay: 800 + i * 200,
                    reset: true,
                    easing: "ease-in-out",
                });
            });
        }
    }, []);

    return (
        <header
            className={`text-center vh-custom d-flex justify-content-center align-items-center ${
                darkMode ? "bg-dark text-white" : "bg-light text-dark"
            }`}
            id="hero"
            role="banner"
            aria-label="Seção inicial"
        >
            <div className="container">
                <h1 ref={titleRef} className="fw-bold d-4" tabIndex="0">
                    {translations[language].bemVindo}{" "}
                    <span className="text-primary">Guilherme Ramon!</span>
                </h1>
                <p ref={descRef} className="lead mt-3" tabIndex="0">
                    {translations[language].descricao}
                </p>

                <div
                    className="row justify-content-center mt-5"
                    role="group"
                    aria-label="Botões de ação"
                >
                    {["#contato-final", Curriculo].map((href, i) => (
                        <div key={i} className="col-10 col-md-4 mb-3">
                            <a
                                ref={(el) => (buttonsRef.current[i] = el)}
                                href={href}
                                download={
                                    i === 1
                                        ? "Curriculo-Guilherme-Ramon.pdf"
                                        : undefined
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn btn-lg w-100 ${
                                    darkMode
                                        ? i === 0
                                            ? "btn-light text-dark"
                                            : "btn-outline-light"
                                        : i === 0
                                        ? "btn-dark text-white"
                                        : "btn-outline-dark"
                                }`}
                                aria-label={
                                    i === 0
                                        ? translations[language]
                                              .contatoTitulo1 +
                                          translations[language].contatoTitulo2
                                        : translations[language]
                                              .baixarCurriculo ||
                                          "Baixar Currículo"
                                }
                                role="button"
                                tabIndex="0"
                            >
                                {i === 0
                                    ? translations[language].contatoTitulo1 +
                                      translations[language].contatoTitulo2
                                    : translations[language].baixarCurriculo ||
                                      "Baixar Currículo"}
                            </a>
                        </div>
                    ))}
                </div>

                <nav className="mt-4" aria-label="Redes sociais">
                    {[
                        {
                            href: "https://github.com/Guilherme-Ramon",
                            icon: <FaGithub size={30} />,
                            label: "GitHub de Guilherme Ramon",
                        },
                        {
                            href: "https://linkedin.com/in/guilherme-ramon",
                            icon: <FaLinkedin size={30} />,
                            label: "LinkedIn de Guilherme Ramon",
                        },
                    ].map((item, i) => (
                        <a
                            key={i}
                            ref={(el) => (iconsRef.current[i] = el)}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`me-3 text-decoration-none ${
                                darkMode ? "text-light" : "text-dark"
                            }`}
                            aria-label={item.label}
                            role="link"
                            tabIndex="0"
                        >
                            {item.icon}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Hero;
