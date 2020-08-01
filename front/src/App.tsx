import React from 'react';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import axios from 'axios'

const App = () => {
  // axios.get('http://vahella.me:5000').then(response => console.log(response.data))

  return (
    <>
      <Header/>

      <Nav/>
    </>
  );
};

export default App;
