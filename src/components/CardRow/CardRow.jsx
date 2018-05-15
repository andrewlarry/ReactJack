import React from 'react';

import Card from '../Card';
import { CardRowBox, CardRowTitle } from './CardRow.styles';

const CardRow = (props) => {
  let count = props.hand.length;
  const cards = props.hand.map((card, index) => {
    const path = (!props.player && count === 1) ? 'back.svg': card.path;
    count--;
    return <Card card={path} key={index} />;
  });

  let title = (props.player) ? `Player: ${props.score}` : 'Dealer';
  if (props.dealer) title = `Dealer: ${props.score}`;
  return (
    <div>
      <CardRowTitle>{title}</CardRowTitle>
      <CardRowBox>
        {cards}
      </CardRowBox>
    </div>
  );
}

export default CardRow;