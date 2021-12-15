import { extendTheme } from "@chakra-ui/react";
import { generateKey } from "crypto";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "generateKey.800",
      },
    },
  },
});
export default theme;
