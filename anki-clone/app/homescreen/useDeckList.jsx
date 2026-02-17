import { useState, useEffect } from "react";
import { getDecks, submitNewDeck, removeDeck } from "@/api/deck/deck.api.js";
export const useDeckList = () => {
  const [deckList, setDeckList] = useState([]);
  useEffect(() => {
    fetchDecks();
  }, []);
  const createNewDeck = async (deckName) => {
    const response = await submitNewDeck(deckName);
    await fetchDecks();
  };

  const fetchDecks = async () => {
    const data = await getDecks();
    setDeckList(data.response.rows);
  };

  const handleRemoveDeck = async (deckId) => {
    await removeDeck(deckId);
    setDeckList((prev) => {
      return prev.filter((deck) => deck.id !== deckId);
    });
  };

  return { deckList, setDeckList, handleRemoveDeck, createNewDeck };
};
