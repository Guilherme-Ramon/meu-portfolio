import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

function Contact({ darkMode }) {
    const { language, translations } = useLanguage();

    return (
        <section
            id="contato-final"
            className={`section py-5 ${
                darkMode ? "bg-dark text-white" : "bg-light text-dark"
            }`}
        >
            <div className="container">
                <h2
                    className={`mb-4 fs-1 text-center ${
                        darkMode ? "text-primary" : "text-dark"
                    }`}
                >
                    {translations[language].contatoTitulo1}
                    <span
                        className={`mb-4 ${
                            darkMode ? "text-light" : "text-primary"
                        }`}
                    >
                        {translations[language].contatoTitulo2}
                    </span>
                </h2>
                <p className="text-center mb-5 fs-5">
                    {translations[language].contatoTexto}
                </p>

                <form id="form" method="get">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="from_name" className="form-label">
                                {translations[language].nomeLabel}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="from_name"
                                id="from_name"
                                placeholder={
                                    translations[language].nomePlaceholder
                                }
                                autoComplete="name"
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="from_email" className="form-label">
                                {translations[language].emailLabel}
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                name="from_email"
                                id="from_email"
                                placeholder={
                                    translations[language].emailPlaceholder
                                }
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="col-md-12 mb-3">
                            <label htmlFor="message" className="form-label">
                                {translations[language].mensagemLabel}
                            </label>
                            <textarea
                                className="form-control"
                                name="message"
                                id="message"
                                placeholder={
                                    translations[language].mensagemPlaceholder
                                }
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        <div className="col-md-12 text-center">
                            <button
                                type="submit"
                                id="button"
                                className={`btn btn-lg mt-3 px-4 py-2 ${
                                    darkMode ? "btn-outline-light" : "btn-dark"
                                }`}
                            >
                                {translations[language].enviarBtn}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
