import React from "react";

export default function HomePage() {
  return <div>Main Page</div>;
}

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/users",
    },
  };
}
