import { MAX_RANDOM_CARD_VALUE } from "./game-constants";

export const getCurrentGameStatusTypeStart = (isStarted: boolean) =>
  isStarted ? "start" : "started";

export const handleGenerateRandomNumber = () =>
  Math.floor(Math.random() * MAX_RANDOM_CARD_VALUE);

export const getTotalValue = (countValues: number[]) =>
  countValues.reduce((total, num) => total + num, 0);

export const getComputerResult = () =>
  Array(3)
    .fill(0)
    .reduce((total) => total + handleGenerateRandomNumber(), 0);
