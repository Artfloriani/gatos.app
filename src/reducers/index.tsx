import { ReceiveGifsAction, RequestGifsAction } from "../actions";
import { RECEIVE_GIFS, REQUEST_GIFS, SELECT_FILTER } from "../constants/index";
import { GifsState } from "../types/index";

function handleGifs(
  state: GifsState,
  action: ReceiveGifsAction | RequestGifsAction
) {
  switch (action.type) {
    case REQUEST_GIFS:
      return Object.assign({}, state, { isFetching: true });
    case RECEIVE_GIFS:
      const receiveAction = action as ReceiveGifsAction;

      const newState: GifsState = {
        currentPage: state.currentPage + 1,
        filter: state.filter,
        gifs: state.gifs.concat(receiveAction.gifs),
        isFetching: false,
        lastUpdated: receiveAction.receivedAt,
        searchQuery: 'cats'
      };
      return Object.assign({}, state, newState);
    case SELECT_FILTER:
      const selectAction = action as ReceiveGifsAction;
      return Object.assign({}, state, { filter: selectAction.filter, gifs:[], currentPage: 0 });
    default:
      return state;
  }
}


const rootReducer = handleGifs;

export default rootReducer;
