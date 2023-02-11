import { getCurrentGameStatusTypeStart, getTotalValue } from "../game-domain";

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
});
