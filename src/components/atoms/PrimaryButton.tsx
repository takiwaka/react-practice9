import { memo, ReactNode, VFC } from "react";

import { Button } from "@chakra-ui/react";

type Props = {
  children:ReactNode;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <Button bg="orange.300" color="black" _hover={{ opacity: 0.8 }}>
     {children}
    </Button>
  );
});
