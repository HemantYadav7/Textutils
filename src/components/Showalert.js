import React from "react";
export default function Showalert(props) {
  return (
  props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show` }role="alert">
  <strong>{props.alert.type}</strong> : {props.alert.msg}
 
</div>
  );
}
