import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';




const App = () => {
  return (
    <>
        <Header />
        <Nav />
      <About />
      <Header />
      <Contact />
      <Portfolio />
      <Footer />
      <Resume />
    </>
  );
}

export default App;