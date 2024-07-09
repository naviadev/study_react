import React from "react";
import MinamInterface from "../static/basic-data";

const Minam: React.FC<MinamInterface> = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Minam name="test" age={4} />
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
