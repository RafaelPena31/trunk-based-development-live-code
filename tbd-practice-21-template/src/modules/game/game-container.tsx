import { useMemo, useState } from "react";
import CardGroup from "./components/card-group/card-group";
import GameHeader from "./components/header/game-header";
import ResultContainer from "./components/result/result-container";
import { GameStatusType } from "./game-types";
import "./game-container.css";

export default function GameContainer() {
  const [status, setStatus] = useState<GameStatusType>("start");
  const [countValues, setCountValues] = useState<number[]>([]);
  const [computerTotalValue, setComputerTotalValue] = useState(0);

  const totalValue = useMemo(() => /* TODO */, [countValues]);

  const isStarted = useMemo(() => /* TODO */, [status]);
  const isResult = useMemo(() => /* TODO */, [status]);
  const isVictory = useMemo(
    () => /* TODO */,
    [totalValue, computerTotalValue]
  );

  const onHandleClickControl = (currentStatus: GameStatusType) => {
    setCountValues([]);
    setComputerTotalValue(0);
    setStatus(currentStatus);
  };

  const onHandleClickResult = () => {
    const computerResult = /* TODO */;

    setComputerTotalValue(computerResult);
    setStatus("result");
  };

  const onHandleClickAddCard = () => {
    const newCountValue = /* TODO */;
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

      {/* TODO: CONTROL SYSTEM */}

      <ResultContainer isResult={isResult} isVictory={isVictory} />
    </div>
  );
}
