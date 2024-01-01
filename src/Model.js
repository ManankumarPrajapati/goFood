import React from "react";
import ReactDOM from "react-dom";

const MODEL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "darkgrey",
  transform: "translate(-50%,-50%)",
  zIndex: 1000,
  width: "90%",
  height: "90%",
};
const OVERLAY_STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 1000,
};

const Model = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <>
      <div style={MODEL_STYLE}> </div>
      <div style={OVERLAY_STYLE}>
        <button
          className="btn bg-danger fs-3"
          style={{ marginLeft: "90%", marginTop: "35px" }}
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </>,
    document.getElementById("cart-root")
  );
};

export default Model;
