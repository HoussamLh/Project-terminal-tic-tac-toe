import { checkIfNoMovesLeft } from "../board-printer";

describe("checkIfNoMovesLeft", () => {
  test("returns true when the board is full (no '_' present)", () => {
    const board = [
      ['X', 'O', 'X'],
      ['O', 'X', 'O'],
      ['O', 'X', 'O']
    ];
    expect(checkIfNoMovesLeft(board)).toBe(true);
  });

  test("returns false when the board still has empty slots ('_')", () => {
    const board = [
      ['X', '_', 'X'],
      ['O', 'X', 'O'],
      ['O', 'X', 'O']
    ];
    expect(checkIfNoMovesLeft(board)).toBe(false);
  });

  test("returns false when only one '_' is left", () => {
    const board = [
      ['X', 'O', 'X'],
      ['O', '_', 'O'],
      ['X', 'O', 'X']
    ];
    expect(checkIfNoMovesLeft(board)).toBe(false);
  });
});

