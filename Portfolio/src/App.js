import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./Theme";
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Route 
            path="/" 
            element={<Home />} 
          />
        </ChakraProvider>
    );
}
    
export default App;
