import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route, Link } from "react-router-dom";
import request from "superagent";
import TeamsListContainer from "./components/TeamsListContainer";
import TeamDetailsContainer from "./components/TeamDetailsContainer";
import Home from "./components/Home";

export default class App extends Component {
  componentDidMount() {
    request
      .get("http://localhost:4000/teams")
      .then(res => {
        console.log(res.body);
      })
      //res.json()})
      //.then(console.log("TEAMS", teams))
      .catch(console.error);
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Link className="link" to="/">
            Home
          </Link>{" "}
          <Link className="link" to="/teams">
            Teams
          </Link>
          <Route path="/" exact component={Home} />
          <Route path="/teams" exact component={TeamsListContainer} />
          <Route path="/teams/:id" exact component={TeamDetailsContainer} />
        </div>
      </Provider>
    );
  }
}
