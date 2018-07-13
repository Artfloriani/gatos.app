import { enthusiasm } from ".";
import { decrementEnthusiasm, incrementEnthusiasm } from "../actions";
import { IStoreState } from "../types";

it("it should increment a enthusiasm level", () => {
  const initialState: IStoreState = {
    enthusiasmLevel: 1,
    languageName: "ts"
  };
  expect(enthusiasm(initialState, incrementEnthusiasm()).enthusiasmLevel).toBe(
    2
  );
});

it("it should decrement a enthusiasm level", () => {
  const initialState: IStoreState = {
    enthusiasmLevel: 2,
    languageName: "ts"
  };
  expect(enthusiasm(initialState, decrementEnthusiasm()).enthusiasmLevel).toBe(
    1
  );
});

it("it should not decrement a enthusiasm level bellow 0", () => {
  const initialState: IStoreState = {
    enthusiasmLevel: 1,
    languageName: "ts"
  };
  expect(enthusiasm(initialState, decrementEnthusiasm()).enthusiasmLevel).toBe(
    1
  );
});

