import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API_ROUTES } from "../../utils/ApiManage";
import { useRouter } from "next/router";
import { cookiesMethods, localStorageMethods } from "../../utils/helper";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      setUserLoading(true);
      const token = cookiesMethods.get("token");

      if (token) {
        try {
          const response = await axios.get(API_ROUTES.getCurrentUser, {
            headers: {
              Authorization: token,
            },
          });

          if (response.status === 200) {
            console.log({ response });
            const { user } = response.data;
            setUserLoggedIn(true);
            setCurrentUser(user);
          }
        } catch (error) {
          logout();
        }
      }
      setUserLoading(false);
    })();
  }, [router.pathname]);

  const logout = () => {
    setUserLoggedIn(false);
    setCurrentUser(null);
    router.replace("/login");
    localStorageMethods.deleteItem("token");
    cookiesMethods.delete("token");
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        setCurrentUser,
        setUserLoggedIn,
        currentUser,
        userLoading,
        setUserLoading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
