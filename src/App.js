import React from 'react';
import Hero from './components/Hero/Hero';
import {Container} from '@material-ui/core';

const App = () => {
    return (
        <Container  maxWidth="md" >
            <Hero />
        </Container>
    )
}

export default App;
