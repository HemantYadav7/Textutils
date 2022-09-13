import React from "react";
const Showalert = (props) => {
  const { alert } = props;
  return (
    <div style={{ height: "3rem" }} className="alert-container">
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{alert.type}</strong> : {alert.msg}
        </div>
      )}
    </div>
  );
};
export default Showalert;
