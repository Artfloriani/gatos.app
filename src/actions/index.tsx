import { Dispatch } from "redux";
import * as constants from "../constants"; 

export interface SelectFilterAction {
  type: string;
  filter: string;
}

export interface RequestGifsAction {
  type: string;
  filter: string;
}

export interface ReceiveGifsAction {
  type: string;
  filter: string;
  gifs: string[];
  receivedAt: number;
}

export type GifsAction = RequestGifsAction | ReceiveGifsAction;

export function selectFilter(filter: string): SelectFilterAction {
  return {
    filter,
    type: constants.SELECT_FILTER
  };
}

export function requestGifs(filter: string): RequestGifsAction {
  return {
    filter,
    type: constants.REQUEST_GIFS
  };
}

export function receiveGifs(filter: string, json: string[]): ReceiveGifsAction {
  return {
    filter,
    gifs: json,
    receivedAt: Date.now(),
    type: constants.RECEIVE_GIFS
  };
}

export function fetchGifs(filter: string) {
  return (dispatch: Dispatch<any>) => {
    dispatch(requestGifs(filter));

    return fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(
        response => response.json(),
        error => console.log("[FetchGifs] Error ", error)
      )
      .then(json => dispatch(receiveGifs(filter, json)));
  };
}
