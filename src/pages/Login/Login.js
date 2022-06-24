import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Login = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Sign in</button>
      )}
      {isAuthenticated && <button onClick={() => logout()}>Sign Out</button>}
    </div>
  );
};

export default Login;
