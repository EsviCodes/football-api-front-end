import React from "react";
import { connect } from "react-redux";
import TeamDetails from "./TeamDetails";
import { loadTeam, updateTeam, deleteTeam } from "../actions/teams";

class TeamDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadTeam(Number(this.props.match.params.id));
  }

  onClick = () => {
    this.props.deleteTeam(this.props.team);
  };

  render() {
    console.log("PROPS IN DETAILS CONTAINER", this.props);
    return <TeamDetails team={this.props.team} onClick={this.onClick} />;
  }
}

const mapStateToProps = state => ({
  team: state.team
});

export default connect(
  mapStateToProps,
  { loadTeam, deleteTeam }
)(TeamDetailsContainer);
