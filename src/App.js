import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import request from "superagent";
import TeamsListContainer from "./components/TeamsListContainer";
import TeamDetailsContainer from "./components/TeamDetailsContainer";

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
          <Route path="/" exact component={TeamsListContainer} />
          <Route path="/teams/:id" component={TeamDetailsContainer} />
        </div>
      </Provider>
    );
  }
}
