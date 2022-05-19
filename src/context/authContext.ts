import React, { FC } from "react";
import { User } from "../types/User";

interface AuthContext {
  auth?: boolean;
  user?: User;
  setAuth?: React.Dispatch<React.SetStateAction<boolean>>;
  setUser?: React.Dispatch<React.SetStateAction<User>>;
}

const authContext: React.Context<AuthContext> = React.createContext({});

export default authContext;
