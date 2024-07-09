import React from "react";

interface BinInterface {
  h1TextNode: string;
}

const Bin: React.FC<BinInterface> = ({ h1TextNode }) => {
  let style: React.CSSProperties = {
    color: "blue",
    backgroundColor : "green"
  };

  return (
    <div>
      <h1 style={style}>{h1TextNode}</h1>
    </div>
  );
};

export default Bin;
