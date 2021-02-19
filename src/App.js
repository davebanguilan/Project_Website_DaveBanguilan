import React, {useEffect} from 'react';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
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
  
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

    return (
        <MuiThemeProvider theme={theme}>
            <Container  maxWidth="md" >
                <Hero />
                <Skills />
                <Projects />
            </Container>
        </MuiThemeProvider>
    )
}

export default App;
