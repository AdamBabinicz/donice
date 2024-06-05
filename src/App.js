import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme, blackTheme, whiteTheme } from "./theme";
import { GlobalStyles } from "./global";
import CookieConsent from "react-cookie-consent";

function App() {
  const [theme, setTheme] = useState(chosenTheme);

  const toggleTheme = () => {
    console.log("Zmiana motywu!");
    setTheme((prevTheme) =>
      prevTheme === blackTheme ? whiteTheme : blackTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={theme} toggleTheme={toggleTheme} />
        </div>
      </>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </ThemeProvider>
  );
}

export default App;
