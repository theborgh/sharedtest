import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";

const mockLinks = ["test", "test2"];

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Navbar links={mockLinks} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
