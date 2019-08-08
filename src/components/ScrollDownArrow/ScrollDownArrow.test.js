import React from "react";
import ReactDOM from "react-dom";
import ScrollDownArrow from "./ScrollDownArrow";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ScrollDownArrow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
