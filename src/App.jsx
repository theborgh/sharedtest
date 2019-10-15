import React from "react";
import "./App.scss";
import Pages from "./components/Pages/Pages";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
