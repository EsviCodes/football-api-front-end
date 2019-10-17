import React from "react";
import { Link } from "react-router-dom";

export default function TeamsList(props) {
  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {props.teams === null
          ? "Loading..."
          : props.teams.map(team => (
              <li key={team.id}>
                <Link to="/teams/:id">{team.name}</Link>{" "}
              </li>
            ))}
      </ul>
    </div>
  );
}
