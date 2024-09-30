let currentExpandedCard = null;

function expandCard(card) {
  // If a card is already expanded, collapse it first
  if (currentExpandedCard && currentExpandedCard !== card) {
    currentExpandedCard.classList.remove('expanded');
  }

  // Toggle the 'expanded' class on the clicked card
  card.classList.toggle('expanded');

  // Track the currently expanded card
  if (card.classList.contains('expanded')) {
    currentExpandedCard = card;
  } else {
    currentExpandedCard = null;
  }
}