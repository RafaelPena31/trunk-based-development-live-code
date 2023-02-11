import { useMemo, useState } from "react";
import CardGroup from "./components/card-group/card-group";
import GameHeader from "./components/header/game-header";
import ResultContainer from "./components/result/result-container";
import { GameStatusType } from "./game-types";
import "./game-container.css";
import ControlContainer from "./components/control/control-container";
import {
  getComputerResult,
  getTotalValue,
  handleGenerateRandomNumber,
} from "./game-domain";

export default function GameContainer() {
  const [status, setStatus] = useState<GameStatusType>("start");
  const [countValues, setCountValues] = useState<number[]>([]);
  const [computerTotalValue, setComputerTotalValue] = useState(0);

  const totalValue = useMemo(() => getTotalValue(countValues), [countValues]);

  const isStarted = useMemo(() => status === "started", [status]);
  const isResult = useMemo(() => /* TODO */ false, [status]);
  const isVictory = useMemo(
    () => /* TODO */ false,
    [totalValue, computerTotalValue]
  );

  const onHandleClickControl = (currentStatus: GameStatusType) => {
    const isCurrentStatusStart = currentStatus === "start";

    if (isCurrentStatusStart) {
      setCountValues([]);
      setComputerTotalValue(0);
    }

    setStatus(currentStatus);
  };

  const onHandleClickResult = () => {
    const computerResult = getComputerResult();
    setComputerTotalValue(computerResult);

    setStatus("result");
  };

  const onHandleClickAddCard = () => {
    const newCountValue = handleGenerateRandomNumber();
    setCountValues((state) => state.concat(newCountValue));
  };

  return (
    <div className="game-container">
      <GameHeader
        status={status}
        totalValue={totalValue}
        computerTotalValue={computerTotalValue}
        onHandleClickControl={onHandleClickControl}
        onHandleClickResult={onHandleClickResult}
      />

      <CardGroup countValueList={countValues} />

      <ControlContainer
        isStarted={isStarted}
        onHandleClickAddCard={onHandleClickAddCard}
      />

      <ResultContainer isResult={isResult} isVictory={isVictory} />
    </div>
  );
}
