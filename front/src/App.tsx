import React from 'react';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import axios from 'axios'
import Cookies from "js-cookie";

const App = () => {
  // axios.get('http://vahella.me:5000').then(response => console.log(response.data))

  // Cookies.remove('token');
  return (
    <>
      <Header/>

      <Nav/>
    </>
  );
};

export default App;
