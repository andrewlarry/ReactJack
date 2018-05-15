import React from 'react';

import { CardImg } from './Card.styles';
const Card = (props) => {
  return (
    <CardImg alt="Card" src={`./cards/${props.card}`} />
  );
}

export default Card;