import * as actions from "../../../src/actions/goals";

test("get goals action creator", () => {
  const expected = {
    type: "GOALS_LOADING",
    isFetching: true
  };
  expect(actions.loadingGoals(true)).toEqual(expected);
});

test("get goals errored", () => {
  const expected = {
    type: "GOALS_HAS_ERRORED",
    hasErrored: true
  };
  expect(actions.itemsHasErrored(true)).toEqual(expected);
});

test("get goals success", () => {
  const goals = [
    {
      id: "1",
      name: "name"
    },
    {
      id: "2",
      name: "name2"
    }
  ];
  const expected = {
    type: "GOALS_FETCH_DATA_SUCCESS",
    isFetching: false,
    goals
  };
  expect(actions.goalsFetchDataSuccess(goals)).toEqual(expected);
});
