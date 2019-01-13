import goals from "../../../src/reducers/goals";

test("goals reducer Initial State", () => {
  const expected = { isFetching: true };

  const actual = goals(undefined, {});

  expect(actual).toEqual(expected);
});

test("loading getting users goals", () => {
  const expected = { isFetching: true };

  const action = {
    type: "GOALS_LOADING",
    isFetching: true
  };

  const actual = goals([], action);

  expect(actual).toEqual(expected);
});

test("getting users goals", () => {
  const goalsData = [{ id: "1", goal: "name" }];
  const expected = [...goalsData];

  const action = {
    type: "GOALS_FETCH_DATA_SUCCESS",
    isFetching: false,
    goals: goalsData
  };

  const actual = goals([], action).goals;

  expect(actual).toEqual(expected);
});

test("users goals errored", () => {
  const expected = { error: true };

  const action = {
    type: "GOALS_HAS_ERRORED",
    hasErrored: true
  };

  const actual = goals([], action);

  expect(actual).toEqual(expected);
});
