import './App.css';
import { Brand, Cta, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibilities, WhatGPT } from './container';

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
