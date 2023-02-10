import React from "react";
import { Button } from "antd";
import { ReloadOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { GameStatusType } from "modules/game/game-types";

interface HeaderButtonProps {
  started: boolean;
  onHandleClickControl: (currentStatus: GameStatusType) => void;
}

function HeaderButton({ started, onHandleClickControl }: HeaderButtonProps) {
  const onClick = () => null; /* TODO */

  if (started) {
    return (
      <Button
        type="default"
        icon={<ReloadOutlined />}
        size="large"
        onClick={onClick}
      >
        Resetar jogo
      </Button>
    );
  }

  return (
    <Button
      type="primary"
      icon={<PlayCircleOutlined />}
      size="large"
      onClick={onClick}
    >
      Iniciar jogo
    </Button>
  );
}

export default React.memo(HeaderButton);
