import React, {useEffect, createRef} from 'react';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import {Container} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AOS from 'aos';
import 'aos/dist/aos.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: "Ubuntu, sans-serif"
  }
});

const App = () => {
  const scrollDiv = createRef();

  const scrollToComponent = () => {
    scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

    return (
        <MuiThemeProvider theme={theme}>
            <Container  maxWidth="md" >
                <Hero scrollToComponent={scrollToComponent} />
                <Skills />
                <Projects />
                <Contact scrollDiv={scrollDiv} />
            </Container>
        </MuiThemeProvider>
    )
}

export default App;
