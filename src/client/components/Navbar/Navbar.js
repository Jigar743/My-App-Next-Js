import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth/Auth";
import { StyledNavbar } from "./Navbar.styled";

function Navbar() {
  const router = useRouter();
  const [popOverToggle, setPopOverToggle] = useState(false);
  const { isUserLoggedIn, logout } = useContext(AuthContext);

  return (
    <StyledNavbar>
      <div className="navbar-brand">
        <p>Brand</p>
      </div>
      <div className="navbar-links">
        {!isUserLoggedIn ? (
          <>
            <button
              onClick={() => {
                router.replace("/signup");
              }}
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                router.replace("/login");
              }}
            >
              Login
            </button>
          </>
        ) : (
          <div className="profile-popover">
            <button
              className="popover-btn"
              onClick={() => setPopOverToggle(!popOverToggle)}
            >
              Profile
            </button>
            {popOverToggle && (
              <div className="popover">
                <button
                  onClick={() => {
                    router.replace(`/users/edit-user`);
                  }}
                >
                  Edit Profile
                </button>
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
