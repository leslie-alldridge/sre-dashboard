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
  return {
    type: "GOALS_FETCH_DATA_SUCCESS",
    goals
  };
}

export function itemsHasErrored(status) {
  return {
    type: "GOALS_HAS_ERRORED",
    hasErrored: status
  };
}
