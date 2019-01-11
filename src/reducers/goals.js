export default function goals(state = [], action) {
  switch (action.type) {
    case "GOALS_LOADING":
      return {
        isFetching: action.isFetching
      };
    case "GOALS_FETCH_DATA_SUCCESS":
      return {
        isFetching: action.isFetching,
        goals: action.goals
      };
    case "GOALS_HAS_ERRORED":
      return {
        error: action.hasErrored
      };
    default:
      return state;
  }
}
