import { useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUsers } from "../../hooks/useSelectUsers";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const Home: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUsers();

  useEffect(() => getUsers(), [getUsers]);

  const onClickUser = useCallback(
    (id: number) => {
      console.log(id);
      onSelectUser({ id, users, onOpen });
      onOpen();
    },
    [onOpen, onSelectUser, users]
  );

  return (
    <>
      <Wrap p={{ base: 4, md: 10 }} justify="center">
        {users.map((user) => (
          <WrapItem>
            <UserCard
              id={2}
              imageUrl="https://source.unsplash.com/random"
              userName={user.username}
              fullName={user.name}
              onClick={onClickUser}
            />
          </WrapItem>
        ))}
      </Wrap>

      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        isAdmin={true}
        onClose={onClose}
      />
    </>
  );
});
