import React from 'react';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Cookies from "js-cookie";

const App = () => {
  // Cookies.remove('token');
  return (
    <>
      <Header/>

      <Nav/>
    </>
  );
};

export default App;
