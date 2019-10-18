import React from "react";

export default function TeamForm(props) {
  console.log("PROPS", props);
  const { values, onSubmit, onChange } = props;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            name="name"
            onChange={onChange}
            type="text"
            value={values.name}
          />
        </label>
        <label>
          Description:
          <input
            name="description"
            onChange={onChange}
            type="text"
            value={values.description}
          />
        </label>
        <button type="submit">Add Team</button>
      </form>
    </div>
  );
}
