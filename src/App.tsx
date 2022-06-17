import { render } from "react-dom";
import { StrictMode, useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import { Animaciones } from "./lotties/Animaciones";
import TypedReactHooksDemo from "./PruebaTyped/TypedReactHooksDemo";


const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
      <TypedReactHooksDemo />
      <div style={{height: "200px"}}></div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Animaciones/>} />
          </Routes>
        </BrowserRouter>
        <div style={{height: "2000px"}}></div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
