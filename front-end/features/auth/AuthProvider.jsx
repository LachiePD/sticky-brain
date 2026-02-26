"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [access, setAccess] = useState({
    isAllowed: false,
    restriction: "isLoggedOut",
  });
  const router = useRouter();
  const pathname = usePathname();
  const publicRoutes = ["/login", "/"];

  useEffect(() => {
    if (!access.isAllowed && !publicRoutes.includes(pathname)) {
      router.push("/login");
    }
  }, [access.isAllowed, pathname]);

  const revokeAccess = (reason) => {
    setAccess({ isAllowed: false, restriction: reason });
  };

  const value = { actions: { revokeAccess } };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
