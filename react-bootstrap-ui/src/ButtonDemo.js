import React from "react";
import Button from "react-bootstrap/Button";

const ButtonDemo = () => {
  return (
    <React.Fragment>
      <h2>Button Demo</h2>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
    </React.Fragment>
  );
};

export default ButtonDemo;
