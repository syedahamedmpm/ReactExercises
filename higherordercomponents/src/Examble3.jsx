import React from "react";
import commonApiCall from "./commonApiCall";

const Examble3 = (data) => {
  console.log("DATA", data);
  return <>Examble3</>;
};

export default commonApiCall(
  Examble3,
  "https://jsonplaceholder.typicode.com/users"
);
