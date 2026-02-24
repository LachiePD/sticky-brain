import { useActiveDeck } from "../../providers/ActiveDeckProvider";

export const Edit = () => {
  const activeDeck = useActiveDeck();
  const deckLength = activeDeck.cardList.length;

  return <>{deckLength}</>;
};
