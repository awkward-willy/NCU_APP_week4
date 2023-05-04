import { add, concatString, makeArray, makeObject } from "./test_jest";

test("add 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("concat string", () => {
  expect(concatString("Hello", "World")).toBe("HelloWorld");
});

test("make array", () => {
  expect(makeArray(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("make object", () => {
  expect(makeObject("task1", 1)).toEqual({ task: "task1", priority: 1 });
});
