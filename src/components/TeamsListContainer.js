import React from "react";
import { loadTeams } from "../actions/teams";
import { connect } from "react-redux";
import TeamsList from "./TeamsList";
import CreateTeamFormContainer from "./CreateTeamFormContainer";
import "./styles/TeamsListContainer.css";

class TeamsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadTeams();
  }

  render() {
    return (
      <div className="list">
        <TeamsList teams={this.props.teams} />
        <CreateTeamFormContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.teams
});

export default connect(
  mapStateToProps,
  { loadTeams }
)(TeamsListContainer);
