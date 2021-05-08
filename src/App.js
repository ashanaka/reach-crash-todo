import Todos from "./components/Todos";
import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Take out the trash",
        completed: true,
      },
      {
        id: 3,
        title: "Take out the trash",
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;