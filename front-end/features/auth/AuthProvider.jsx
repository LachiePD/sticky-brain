"use client";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [acess, setAccess] = useState({ isAllowed: false, restriction: "" });

  const revokeAccess = (reason) => {
    setAccess({ isAllowed: false, restriction: reason });
  };

  const value = { actions: { revokeAccess } };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
