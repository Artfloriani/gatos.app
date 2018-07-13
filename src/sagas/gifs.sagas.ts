import { call, put, takeLatest } from "redux-saga/effects";
import { receiveGifs } from "../actions";
import { getGifsFromApi } from "../services/api";

export function* fetchGifs(filter: string) {
  const { response, error } = yield call(getGifsFromApi);

  console.log(response, error);
  if (response) {
    yield put(receiveGifs(filter, response));
  } else {
    console.error("FetchGifs", error);
  }
}

export default function* rootGifSaga() {
  yield takeLatest("REQUEST_GIFS" as any, fetchGifs);
}
