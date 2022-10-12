import React from "react";
import Spinner from "react-bootstrap/Spinner";

const SpinnerDemo = () => {
  return (
    <React.Fragment>
      <div className="mb-4">
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" className="ms-3" />
        <Spinner animation="border" variant="success" className="ms-3" />
        <Spinner animation="border" variant="danger" className="ms-3" />
        <Spinner animation="border" variant="warning" className="ms-3" />
        <Spinner animation="border" variant="info" className="ms-3" />
        <Spinner animation="border" variant="light" className="ms-3" />
        <Spinner animation="border" variant="dark" className="ms-3" />
      </div>
      <div>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" className="ms-3" />
        <Spinner animation="grow" variant="success" className="ms-3" />
        <Spinner animation="grow" variant="danger" className="ms-3" />
        <Spinner animation="grow" variant="warning" className="ms-3" />
        <Spinner animation="grow" variant="info" className="ms-3" />
        <Spinner animation="grow" variant="light" className="ms-3" />
        <Spinner animation="grow" variant="dark" className="ms-3" />
      </div>
    </React.Fragment>
  );
};

export default SpinnerDemo;
