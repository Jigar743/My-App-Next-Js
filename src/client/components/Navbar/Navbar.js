import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth/Auth";
import { StyledNavbar } from "./Navbar.styled";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const router = useRouter();
  const [popOverToggle, setPopOverToggle] = useState(false);
  const { isUserLoggedIn, logout } = useContext(AuthContext);

  return (
    <StyledNavbar>
      <div className="navbar-brand" onClick={() => router.replace("/")}>
        Brand
      </div>

      <div className="navbar-links">
        <ThemeToggle />

        {!isUserLoggedIn ? (
          <>
            <button onClick={() => router.replace("/signup")}>Sign Up</button>
            <button onClick={() => router.replace("/login")}>Login</button>
          </>
        ) : (
          <div className="profile-popover">
            <button
              className="popover-btn"
              onClick={() => setPopOverToggle((v) => !v)}
            >
              Profile
            </button>

            {popOverToggle && (
              <div className="popover">
                <button
                  onClick={() => {
                    setPopOverToggle(false);
                    router.replace("/users/edit-user");
                  }}
                >
                  Edit Profile
                </button>

                <button
                  className="logout-btn"
                  onClick={() => {
                    setPopOverToggle(false);
                    logout();
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
