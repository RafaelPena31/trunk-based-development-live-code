import { Button } from "antd";
import React from "react";
import "./control-container.css";

interface ControlContainerProps {
  isStarted: boolean;
  onHandleClickAddCard: () => void;
}

function ControlContainer({
  isStarted,
  onHandleClickAddCard,
}: ControlContainerProps) {
  if (isStarted) {
    return (
      <div className="game-container__control">
        <Button type="primary" onClick={onHandleClickAddCard}>
          Novo cartão
        </Button>
      </div>
    );
  }

  return null;
}

export default React.memo(ControlContainer);
