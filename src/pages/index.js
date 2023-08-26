import React from "react";

function HomePage() {
  return <div>Main Page</div>;
}

export default HomePage;

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/users",
    },
  };
}
