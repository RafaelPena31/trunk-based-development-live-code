import { Button } from "antd";
import React from "react";

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
        <Button type="primary" block onClick={onHandleClickAddCard}>
          Novo cartão
        </Button>
      </div>
    );
  }

  return null;
}

export default React.memo(ControlContainer);
