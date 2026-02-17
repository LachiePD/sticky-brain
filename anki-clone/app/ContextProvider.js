"use client";

import { LoadingProvider } from "./LoadingContext.js";
import { UserProvider } from "./UserContext";

export const ContextProvider = ({ children }) => {
  return (
    <UserProvider>
      <LoadingProvider>{children}</LoadingProvider>
    </UserProvider>
  );
};
