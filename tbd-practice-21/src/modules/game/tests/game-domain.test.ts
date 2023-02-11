import {
  getCurrentGameStatusTypeStart,
  getTotalValue,
  getVictory,
} from "../game-domain";

describe("Game Domain", () => {
  describe("getCurrentGameStatusTypeStart", () => {
    test.each([
      [true, "start"],
      [false, "started"],
    ])(
      "Should return correct GameStatusType start when isStarted is: %p",
      (isStarted, result) => {
        const expected = getCurrentGameStatusTypeStart(isStarted);
        expect(result).toBe(expected);
      }
    );
  });

  describe("getTotalValue", () => {
    test("Should return total value from the list", () => {
      const expected = getTotalValue([2, 2, 3]);
      expect(expected).toBe(7);
    });
  });

  describe("getVictory", () => {
    test.each([
      [20, 18, true],
      [17, 22, true],
      [20, 21, false],
      [22, 22, false],
      [21, 21, false],
    ])(
      "Should return the correct champion by: %p",
      (totalValue, computerTotalValue, result) => {
        const expected = getVictory(totalValue, computerTotalValue);
        expect(expected).toBe(result);
      }
    );
  });
});
