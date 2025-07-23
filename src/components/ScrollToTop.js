import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../App.css";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className="scroll-to-top-btn"
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        zIndex: 9999,
        background: "linear-gradient(90deg, #AA367C 0%, #4A2FBD 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        display: visible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(74,47,189,0.15)",
        cursor: "pointer",
        transition: "background 0.3s"
      }}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={24} />
    </button>
  );
};
