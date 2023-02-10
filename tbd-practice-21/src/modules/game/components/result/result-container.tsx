import { Typography } from "antd";
import React from "react";

interface ResultContainerProps {
  isResult: boolean;
  isVictory: boolean;
}

const { Title } = Typography;

function ResultContainer({ isResult, isVictory }: ResultContainerProps) {
  /* TODO */
  const type = "";
  const victoryText = "";

  if (isResult) {
    return <Title level={2}>{victoryText}</Title>;
  }

  return null;
}

export default React.memo(ResultContainer);
