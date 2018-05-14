// Returns a random index between 0 (inclusive) and num (exclusive)
export const dealCard = (num) => {
  return Math.floor(Math.random() * num);
}

// Returns a new deck that does not include the card at the specified index
export const rmFromDeck = (index, deck) => {
  if (index >= deck.length) return -1;
  const copy = [...deck];
  copy.splice(index, 1);
  return copy;
}
