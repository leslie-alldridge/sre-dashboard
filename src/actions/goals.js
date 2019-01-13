import request from "../utils/api";

export function getGoalsAction() {
  return function(dispatch) {
    dispatch(loadingGoals(true));
    return request("get", "/goals/all")
      .then(response => {
        dispatch(goalsFetchDataSuccess(response.body));
      })
      .catch(err => dispatch(itemsHasErrored(err)));
  };
}

export function loadingGoals(status) {
  return {
    type: "GOALS_LOADING",
    isFetching: status
  };
}

export function goalsFetchDataSuccess(goals) {
  goals = goals.sort(function(a, b) {
    return a.id - b.id;
  });

  return {
    type: "GOALS_FETCH_DATA_SUCCESS",
    isFetching: false,
    goals
  };
}

export function itemsHasErrored(status) {
  return {
    type: "GOALS_HAS_ERRORED",
    hasErrored: status
  };
}

export function saveGoalsAction(area, section, value) {
  const data = {
    area,
    section,
    value
  };

  return function(dispatch) {
    dispatch(loadingGoals(true));
    return request("post", "/goals/save", data)
      .then(response => {
        dispatch(goalsFetchDataSuccess(response.body));
      })
      .catch(err => dispatch(itemsHasErrored(err)));
  };
}
