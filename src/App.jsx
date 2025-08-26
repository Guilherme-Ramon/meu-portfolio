import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useDarkModeAndLanguage } from "./components/useLocalStorage";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
// import ScrollReveal from "scrollreveal";

import "./App.css";
import "./ScrollToTop.css";

function AppContent() {
    const [darkMode, setDarkMode] = useDarkModeAndLanguage();

    return (
        <div className={darkMode ? "bg-dark text-white" : "bg-light text-dark"}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hero darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Contact darkMode={darkMode} />
            <Footer darkMode={darkMode} />
            <ScrollToTop darkMode={darkMode} />
        </div>
    );
}

function App() {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
}

export default App;
