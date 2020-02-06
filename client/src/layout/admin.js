import React from "react";
import { useAuth } from "../context/auth";

function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
      <div>Admin Page</div>
      <button className="btn btn-primary btn-block " onClick={logOut}>Log out</button>
    </div>
  );
}

export default Admin;