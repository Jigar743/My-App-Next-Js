import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import { useRouter } from "next/router";
import { publicRoute } from "../../../utils/helper";

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
