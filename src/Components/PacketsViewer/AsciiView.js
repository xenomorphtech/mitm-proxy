import React from "react";

const AsciiView = (props) => {
  const { ascii } = props;

  // const onMouseEnterOnAscii = (event) => {
  //   const { target } = event;
  //   const { target: { dataset: { ascii } } } = event;
    
  //   target.style.background = "#FFFFFF50";
  // };
  
  // const onMouseLeaveFromAscii = (event) => {
  //   const { target } = event;
  //   const { target: { dataset: { ascii } } } = event;

  //   target.style.background = "#FFFFFF00";
  // };

  // Todo :
  // Control HEX and its respective ASCII
  // using Packet Index, Line Index and Hex Index
  // 

  return <>
    {[...ascii].map((e, i) => (
      <span
        className="value-span"
        // onMouseEnter={onMouseEnterOnAscii}
        // onMouseLeave={onMouseLeaveFromAscii}
        data-ascii={e}
        data-xyz={"1,2,3"} // Packet Index, Line Index, Hex Index
      >
        {e}
      </span>
    ))}
  </>;
};

export default AsciiView;