import React, { useState, useEffect, useRef } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Cleanup scroll event listener
    return () => {
      window.onscroll = null;
    };
  }, []);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const buttonStyle = {
    color: theme.body,
    backgroundColor: theme.text,
    border: `solid 1px ${theme.text}`,
    visibility: isVisible ? "visible" : "hidden",
  };

  const onMouseEnter = () => {
    const topButton = document.getElementById("topButton");
    if (topButton) {
      topButton.style.color = theme.text;
      topButton.style.backgroundColor = theme.body;
    }
  };

  const onMouseLeave = () => {
    const topButton = document.getElementById("topButton");
    if (topButton) {
      topButton.style.color = theme.body;
      topButton.style.backgroundColor = theme.text;
    }
  };

  return (
    <div
      onClick={scrollToTop}
      id="topButton"
      className={`top-button ${theme.name}`}
      style={buttonStyle}
      title="Do góry"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </div>
  );
}
