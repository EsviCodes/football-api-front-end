import React from "react";
import { connect } from "react-redux";
import TeamDetails from "./TeamDetails";
import { loadTeam, updateTeam, deleteTeam } from "../actions/teams";

class TeamDetailsContainer extends React.Component {
  state = { editMode: false };

  componentDidMount() {
    this.props.loadTeam(Number(this.props.match.params.id)); // info from the route
  }

  onEdit = () => {
    // intialize editing mode:
    // set the starting value of the fields to the team details
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.team.name,
        description: this.props.team.description
      }
    });
  };

  onChange = team => {
    // update the formValues property with the new data from the input field
    this.setState({
      formValues: {
        ...this.state.formValues,
        [team.target.name]: team.target.value
      }
    });
  };

  onSubmit = team => {
    team.preventDefault();
    this.setState({
      editMode: false
    });
    this.props.updateTeam(this.props.team.id, this.state.formValues);
  };

  onDelete = () => {
    this.props.deleteTeam(this.props.team);
    this.props.history.push("/");
  };

  render() {
    console.log("PROPS IN DETAILS CONTAINER", this.props);
    return (
      <div>
        <TeamDetails
          onEdit={this.onEdit}
          team={this.props.team}
          onDelete={this.onDelete}
          editMode={this.state.editMode}
          formValues={this.state.formValues}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  team: state.team
});

export default connect(
  mapStateToProps,
  { loadTeam, deleteTeam, updateTeam }
)(TeamDetailsContainer);
