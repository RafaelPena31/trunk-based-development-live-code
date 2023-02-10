import { Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import HeaderButton from "../header-button/header-button";
import React from "react";
import { GameStatusType } from "modules/game/game-types";

interface HeaderLeftProps {
  status: GameStatusType;

  onHandleClickControl: (currentStatus: GameStatusType) => void;
  onHandleClickResult: () => void;
}

function HeaderLeft({
  status,
  onHandleClickControl,
  onHandleClickResult,
}: HeaderLeftProps) {
  const isStarted = status === "started";

  return (
    <div className="game-container__header__btn-group">
      <HeaderButton
        started={isStarted}
        onHandleClickControl={onHandleClickControl}
      />
      {isStarted && (
        <Button
          type="primary"
          icon={<PlayCircleOutlined />}
          size="large"
          onClick={onHandleClickResult}
        >
          Conferir resultado
        </Button>
      )}
    </div>
  );
}

export default React.memo(HeaderLeft);
