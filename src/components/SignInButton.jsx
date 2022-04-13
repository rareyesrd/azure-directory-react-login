import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";

const handleLoginPopup = (instance) => {
  instance.loginPopup(loginRequest).catch((e) => {
    console.error(e);
  });
};

const handleLoginRedirect = (instance) => {
  instance.loginRedirect(loginRequest).catch((e) => {
    console.error(e);
  });
};

const SignInButton = () => {
  const { instance } = useMsal();
  return (
    <>
      <Button
        variant="secondary"
        className="ml-auto"
        onClick={() => handleLoginRedirect(instance)}
      >
        Sign in using Redirect
      </Button>
      <Button
        variant="secondary"
        className="ml-auto"
        onClick={() => handleLoginPopup(instance)}
      >
        {" "}
        Sign in using Popup
      </Button>
    </>
  );
};

export default SignInButton;
