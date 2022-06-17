import './App.css';
import { Brand, Cta, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibilities, WhatGPT } from './container';
import {
  BrowserRouter,
  
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibilities />
      <Cta />
      <Blog />

      
  <Footer />
    </>
  );
}

export default App;
