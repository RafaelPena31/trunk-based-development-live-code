import { Typography } from "antd";
import React from "react";
import "./header-right.css";

interface HeaderRightProps {
  totalValue: number;
  computerTotalValue: number;
}

const { Title } = Typography;

function HeaderRight({ totalValue, computerTotalValue }: HeaderRightProps) {
  return (
    <div className="game-container__header__count-group">
      <Title level={2}>Contagem atual: {totalValue}</Title>
      <Title type="secondary" level={3}>
        Contagem do computador: {computerTotalValue}
      </Title>
    </div>
  );
}

export default React.memo(HeaderRight);
