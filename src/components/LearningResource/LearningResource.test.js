import React from "react";
import ReactDOM from "react-dom";
import LearningResource from "./LearningResource";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LearningResource />, div);
  ReactDOM.unmountComponentAtNode(div);
});
