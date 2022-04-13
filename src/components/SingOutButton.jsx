import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";

const handleLogoutPopup = (instance) => {
  instance.logoutPopup().catch((e) => {
    console.error(e);
  });
};

const handleLogoutRedirect = (instance) => {
  instance.logoutRedirect().catch((e) => {
    console.error(e);
  });
};

const SignOutButton = () => {
  const { instance } = useMsal();

  return (
    <>
      <Button
        variant="secondary"
        className="ml-auto"
        onClick={() => handleLogoutPopup(instance)}
      >
        Sign out using Popup
      </Button>
      <Button
        variant="secondary"
        className="ml-auto"
        onClick={() => handleLogoutRedirect(instance)}
      >
        Sign out using Redirect
      </Button>
    </>
  );
};

export default SignOutButton;
