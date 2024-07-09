import React from "react";
import Minam from "./minam";
import UlComponent from "./ul";
import Bin from "./bin";

const App = () => {
  return (
    <div>
      <Minam name="test" age={4} />
      <UlComponent list={["test", "test1", "test3"]} />
      <Bin h1TextNode="성빈"/>
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
