import React, {Fragment} from "react";
import './App.css';
import Navbar from "./Navbar";

// components
import Home from "./home/Home";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    default:
      break;
  }
  return <Fragment>
      <div className="container">
        <Navbar />
        {component}
      </div>
    </Fragment>;
}

export default App;
