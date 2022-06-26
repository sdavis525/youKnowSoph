import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';

function router (page) {
  switch (page) {
      case "contact":
        return <ContactForm />

      case "portfolio":
        return <Portfolio />

      default:
          return <About />
  }
}

function App() {
  const [selectedPage, setPage] = useState('home');

  return (
    <div>
      <Nav seletected={selectedPage} onSelect={setPage} />
      <main>
   

        { router(selectedPage) }
        
        <Footer />
      </main>
    </div>
  );
}

export default App;