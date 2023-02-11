import { MAX_RANDOM_CARD_VALUE } from "./game-constants";

export const getCurrentGameStatusTypeStart = (isStarted: boolean) =>
  isStarted ? "start" : "started";

export const handleGenerateRandomNumber = () =>
  Math.floor(Math.random() * MAX_RANDOM_CARD_VALUE);
