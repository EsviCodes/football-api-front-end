import React from "react";
import { connect } from "react-redux";
import { createTeam } from "../actions/teams";
import TeamForm from "./TeamForm";

class CreateTeamFormContainer extends React.Component {
  state = {
    name: "",
    date: "",
    description: ""
  };

  onChange = team => {
    this.setState({
      [team.target.name]: team.target.value
    });
  };

  onSubmit = team => {
    team.preventDefault();
    this.props.createTeam(this.state);
    this.setState({
      name: "",
      date: "",
      description: ""
    });
  };
  render() {
    return (
      <TeamForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createTeam }
)(CreateTeamFormContainer);
