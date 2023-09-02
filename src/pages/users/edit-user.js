import React, { useContext } from "react";
import { formatDate } from "../../utils/helper";
import { useRouter } from "next/router";
import { AuthContext } from "../../Component/Context/Auth";

export default function EditMePage() {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div>
        <button onClick={() => router.replace("/users")}>Back</button>
      </div>
      <div>
        <h3>Email: {currentUser.email}</h3>
        <h3>Name: {currentUser.name}</h3>
        <p>Account Created on: {formatDate(currentUser.createdAt)}</p>
      </div>
    </>
  );
}
