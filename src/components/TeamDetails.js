import React from "react";

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
        </div>
      )}
    </div>
  );
}
