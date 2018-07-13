import * as enzyme from "enzyme";
import * as React from "react";
import ResultsList from "./ResultsList";

it("should split array into different arrays based on default value", () => {
  const defaultValue = 4;
  const testArray = Array(12).fill(1);
  const resultsList = enzyme
    .shallow(<ResultsList gifs={testArray} />)
    .instance() as ResultsList;

  const columns = resultsList.splitInColumns(testArray);
  expect(columns.length).toEqual(defaultValue);
});

it("should split array into different arrays based on parameter", () => {
  const param = 3;
  const testArray = Array(15).fill(1);
  const resultsList = enzyme
    .shallow(<ResultsList gifs={testArray} />)
    .instance() as ResultsList;

  const columns = resultsList.splitInColumns(testArray, param);
  expect(columns.length).toEqual(param);
});

it("should handle small arrays", () => {
  let testArray = Array(4).fill(1);
  const resultsList = enzyme
    .shallow(<ResultsList gifs={testArray} />)
    .instance() as ResultsList;

  let columns = resultsList.splitInColumns(testArray);
  expect(columns.length).toEqual(4);

  testArray = Array(3).fill(1);

  columns = resultsList.splitInColumns(testArray);
  expect(columns.length).toEqual(4);
  expect(columns[columns.length - 1]).toBe(null);

  testArray = [];

  columns = resultsList.splitInColumns(testArray);
  expect(columns.length).toEqual(4);
  expect(columns[0]).toBe(null);
});

it("should keep all elements in resulting arrays", () => {
    const testArray = Array(13).fill(1);
    const resultsList = enzyme
      .shallow(<ResultsList gifs={testArray} />)
      .instance() as ResultsList;
  
    const columns = resultsList.splitInColumns(testArray);
    const numberElements  = columns.reduce((acc, curr) => {
        return curr && curr.length ? acc + curr.length : acc;
    }, 0)
    expect(numberElements).toEqual(testArray.length);
  
  
  });