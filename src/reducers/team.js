const team = (state = null, action = {}) => {
  switch (action.type) {
    case "TEAM_FETCHED":
      return action.payload;
    case "TEAM_UPDATE_SUCCESS":
      console.log("reducer call?");
      return action.payload;
    default:
      return state;
  }
};

export default team;
