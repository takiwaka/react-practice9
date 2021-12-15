import { Button, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import './App.css';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
   <Button colorScheme="teal">ボタン</Button>
    </div>
    </ChakraProvider>
  );
}

export default App;
