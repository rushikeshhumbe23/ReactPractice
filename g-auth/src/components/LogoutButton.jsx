import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
const Button = styled.button`
  background-color: rgb(4, 4, 150);
  font-weight: 500;
  padding: 5px 10px;
  font-size: large;
  color: white;
  border: 1px solid rgb(4, 4, 150);
  border-radius: 5px;
`;
