import { Button, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Button colorScheme="teal">ボタン</Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
