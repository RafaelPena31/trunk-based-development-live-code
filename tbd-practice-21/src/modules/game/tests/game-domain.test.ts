import { getCurrentGameStatusTypeStart } from "../game-domain";

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
});
