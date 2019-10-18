const teams = (state = null, action = {}) => {
  switch (action.type) {
    case "TEAMS_FETCHED":
      return action.payload;
    case "TEAM_CREATE_SUCCESS":
      return [...state, { ...action.payload }];
    case "TEAM_DELETE_SUCCESS":
      return state.filter(team => team !== null);
    default:
      return state;
  }
};

export default teams;
