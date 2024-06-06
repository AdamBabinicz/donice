import React from "react";
import "./Button.css";

const Button = ({ text, onClick, className, theme }) => {
  // Funkcja do zmiany kolorów po najechaniu myszą
  const handleMouseEnter = (event) => {
    event.target.style.color = theme.body; // Ustawienie koloru tekstu na kolor tła
    event.target.style.backgroundcolor = theme.text; // Ustawienie tła na kolor tekstu
  };

  // Funkcja do przywracania pierwotnych kolorów
  const handleMouseOut = (event) => {
    event.target.style.color = theme.text; // Przywrócenie koloru tekstu
    event.target.style.backgroundcolor = theme.body; // Przywrócenie tła
  };

  return (
    <div className={className}>
      <button
        className="main-button"
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        style={{
          color: theme.text, // Kolor tekstu na przycisku
          backgroundcolor: theme.body, // Tło przycisku
          border: `solid 1px ${theme.text}`, // Ramka przycisku
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
