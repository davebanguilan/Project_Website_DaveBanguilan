import React, {useEffect, createRef} from 'react';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import {Container} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import AOS from 'aos';
import 'aos/dist/aos.css';

const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: "Ubuntu, sans-serif"
  }
}));

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
            <CssBaseline />
            <Container  maxWidth="md" justify="center">
                <Hero scrollToComponent={scrollToComponent} />
                <Skills />
                <Projects />
                <Contact scrollDiv={scrollDiv} />
            </Container>
        </MuiThemeProvider>
    )
}

export default App;
