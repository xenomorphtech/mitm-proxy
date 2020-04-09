import React from "react";

const AsciiView = (props) => {
  const { ascii } = props;
  
  return (
    <span>{ascii}</span>
  );
};

export default AsciiView;