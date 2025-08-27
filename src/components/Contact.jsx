import React, { useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

function Contact({ darkMode }) {
    const { language, translations } = useLanguage();
    const formRef = useRef();
    const recaptchaRef = useRef(null);
    const [btnText, setBtnText] = useState(translations[language].enviarBtn);

    const handleSubmit = (e) => {
        e.preventDefault();

        const recaptchaValue = recaptchaRef.current.getValue();
        if (!recaptchaValue) {
            Swal.fire({
                icon: "warning",
                title: "Validação necessária",
                text: "Por favor, confirme que você não é um robô antes de enviar.",
                confirmButtonText: "Ok",
            });
            return;
        }

        setBtnText("Enviando...");

        const serviceID = "service_4l1drk7";
        const templateID = "template_wjpf9o3";
        const publicKey = "Goip_T2-5oJpycpLi";

        emailjs
            .sendForm(serviceID, templateID, formRef.current, publicKey)
            .then(() => {
                setBtnText("Mensagem Enviada");
                Swal.fire({
                    icon: "success",
                    title: "Mensagem Enviada!",
                    text: "Sua mensagem foi enviada com sucesso.",
                    confirmButtonText: "Ok",
                });
                formRef.current.reset();
                recaptchaRef.current.reset();
                setTimeout(
                    () => setBtnText(translations[language].enviarBtn),
                    2000
                );
            })
            .catch((err) => {
                setBtnText(translations[language].enviarBtn);
                Swal.fire({
                    icon: "error",
                    title: "Erro ao Enviar",
                    text:
                        "Houve um erro ao enviar a mensagem: " +
                        JSON.stringify(err),
                    confirmButtonText: "Ok",
                });
            });
    };

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

                <form ref={formRef} id="form" onSubmit={handleSubmit}>
                    <div className="row">
                        {/* Nome */}
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

                        {/* E-mail */}
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

                        {/* Assunto */}
                        <div className="col-12 mb-3">
                            <label htmlFor="title" className="form-label">
                                Assunto
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                id="title"
                                placeholder="Digite o assunto da mensagem"
                                required
                            />
                        </div>

                        {/* Mensagem */}
                        <div className="col-12 mb-3">
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
                            />
                        </div>

                        {/* reCAPTCHA */}
                        <div className="col-12 mb-3">
                            <ReCAPTCHA
                                key={darkMode ? "dark" : "light"}
                                ref={recaptchaRef}
                                sitekey="6Lf6xLQrAAAAABSTusCPk84pPRH1paJYTeEP5icR"
                                theme={darkMode ? "dark" : "light"}
                                style={{ display: "block", width: "100%" }}
                            />
                        </div>

                        {/* Botão */}
                        <div className="col-12 text-center">
                            <button
                                type="submit"
                                id="btn-entrar-contato"
                                className={`btn btn-lg mt-3 px-4 py-2 ${
                                    darkMode ? "btn-outline-light" : "btn-dark"
                                }`}
                            >
                                {btnText}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
