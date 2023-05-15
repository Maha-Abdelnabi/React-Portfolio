import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'




const App = () => {
  return (
    <div>
        <Header />
        <Nav />
      <About />
      <Contact />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App