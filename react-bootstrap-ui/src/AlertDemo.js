import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertDemo = () => {
  return (
    <React.Fragment>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert-check it out!
        </Alert>
      ))}
    </React.Fragment>
  );
};

export default AlertDemo;
