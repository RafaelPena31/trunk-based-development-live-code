import { Card, Typography } from "antd";
import React from "react";

interface CardProps {
  countValue: number;
}

const { Title } = Typography;

function CardValue({ countValue }: CardProps) {
  return (
    <Card hoverable>
      <Title level={1}>{countValue}</Title>
    </Card>
  );
}

export default React.memo(CardValue);
