import Router from "next/router";
import React from "react";

export default function ChangePasswordPage() {
  return (
    <>
      change-password
      <button type="button" onClick={() => Router.back(-1)}>
        Back
      </button>
    </>
  );
}
