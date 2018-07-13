import { combineReducers } from "redux";
import {
  ReceiveGifsAction,
  RequestGifsAction,
  SelectFilterAction
} from "../actions";
import {
  RECEIVE_GIFS,
  REQUEST_GIFS,
  SELECT_FILTER
} from "../constants/index";
import { FilterState, GifsState } from "../types/index";

function selectFilter(state: FilterState = {filter: 'awn'}, action: SelectFilterAction) {
  switch (action.type) {
    case SELECT_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function gifs(
  state: GifsState = { gifs: [], isFetching: false},
  action: ReceiveGifsAction | RequestGifsAction
) {
  switch (action.type) {
    case REQUEST_GIFS:
      return Object.assign({}, state, { isFetching: true });
    case RECEIVE_GIFS:
      const typedAction = action as ReceiveGifsAction;
      return Object.assign({}, state, {
        gifs: typedAction.gifs,
        isFetching: false,
        lastUpdated: typedAction.receivedAt
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
    gifs,
    selectFilter,
})

export default rootReducer;
