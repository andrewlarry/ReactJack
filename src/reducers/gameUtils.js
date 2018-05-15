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

// Returns a new object with the new state for cardCount, deck, playerHand, and dealerHand
export const startGame = (state) => {
  console.log(state);
  let newDeck = [...state.deck];
  const playerHand = [];
  const dealerHand = [];
  for (let i = 0 ; i < 4; i++) {
    const card = dealCard(state.cardCount - 1 - i);
    if (i % 2 === 0) playerHand.push(newDeck[card]);
    else dealerHand.push(newDeck[card]);
    newDeck = rmFromDeck(card, newDeck);
  }
  return {
    cardCount: 48,
    deck: newDeck,
    playerTurn: true,
    playerHand,
    dealerHand,
  }
}

// Returns a new object with the new state for playerHand or dealerHand
export const hit = (state, player) => {
  const newState = {};
  let card;
  // Player is the event object from a click event. This is a hit from the player. 
  if (typeof player === 'object') {
    newState.playerHand = [...state.playerHand]

    // Get new card from deck and push to playerHand
    card = dealCard(state.cardCount - 1);
    newState.playerHand.unshift(state.deck[card]);
  } else {
    newState.dealerHand = [...state.dealerHand]

    // Get new card from deck and push to dealerHand
    card = dealCard(state.cardCount - 1);
    newState.dealerHand.unshift(state.deck[card]);
  }
  // Update cardCount and deck
  newState.cardCount = state.cardCount - 1;
  newState.deck = rmFromDeck(card, state.deck);
  return newState;
}