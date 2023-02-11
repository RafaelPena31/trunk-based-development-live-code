import { Typography } from "antd";
import React from "react";

interface ResultContainerProps {
  isResult: boolean;
  isVictory: boolean;
}

const { Title } = Typography;

function ResultContainer({ isResult, isVictory }: ResultContainerProps) {
  const type = isVictory ? "success" : "danger";
  const victoryText = isVictory ? "Você venceu" : "O computador venceu";

  if (isResult) {
    return <Title level={2} type={type}>{victoryText}</Title>;
  }

  return null;
}

export default React.memo(ResultContainer);
