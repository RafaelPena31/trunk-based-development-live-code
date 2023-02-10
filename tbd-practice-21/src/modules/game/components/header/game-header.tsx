import React from "react";
import HeaderRight from "./header-right/header-right";
import HeaderLeft from "./header-left/header-left";
import "./game-header.css";
import { GameStatusType } from "modules/game/game-types";

interface GameHeaderProps {
  status: GameStatusType;
  totalValue: number;
  computerTotalValue: number;

  onHandleClickControl: (currentStatus: GameStatusType) => void;
  onHandleClickResult: () => void;
}

function GameHeader({
  status,
  totalValue,
  computerTotalValue,

  onHandleClickControl,
  onHandleClickResult,
}: GameHeaderProps) {
  return (
    <div className="game-container__header">
      <HeaderLeft
        status={status}
        onHandleClickControl={onHandleClickControl}
        onHandleClickResult={onHandleClickResult}
      />

      <HeaderRight
        totalValue={totalValue}
        computerTotalValue={computerTotalValue}
      />
    </div>
  );
}

export default React.memo(GameHeader);
