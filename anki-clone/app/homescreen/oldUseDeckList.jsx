import { useState, useEffect } from "react";
import {
  getDecks,
  submitNewDeck,
  removeDeck as removeDeckApi,
} from "@/api/deck/deck.api.js";

//TODO we will just remove this once DeckListProvider is working
export const useDeckList = () => {
  const [deckList, setDeckList] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState(null);

  useEffect(() => {
    fetchDecks();
  }, []);

  const selectDeckById = (id) => {
    const foundDeck = deckList.find((deck) => deck.id === id);
    setSelectedDeck(foundDeck);
  };

  const createNewDeck = async (deckName) => {
    const response = await submitNewDeck(deckName);
    await fetchDecks();
  };

  const fetchDecks = async () => {
    const data = await getDecks();
    if (!data.response) {
      setDeckList([]);
      return;
    }
    setDeckList(data.response.rows);
  };

  const removeDeck = async (deckId) => {
    await removeDeckApi(deckId);
    setDeckList((prev) => {
      return prev.filter((deck) => deck.id !== deckId);
    });
  };


  return {
    deckList,
    selectedDeck,
    actions: {
      fetchDecks,
      createNewDeck,
      removeDeck,
      setDeckList,
      selectDeckById,
    },
  };
};
