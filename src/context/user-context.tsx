"use client";

import logout from "@/actions/logout";
import validateToken from "@/actions/validate-token";
import React from "react";

type User = {
  id: number;
  name: string;
  email: string;
  username: string;
};

type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === null) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUser] = React.useState<User | null>(user);

  React.useEffect(() => {
    async function validate() {
      const { ok } = await validateToken();

      if (!ok) {
        await logout();
      }
    }

    if (userState) {
      validate();
    }
  }, [userState]);

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
