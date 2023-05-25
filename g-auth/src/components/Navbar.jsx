import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <div>
        {/* <img src={`${picture}`} /> */}
        <div
          style={{
            padding: "5px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "500",
            border: "1px solid gray",
          }}
        >
          {isAuthenticated ? `${user.nickname}` : ""}
        </div>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
}

export default Navbar;
