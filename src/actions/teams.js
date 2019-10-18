import request from "superagent";

// Fetching TEAMS
export const TEAMS_FETCHED = "TEAMS_FETCHED";

const baseUrl = "http://localhost:4000";

const teamsFetched = teams => ({
  type: TEAMS_FETCHED,
  payload: teams
});

export const loadTeams = () => (dispatch, getState) => {
  // when the state already contains teams, we don't fetch them again
  if (getState().teams) return;

  // a GET /events request
  request(`${baseUrl}/teams`)
    .then(response => {
      // dispatch a TEAMS_FETCHED action that contains the events
      dispatch(teamsFetched(response.body));
    })
    .catch(console.error);
};

// Creating Team
export const TEAM_CREATE_SUCCESS = "TEAM_CREATE_SUCCESS";

const teamCreateSuccess = team => ({
  type: TEAM_CREATE_SUCCESS,
  team
});

export const createTeam = data => dispatch => {
  request
    .post(`${baseUrl}/teams`)
    .send(data)
    .then(response => {
      dispatch(teamCreateSuccess(response.body));
    })
    .catch(console.error);
};

// Fetching one team
export const TEAM_FETCHED = "TEAM_FETCHED";

const teamFetched = team => ({
  type: TEAM_FETCHED,
  payload: team
});

export const loadTeam = id => (dispatch, getState) => {
  // when the state already contains teams, we don't fetch them again
  if (getState().team) return;

  // a GET /team request
  request(`${baseUrl}/teams/${id}`)
    .then(response => {
      // dispatch a TEAMS_FETCHED action that contains the events
      dispatch(teamFetched(response.body));
    })
    .catch(console.error);
};
