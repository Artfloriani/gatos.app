import { FilterButtonType } from "../types";

export const INCREMENT_ENTHUSIASM = "INCREMENT_ENTHUSIASM";
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export const DECREMENT_ENTHUSIASM = "DECREMENT_ENTHUSIASM";
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

export const SELECT_FILTER = "SELECT_FILTER";
export type SELECT_FILTER = typeof SELECT_FILTER;

export const REQUEST_GIFS = "REQUEST_GIFS";
export type REQUEST_GIFS = typeof REQUEST_GIFS;

export const RECEIVE_GIFS = "RECEIVE_GIFS";
export type RECEIVE_GIFS = typeof RECEIVE_GIFS;

export const FILTER_BUTTONS: FilterButtonType[] = [
  {
    searchQuery: "funny cats",
    text: ":joy_cat: Engraçados"
  },
  {
    searchQuery: "cute cats",
    text: ":heart_eyes_cat: Fofinhos"
  },
  {
    searchQuery: "angry cat",
    text: ":smirk_cat: Putos"
  }
  ,
  {
    searchQuery: "sad cat",
    text: ":crying_cat_face: Chateados"
  }
];


export const PAGE_SIZE = 12;
export const MAX_RESULTS = 5000;