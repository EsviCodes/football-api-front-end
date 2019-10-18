import request from "superagent";

// GET TEAMS
export const TEAMS_FETCHED = "TEAMS_FETCHED";

const baseUrl = "http://localhost:4000";

const teamsFetched = teams => ({
  type: TEAMS_FETCHED,
  payload: teams
});

export const loadTeams = () => (dispatch, getState) => {
  // when the state already contains teams, we don't fetch them again
  if (getState().teams) return;

  // a GET Teams request
  request(`${baseUrl}/teams`)
    .then(response => {
      // dispatch a TEAMS_FETCHED action that contains the events
      dispatch(teamsFetched(response.body));
    })
    .catch(console.error);
};

// Creating / POST one Team
export const TEAM_CREATE_SUCCESS = "TEAM_CREATE_SUCCESS";

const teamCreateSuccess = team => ({
  type: TEAM_CREATE_SUCCESS,
  payload: team
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

// GET one team
export const TEAM_FETCHED = "TEAM_FETCHED";

const teamFetched = team => ({
  type: TEAM_FETCHED,
  payload: team
});

export const loadTeam = id => (dispatch, getState) => {
  // when the state already contains teams, we don't fetch them again
  if (getState().team && getState().team.id === id) return;

  // a GET /team request
  request(`${baseUrl}/teams/${id}`)
    .then(response => {
      // dispatch a TEAMS_FETCHED action that contains the events
      dispatch(teamFetched(response.body));
    })
    .catch(console.error);
};

// DELETE ONE team
export const TEAM_DELETE_SUCCESS = "TEAM_DELETE_SUCCESS";

const teamDeleteSuccess = team => ({
  type: TEAM_DELETE_SUCCESS,
  payload: team // is null
});

export const deleteTeam = team => dispatch => {
  request
    .delete(`${baseUrl}/teams/${team.id}`)
    // .send(team)
    .then(response => {
      //   console.log("RES", response);
      dispatch(teamDeleteSuccess(team.id));
    })
    .catch(console.error);
};

// UPDATE one Team
export const TEAM_UPDATE_SUCCESS = "TEAM_UPDATE_SUCCESS";

const teamUpdateSuccess = team => ({
  type: TEAM_UPDATE_SUCCESS,
  payload: team
});

export const updateTeam = (id, data) => dispatch => {
  request
    .put(`${baseUrl}/teams/${id}`)
    .send(data)
    .then(res => {
      console.log("RES", res.body);
      dispatch(teamUpdateSuccess(res.body));
    })
    .catch(console.error);
};
