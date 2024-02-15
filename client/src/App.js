import React, {Fragment} from "react";
import './App.css';
import Navbar from "./Navbar";

// components
import Home from "./home/Home";
import Board from "./board/Board";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/board":
      component = <Board />;
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

// How to start server
// cd server, nodemon index
// new terminal, cd client, npm start
