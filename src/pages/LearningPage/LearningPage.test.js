import React from "react";
import ReactDOM from "react-dom";
import LearningPage from "./LearningPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LearningPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
