import { useState, useEffect } from "react";
import {useDeckList} from '@/features/deck/index.js'
export const useFlashcard = ({ cardList = [] }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [content, setContent] = useState({ front: "", back: "" });
  const [isRevealed, setRevealed] = useState(false);

  const isFinished = activeCardIndex >= cardList.length;

  useEffect(() => {
    getNewCard(activeCardIndex);
  }, [activeCardIndex, cardList]);

  const nextCard = () => {
    setActiveCardIndex((prev) => prev + 1);
  };

  const toggleRevealed = () => {
    setRevealed((prev) => !prev);
  };
  const getNewCard = () => {
    if (activeCardIndex + 1 > cardList.length) {
      return;
    }
    const newCard = cardList[activeCardIndex];
    setContent({ front: newCard.front, back: newCard.back });
    setRevealed(false);
  };

  return { content, isRevealed, isFinished, actions: { nextCard, toggleRevealed } };
};
