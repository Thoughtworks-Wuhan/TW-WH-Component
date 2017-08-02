import "./Alert.scss";
import React from "react";

function template(name) {
  return (
    <div className="alert">
      <h1>Alert, {name}</h1>
    </div>
  );
};

export default template;
