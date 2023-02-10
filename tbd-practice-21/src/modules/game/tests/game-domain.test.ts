import { getCurrentGameStatusTypeStart } from "../game-domain";

describe("Game Domain", () => {
  describe("getCurrentGameStatusTypeStart", () => {
    test.each([
      [true, "start"],
      [false, "started"],
    ])(
      "Should return correct GameStatusType start when isStarted in: %p",
      (started, result) => {
        const expectTo = getCurrentGameStatusTypeStart(started);
        expect(expectTo).toBe(result);
      }
    );
  });
});
