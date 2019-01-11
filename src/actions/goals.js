import request from "../utils/api";

export function getGoalsAction() {
  return function(dispatch) {
    dispatch(loadingGoals(true));
    return request("get", "/goals/all")
      .then(response => {
        console.log(response);

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
  console.log(area);
  console.log(section);
  console.log(value);
  //values are sweet here
  const data = {
    area,
    section,
    value
  };
  console.log(data);

  return function(dispatch) {
    dispatch(loadingGoals(true));
    return request("post", "/goals/save", data)
      .then(response => {
        console.log(response);

        dispatch(goalsFetchDataSuccess(response.body));
      })
      .catch(err => dispatch(itemsHasErrored(err)));
  };
}
