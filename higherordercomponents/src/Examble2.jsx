import React from "react";
import withAuth from "./withAuth";

const Examble2 = () => {
  return <h1>✅ Welcome to Dashboard</h1>;
};

export default withAuth(Examble2);
