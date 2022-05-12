import React from "react";

function Step2() {
  const dataStore = JSON.parse(localStorage.getItem("Data"));

  return <div>{dataStore?.pickupdate}</div>;
}

export default Step2;
