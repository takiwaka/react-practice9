import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "../types/api/user";

type LoginUserContextType ={
  loginUser:User
  setLoginUser:Dispatch<SetStateAction<User|null>>
}

const LoginUserContext =createContext<LoginUserContextType>({}as LoginUserContextType);

