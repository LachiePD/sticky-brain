"use client";
import { useState, useEffect } from "react";
import Editor from "./Editor.jsx";
import { useDeckMode } from "./useDeckMode.jsx";
import { useCardList } from "./useCardList.jsx";
const Deck = ({ deckInfo }) => {
  const { cardList, setCardList, handleNewCard } = useCardList(deckInfo);
  const { mode, startPractice, startEditing, stopEverything } = useDeckMode({
    deckInfo,
  });

  const renderCards = () => {
   return  cardList.map((card) => <div key={card.id}>{card.id}</div>);
  };

  return (
    <div>
      {mode === "editing" && (
        <Editor cardList={cardList} handleNewCard={handleNewCard} />
      )}
      {mode === "practicing" && (
        <>
          {renderCards()}
        </>
      )}
    </div>
  );
};

export default Deck;
