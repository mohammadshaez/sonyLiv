import "./App.css";
import { ThemeProvider } from "styled-components";
import React from "react";
import { theme } from "./helper/theme";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

function About() {
  return <h1>Not Found</h1>;
}
{
  /* <Route path="*" element={<NoMatch />} /> */
}
