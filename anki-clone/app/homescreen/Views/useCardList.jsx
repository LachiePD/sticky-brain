import { fetchByDeck, createNewCard } from "@/api/card.api.js";

import { useState, useEffect, useCallback } from "react";
import { useDeckList } from "../DeckListContext.jsx";

export const useCardList = () => {

  const {selectedDeck} = useDeckList();
  const [cardList, setCardList] = useState([]);
  const [selectedCard, setSelectedCard] = useState(0);

  const fetchCards = useCallback(async () => {
    if (!selectedDeck) return;
    const data = await fetchByDeck(selectedDeck.id);
    setCardList(data.cards);
  }, [selectedDeck.id]);

  useEffect(() => {
    if (!selectedDeck.id) return;
    fetchCards();
  }, [fetchCards]);

  const handleNewFlashcard = async (card) => {
    await createNewCard(selectedDeck, card);
    fetchCards();
  };
  return { cardList, setCardList, handleNewFlashcard };
};
