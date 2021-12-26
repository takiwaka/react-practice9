import { extendTheme } from "@chakra-ui/react";
import { generateKey } from "crypto";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray",
        color: "generateKey.800",
      },
    },
  },
});
export default theme;
