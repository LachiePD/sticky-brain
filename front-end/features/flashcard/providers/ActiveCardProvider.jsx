"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useActiveDeck } from "@/features/deck/index";
export const ActiveCardContext = createContext();

export const ActiveCardProvider = ({ children }) => {
  const activeDeck = useActiveDeck();
  const [content, setContent] = useState({ front: "", back: "" });
  const [isRevealed, setRevealed] = useState(false);

  useEffect(() => {
    const card = activeDeck.actions.fetchCard();

    if (!activeDeck.deckId || !card) return;

    const { front, back } = activeDeck.actions.fetchCard();
    setContent({ front, back });
  }, [activeDeck.cardList]);

  const nextCard = () => {
    const card = activeDeck.actions.drawNextCard();
    if (card === null) {
      return;
    }
    const { front, back } = card;
    setContent({ front, back });
  };

  const toggleRevealed = () => {
    setRevealed((prev) => !prev);
  };

  const value = { content, isRevealed, toggleRevealed, nextCard };

  return (
    <ActiveCardContext.Provider value={value}>
      {children}
    </ActiveCardContext.Provider>
  );
};

export const useActiveCard = () => useContext(ActiveCardContext);
