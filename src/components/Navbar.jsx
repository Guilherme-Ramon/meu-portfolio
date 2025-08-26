import React, { useState } from "react";
import { FaSun, FaMoon, FaTimes } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

function Navbar({ darkMode, setDarkMode }) {
    const { language, setLanguage, translations } = useLanguage();
    const languageNames = { pt: "PT", es: "ES", en: "EN" };

    const navLinks = [
        { href: "#hero", label: translations[language].hero },
        { href: "#sobre", label: translations[language].sobre },
        { href: "#habilidades", label: translations[language].habilidades },
        { href: "#projetos", label: translations[language].projetos },
        { href: "#contato-final", label: translations[language].contato },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <nav
                className={`navbar navbar-expand-lg fixed-top ${
                    darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
                } shadow`}
                role="navigation"
                aria-label="Menu principal"
            >
                <div className="container">
                    <a className="navbar-brand fw-bold fs-3" href="#hero">
                        Guilherme Ramon
                    </a>

                    {/* Botões mobile: Hamburguer + Tema */}
                    <div className="d-flex d-lg-none align-items-center gap-2 ms-auto">
                        {/* Botão Dark/Light */}
                        <button
                            className={`btn btn-${darkMode ? "light" : "dark"}`}
                            onClick={() => setDarkMode(!darkMode)}
                            aria-label={
                                darkMode
                                    ? "Ativar modo claro"
                                    : "Ativar modo escuro"
                            }
                            aria-pressed={darkMode}
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </button>

                        {/* Botão hamburguer */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={toggleSidebar}
                            aria-label={
                                isOpen
                                    ? "Fechar menu mobile"
                                    : "Abrir menu mobile"
                            }
                            aria-expanded={isOpen}
                            aria-controls="mobile-sidebar"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    {/* Links e botões desktop */}
                    <div className="d-none d-lg-flex ms-auto align-items-center gap-3">
                        <ul
                            className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-row gap-3"
                            role="menubar"
                        >
                            {navLinks.map((link) => (
                                <li
                                    className="nav-item"
                                    key={link.href}
                                    role="none"
                                >
                                    <a
                                        className={`nav-link ${
                                            darkMode
                                                ? "text-light hover-light"
                                                : "text-dark hover-dark"
                                        }`}
                                        href={link.href}
                                        role="menuitem"
                                        aria-label={`Ir para a seção ${link.label}`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Área de idioma + dark mode */}
                        <div className="d-flex align-items-center gap-2">
                            {/* Dropdown de idiomas */}
                            <div className="dropdown">
                                <button
                                    className={`btn btn-outline-${
                                        darkMode ? "light" : "dark"
                                    } dropdown-toggle`}
                                    type="button"
                                    id="dropdownLanguageDesktop"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    aria-label="Selecionar idioma"
                                >
                                    {languageNames[language]}
                                </button>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="dropdownLanguageDesktop"
                                >
                                    {Object.keys(languageNames).map((lang) => (
                                        <li key={lang}>
                                            <button
                                                className="dropdown-item"
                                                onClick={() =>
                                                    setLanguage(lang)
                                                }
                                                aria-label={`Mudar idioma para ${languageNames[lang]}`}
                                            >
                                                {languageNames[lang]}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Botão Dark/Light */}
                            <button
                                className={`btn btn-${
                                    darkMode ? "light" : "dark"
                                }`}
                                onClick={() => setDarkMode(!darkMode)}
                                aria-label={
                                    darkMode
                                        ? "Ativar modo claro"
                                        : "Ativar modo escuro"
                                }
                                aria-pressed={darkMode}
                            >
                                {darkMode ? <FaSun /> : <FaMoon />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar mobile */}
            <aside
                id="mobile-sidebar"
                className={`position-fixed top-0 start-0 vh-100 vw-100 shadow ${
                    darkMode ? "bg-dark text-light" : "bg-light text-dark"
                }`}
                style={{
                    width: "250px",
                    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
                    transition: "transform 0.3s ease-in-out",
                    zIndex: 1050,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "2rem 1rem",
                }}
                role="dialog"
                aria-modal="true"
                aria-label="Menu lateral de navegação"
            >
                {/* Botão fechar (X) */}
                <button
                    className={`btn btn-${
                        darkMode ? "light" : "dark"
                    } align-self-end mb-3 me-3`}
                    onClick={toggleSidebar}
                    aria-label="Fechar menu lateral"
                >
                    <FaTimes size={20} />
                </button>

                <ul
                    className="nav flex-column gap-4 text-center"
                    role="menubar"
                >
                    {navLinks.map((link) => (
                        <li key={link.href} className="nav-item" role="none">
                            <a
                                className={`nav-link fs-4 ${
                                    darkMode
                                        ? "text-light hover-light"
                                        : "text-dark hover-dark"
                                }`}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                role="menuitem"
                                aria-label={`Ir para a seção ${link.label}`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto w-100 px-3">
                    {/* Dropdown de idiomas */}
                    <div className="dropdown mb-3">
                        <button
                            className={`btn btn-outline-${
                                darkMode ? "light" : "dark"
                            } dropdown-toggle w-100`}
                            type="button"
                            id="dropdownLanguageMobile"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            aria-label="Selecionar idioma"
                        >
                            {languageNames[language]}
                        </button>
                        <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownLanguageMobile"
                        >
                            {Object.keys(languageNames).map((lang) => (
                                <li key={lang}>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => setLanguage(lang)}
                                        aria-label={`Mudar idioma para ${languageNames[lang]}`}
                                    >
                                        {languageNames[lang]}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </aside>

            {/* Overlay para fechar */}
            {isOpen && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100"
                    style={{ zIndex: 1040, background: "rgba(0,0,0,0.3)" }}
                    onClick={toggleSidebar}
                    role="button"
                    tabIndex="0"
                    aria-label="Fechar menu lateral"
                    onKeyDown={(e) => e.key === "Enter" && toggleSidebar()}
                ></div>
            )}
        </>
    );
}

export default Navbar;
