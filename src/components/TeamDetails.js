import React from "react";
import TeamForm from "./TeamForm";

export default function TeamDetails(props) {
  console.log("PROPS FROM DETAILS", props);
  // const { name, description } = props.team;
  return (
    <div>
      {props.team === null ? (
        "Loading..."
      ) : (
        <div>
          <h1>{props.team.name}</h1>
          <p>{props.team.description}</p>
          <button onClick={props.onEdit}>Edit Team {props.team.name}</button>
          <button onClick={props.onDelete}>
            Delete Team {props.team.name}
          </button>
          {props.editMode === true ? (
            <TeamForm
              values={props.formValues}
              onChange={props.onChange}
              onSubmit={props.onSubmit}
            />
          ) : (
            <p>Click Edit to Edit</p>
          )}
        </div>
      )}
    </div>
  );
}
