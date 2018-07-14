import { call, put, select, takeLatest } from "redux-saga/effects";
import { receiveGifs } from "../actions";
import { getGifsFromApi } from "../services/api";
import { GetGifsParameters } from "../services/api.interface";
import { GifsState } from "../types";

export function* fetchGifs() {
  const state: GifsState = yield select();
  const requestParameters : GetGifsParameters = {
    currentPage: state.currentPage,
    filter: state.filter
  };

  const { response, error } = yield call(getGifsFromApi, requestParameters);

  if (response) {
    yield put(
      receiveGifs(
        state.filter,
        response.gifs,
        response.currentPage
      )
    );
  } else {
    console.error("FetchGifs", error);
  }
}

export default function* rootGifSaga() {
  yield takeLatest("REQUEST_GIFS" as any, fetchGifs);
}
