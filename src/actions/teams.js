import request from "superagent";

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
  request(`${baseUrl}/team`) // teams?
    .then(response => {
      // dispatch a TEAMS_FETCHED action that contains the events
      dispatch(teamsFetched(response.body));
    })
    .catch(console.error);
};
