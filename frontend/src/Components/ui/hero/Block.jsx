import React from "react";
import avatar from "../../../assets/img/Avatar.png";
import { Button, Stack } from "react-bootstrap";

const Block = () => {
  return (
    <div className="d-flex flex-column gap-2" style={{ width: "250px" }}>
      
      {/* User Login/Join Card */}
      <div className="p-3 border-0 rounded-3 shadow-sm" style={{ backgroundColor: "#E3F0FF" }}>
        <div className="d-flex align-items-center mb-3">
          <img
            src={avatar}
            alt="user avatar"
            className="me-3 rounded-circle border border-white"
            style={{ width: "44px", height: "44px", objectFit: "cover" }}
          />
          <div className="lh-sm">
            <p className="mb-0 small text-dark">Hi, User 👋</p>
            <small className="text-muted">Let’s get started</small>
          </div>
        </div>

        <Stack gap={2}>
          <Button
            className="w-100 border-0 btn-sm fw-bold py-2"
            style={{
              background: "#127FFF",
              borderRadius: "6px"
            }}
          >
            Join Now
          </Button>

          <Button
            variant="light"
            className="w-100 border btn-sm fw-bold py-2 text-primary bg-white"
            style={{ borderRadius: "6px" }}
          >
            Log In
          </Button>
        </Stack>
      </div>

      {/* Promo Box 1 - Orange */}
      <div
        className="p-3 text-white rounded-3 shadow-sm d-flex align-items-center"
        style={{ backgroundColor: "#F38332", height: "95px", fontSize: "14px" }}
      >
        <span className="fw-normal">Get US $10 off with a new supplier</span>
      </div>

      {/* Promo Box 2 - Teal */}
      <div
        className="p-3 text-white rounded-3 shadow-sm d-flex align-items-center"
        style={{ backgroundColor: "#55BDC3", height: "95px", fontSize: "14px" }}
      >
        <span className="fw-normal">Send quotes with supplier preferences</span>
      </div>
      
    </div>
  );
};

export default Block;