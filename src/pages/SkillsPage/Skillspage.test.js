import React from "react";
import ReactDOM from "react-dom";
import SkillsPage from "./SkillsPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SkillsPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
