import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootGifSaga from "../sagas/gifs.sagas";


const loggerMiddleware = createLogger();

export default function configureStore(preloadedState: any) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware, loggerMiddleware)
  );

  sagaMiddleware.run(rootGifSaga);

  return store;
}
