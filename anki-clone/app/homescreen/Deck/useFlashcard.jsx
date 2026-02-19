import { useState, useEffect } from "react";

export const useFlashcard = ({ cardList = [] }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [data, setData] = useState({ front: "", back: "" });
  const [isRevealed, setRevealed] = useState(false);

  useEffect(() => {
    getNewCard(activeCardIndex);
  }, [activeCardIndex, cardList]);

  const getNewCard = (activeCardIndex) => {
    const newCard = cardList[activeCardIndex];
    setData({ front: newCard.front, back: newCard.back });
    setRevealed(false);
  };

  const incrementIndex = () => {
    setCardIndex((prev) => prev + 1);
  };

  const toggleRevealed = () => {
    setRevealed((prev) => !prev);
  };
  return { data, isRevealed, actions: { incrementIndex, toggleRevealed } };
};
