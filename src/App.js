import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import request from "superagent";

export default class App extends Component {
  componentDidMount() {
    request
      .get("http://localhost:4000/teams")
      .then(console.log)
      .catch(console.error);
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Home} />
        </div>
      </Provider>
    );
  }
}
