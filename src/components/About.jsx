import React, { useEffect, useRef } from "react";
import FotoPerfil from "../assets/images/foto-perfil.webp";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "scrollreveal";

function About({ darkMode }) {
    const { language, translations } = useLanguage();

    const imgRef = useRef(null);
    const titleRef = useRef(null);
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);

    useEffect(() => {
        if (window.innerWidth > 768) {
            ScrollReveal().reveal(imgRef.current, {
                origin: "left",
                distance: "50px",
                duration: 1000,
                delay: 200,
                reset: true,
                easing: "ease-in-out",
            });

            ScrollReveal().reveal(titleRef.current, {
                origin: "right",
                distance: "50px",
                duration: 1000,
                delay: 400,
                reset: true,
                easing: "ease-in-out",
            });

            ScrollReveal().reveal(textRef1.current, {
                origin: "right",
                distance: "30px",
                duration: 1000,
                delay: 600,
                reset: true,
                easing: "ease-in-out",
            });

            ScrollReveal().reveal(textRef2.current, {
                origin: "right",
                distance: "30px",
                duration: 1000,
                delay: 800,
                reset: true,
                easing: "ease-in-out",
            });
        }
    }, []);

    return (
        <section
            id="sobre"
            className={`section d-flex align-items-center py-5 ${
                darkMode ? "bg-dark text-white" : "bg-light text-dark"
            }`}
            role="region"
            aria-label="Seção sobre Guilherme Ramon"
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                        <img
                            ref={imgRef}
                            src={FotoPerfil}
                            alt={translations[language].sobreAlt}
                            className="sobre-img img-fluid rounded"
                            loading="lazy"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <h2
                            ref={titleRef}
                            className={`mb-4 fs-1 ${
                                darkMode ? "text-primary" : "text-dark"
                            }`}
                        >
                            {translations[language].sobreTitulo}
                            <span
                                className={`mb-4 fs-1 ${
                                    darkMode ? "text-light" : "text-primary"
                                }`}
                            >
                                {" "}
                                {translations[language].sobreTitulo2}
                            </span>
                        </h2>
                        <p ref={textRef1} className="lead fs-5">
                            {translations[language].sobreTexto}
                        </p>
                        <p ref={textRef2} className="lead fs-5">
                            {translations[language].sobreTexto2}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
