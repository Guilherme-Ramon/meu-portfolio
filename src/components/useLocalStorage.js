import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function useDarkModeAndLanguage() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) setLanguage(savedLanguage);
    }, [setLanguage]);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("bg-dark", "text-white");
            document.body.classList.remove("bg-light", "text-dark");
        } else {
            document.body.classList.add("bg-light", "text-dark");
            document.body.classList.remove("bg-dark", "text-white");
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    useEffect(() => {
        if (language) localStorage.setItem("language", language);
    }, [language]);

    return [darkMode, setDarkMode];
}
