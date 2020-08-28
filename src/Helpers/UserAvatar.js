import React, { Suspense } from "react";
import { AuthCheck } from "reactfire";
import Login from "../User/Login";
import ProfileIcon from "../User/ProfileIcon";
export default function UserAvatar() {
  return (
    <Suspense fallback={<div></div>}>
      <AuthCheck fallback={<Login />}>
        <ProfileIcon />
      </AuthCheck>
    </Suspense>
  );
}
