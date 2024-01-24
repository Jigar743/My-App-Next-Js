import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API_ROUTES } from "@/utils/ApiManage";
import { useRouter } from "next/router";
import { cookiesMethods, localStorageMethods } from "@/utils/helper";
import { message } from "antd";

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
            const { user } = response.data;
            setUserLoggedIn(true);
            setCurrentUser(user);
          }
        } catch (error) {
          console.log({ error });
          logout();
          message.error("Unauthorized user!");
        }
      } else {
        setUserLoggedIn(false);
        setCurrentUser(null);
      }
      setUserLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  const logout = () => {
    setUserLoggedIn(false);
    setCurrentUser(null);
    localStorageMethods.deleteItem("token");
    cookiesMethods.delete("token");
    router.replace("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        currentUser,
        userLoading,
        setCurrentUser,
        setUserLoggedIn,
        setUserLoading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
