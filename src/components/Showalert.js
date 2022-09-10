import React from "react";
export default function Showalert(props) {
  return (
    <div style={{ height: "3rem" }} className="alert-container">
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type}</strong> : {props.alert.msg}
        </div>
      )}
    </div>
  );
}
