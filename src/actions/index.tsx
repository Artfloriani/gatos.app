import * as constants from "../constants"; 
import { GifData } from "../types/gifData.interface";

export interface SelectFilterAction {
  type: string;
  filter: string;
}

export interface RequestGifsAction {
  type: string;
}

export interface ReceiveGifsAction {
  type: string;
  filter: string;
  currentPage: number;
  gifs: GifData[];
  receivedAt: number;
}

export type GifsAction = ReceiveGifsAction;

export function selectFilter(filter: string): SelectFilterAction {
  const action = {
    filter,
    type: constants.SELECT_FILTER
  }
  return action;
}

export function requestGifs(): RequestGifsAction {
  return {
    type: constants.REQUEST_GIFS
  };
}

export function receiveGifs(filter: string, json: GifData[], currentPage: number): ReceiveGifsAction {
  return {
    currentPage,
    filter,
    gifs: json,
    receivedAt: Date.now(),
    type: constants.RECEIVE_GIFS
  };
}
