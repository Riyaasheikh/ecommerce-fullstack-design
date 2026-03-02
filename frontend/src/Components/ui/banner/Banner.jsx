import React from "react";
import SectionWrapper from "../../global/SectionWrapper";
import { Button, Row } from "react-bootstrap";
const Banner = () => {
  return (
    <SectionWrapper>
      <div
        className="d-flex flex-md-row flex-column justify-content-between align-items-center border rounded shadow-sm p-4"
        style={{ background: "linear-gradient(to right,#237CFF,#005ADE)" }}
      >
        <div className="text-center text-md-start">
          <h4 className="text-white  ">Super discount on more than 100 USD</h4>
          <p className="text-white">
            Have you ever finally just write dummy info
          </p>
        </div>
        <Button className="btn btn-warning text-white m-3 px-3">
          Shop now
        </Button>
      </div>
    </SectionWrapper>
  );
};
export default Banner;
