import Todos from "./components/Todos";
import AddTodos from "./components/AddTodos";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Take out the trash",
        completed: false,
      },
      {
        id: uuid(),
        title: "Take out the trash",
        completed: false,
      },
      {
        id: uuid(),
        title: "Take out the trash",
        completed: false,
      },
    ],
  };

  // toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // delete todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodos addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    delTodo={this.delTodo}
                    markComplete={this.markComplete}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
