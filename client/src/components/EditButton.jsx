import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const EditButton = props => (
  <span className="edit-btn" style={{ float: "right", cursor: "pointer" }} {...props}>
    E
  </span>
);

export default EditButton;
