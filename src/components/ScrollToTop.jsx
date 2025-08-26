// ScrollToTop.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../ScrollToTop.css";

export default function ScrollToTop({ darkMode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scroll-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      style={{
        backgroundColor: darkMode ? "#444" : "#007bff",
        color: "#fff",
      }}
    >
      <FaArrowUp />
    </div>
  );
}
