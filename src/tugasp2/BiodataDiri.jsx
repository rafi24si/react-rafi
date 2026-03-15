import React from 'react';
import Container from './Container';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import './custom.css';

const BiodataDiri = () => {
  return (
    <Container>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </Container>
  );
};

export default BiodataDiri;