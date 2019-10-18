const teams = (state = null, action = {}) => {
  switch (action.type) {
    case "TEAMS_FETCHED":
      return action.payload;
    case "TEAM_CREATE_SUCCESS":
      return [...state, { ...action.payload }];
    case "TEAM_DELETE_SUCCESS":
      return state.filter(team => team.id !== action.payload);
    case "TEAM_UPDATE_SUCCESS":
      return state.map(team => {
        if (team.id === action.payload.id) return action.payload;
        return team;
      });
    default:
      return state;
  }
};

export default teams;
