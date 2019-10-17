const teams = (state = null, action = {}) => {
  switch (action.type) {
    case "TEAMS_FETCHED":
      return action.payload;
    default:
      return state;
  }
};

export default teams;
