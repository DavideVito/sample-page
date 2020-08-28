import React from "react";
import { Button } from "@material-ui/core";
import { useAuth } from "reactfire";
import firebase from "firebase";

export default function Login() {
  const auth = useAuth();

  const accedi = () => {
    let provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider);
  };

  return (
    <Button variant="outlined" onClick={accedi}>
      Login using Google
    </Button>
  );
}
