import React from 'react';

import Card from '../Card';
import { CardRowBox } from './CardRow.styles';

const CardRow = (props) => {
  let count = props.hand.length;
  const cards = props.hand.map(card => {
    const path = (!props.player && count === 1) ? 'back.svg': card.path;
    count--;
    return <Card card={path} />;
  });
  return (
    <CardRowBox>
      {cards}
    </CardRowBox>
  )
}

export default CardRow;