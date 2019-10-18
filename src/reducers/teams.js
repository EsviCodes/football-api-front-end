const teams = (state = null, action = {}) => {
  switch (action.type) {
    case "TEAMS_FETCHED":
      return action.payload;
    case "TEAM_CREATE_SUCCESS":
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};

export default teams;
