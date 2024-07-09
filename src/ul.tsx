import React from "react";
import UlInterface from "../static/ul-data-interface";

const UlComponent: React.FC<UlInterface> = ({ list }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default UlComponent;
