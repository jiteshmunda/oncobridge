import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/ScrollToTopButton.css";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
        <FaArrowUp />
      </button>
    )
  );
}

export default ScrollToTopButton;
