import {
  Box,
  Divider,
  Flex,
  Heading,
  Stack,

} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const Home: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" textAlign="center">
         <UserCard></UserCard>
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}></Stack>
      </Box>
    </Flex>
  );
});
