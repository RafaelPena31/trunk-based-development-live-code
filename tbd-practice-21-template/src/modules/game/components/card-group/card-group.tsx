import React from "react";
import CardValue from "./card-value/card-value";
import "./card-group.css";

interface CardGroupProps {
  countValueList: number[];
}

function CardGroup({ countValueList }: CardGroupProps) {
  return (
    <section className="game-container__card-group">
      {countValueList.map((countValue) => (
        <CardValue key={countValue} countValue={countValue} />
      ))}
    </section>
  );
}

export default React.memo(CardGroup);
