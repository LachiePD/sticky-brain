import { useState, useEffect } from "react";
import {useDeckList} from '../DeckListContext.jsx';
export const useFlashcard = ({ cardList = [] }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [data, setData] = useState({ front: "", back: "" });
  const [isRevealed, setRevealed] = useState(false);

  const isFinished = activeCardIndex >= cardList.length;

  useEffect(() => {
    getNewCard(activeCardIndex);
  }, [activeCardIndex, cardList]);

  const next = () => {
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
    setData({ front: newCard.front, back: newCard.back });
    setRevealed(false);
  };

  return { data, isRevealed, isFinished, actions: { next, toggleRevealed } };
};
