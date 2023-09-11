import "./App.css";
import { ThemeProvider } from "styled-components";
import React from "react";
import { theme } from "./helper/theme";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Show from "./pages/Show";
import MyList from "./pages/MyList";
import Profile from "./pages/Profile";

function App() {
  const token = useSelector((state) => state.user.userToken);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/show/:id" element={<Show />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/profile" element={<Profile />} />

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
