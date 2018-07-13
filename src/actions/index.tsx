import * as constants from "../constants"; 
import { GifData } from "../types/gifData.interface";

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
  gifs: GifData[];
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

export function receiveGifs(filter: string, json: GifData[]): ReceiveGifsAction {
  return {
    filter,
    gifs: json,
    receivedAt: Date.now(),
    type: constants.RECEIVE_GIFS
  };
}
