import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import { useRouter } from "next/router";
import { publicRoute } from "../../../utils/helper";
import axios from "axios";

axios.defaults.headers = {
  cache: "no-store",
};

axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `${accessToken}`;
    }

    // config.headers["cache-control"] = "no-store";
    // config.head

    return config;
  },
  (error) => {
    console.log({ error });
    return Promise.reject(error);
  }
);

export default function ProtectedRoute({ children }) {
  const { userLoading, isUserLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  if (
    userLoading ||
    (!isUserLoggedIn && !publicRoute.includes(router.pathname))
  )
    return <div>Loading...</div>;

  return children;
}
