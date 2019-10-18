import React from "react";

export default function TeamDetails(props) {
  return (
    <div>
      {props.teams === null
        ? "Loading..."
        : props.teams.map(team => (
            <div>
              <h1>{team.name}</h1>
              <p>{team.description}</p>
            </div>
          ))}
    </div>
  );
}
