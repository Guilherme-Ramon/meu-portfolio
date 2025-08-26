import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

function Footer({ darkMode }) {
    const { language, translations } = useLanguage();
    const iconClass = darkMode ? "text-white" : "text-dark";

    return (
        <footer
            className={`py-4 ${
                darkMode ? "bg-dark text-white" : "bg-light text-dark"
            }`}
        >
            <div className="container text-center">
                <div className="row">
                    {/* Sobre mim */}
                    <div className="col-md-4 mb-3">
                        <h3>{translations[language].footerSobre}</h3>
                        <p>{translations[language].footerSobreTexto}</p>
                    </div>

                    {/* Links rápidos */}
                    <div className="col-md-4 mb-3">
                        <h3>{translations[language].footerLinks}</h3>
                        <ul className="list-unstyled">
                            <li className="my-3">
                                <a
                                    href="#hero"
                                    className={`text-decoration-none ${iconClass}`}
                                >
                                    {translations[language].hero}
                                </a>
                            </li>
                            <li className="my-3">
                                <a
                                    href="#sobre"
                                    className={`text-decoration-none ${iconClass}`}
                                >
                                    {translations[language].sobre}
                                </a>
                            </li>
                            <li className="my-3">
                                <a
                                    href="#projetos"
                                    className={`text-decoration-none ${iconClass}`}
                                >
                                    {translations[language].projetos}
                                </a>
                            </li>
                            <li className="my-3">
                                <a
                                    href="#contato-final"
                                    className={`text-decoration-none ${iconClass}`}
                                >
                                    {translations[language].contato}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Redes sociais */}
                    <div className="col-md-4 mb-3">
                        <h3>{translations[language].footerRedes}</h3>
                        <div className="d-flex justify-content-center gap-3 mt-3">
                            <a
                                href="https://github.com/Guilherme-Ramon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`fs-4 ${iconClass}`}
                                aria-label="GitHub de Guilherme Ramon"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/guilherme-ramon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`fs-4 ${iconClass}`}
                                aria-label="LinkedIn de Guilherme Ramon"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://www.instagram.com/guilhermeramon.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`fs-4 ${iconClass}`}
                                aria-label="Instagram de Guilherme Ramon"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className={darkMode ? "border-light" : "border-dark"} />
                <p className="mb-0">
                    © {new Date().getFullYear()} Guilherme Ramon.{" "}
                    {translations[language].footerDireitos}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
