import React from 'react';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import {Container} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Ubuntu, sans-serif"
  }
});

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Container  maxWidth="md" >
                <Hero />
                <Skills />
            </Container>
        </MuiThemeProvider>
    )
}

export default App;
