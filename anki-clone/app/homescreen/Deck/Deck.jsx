"use client";
import { useState, useEffect } from "react";
import { useDeckMode } from "./useDeckMode.jsx";
import { useCardList } from "./useCardList.jsx";
import Practice from "./Practice.jsx";
import Editor from "./Editor.jsx";
import Inspect from "./Inspect.jsx";

const Deck = ({ deckInfo }) => {
  const { cardList, setCardList, handleNewCard } = useCardList(deckInfo);
  const { mode, actions: modeActions } = useDeckMode();

  const renderMode = () => {
	  const props = {cardList, modeActions, deckInfo};
    switch (mode) {
      case "practicing":
        return (
          <Practice
            cardList={cardList}
            modeActions={modeActions}
          />
        );

      case "editing":
        return (
          <Editor
            cardList={cardList}
            handleNewFlashcard={handleNewCard}
            startPractice={modeActions.startPractice}
          />
        );

      case "inspecting":
        return (
          <Inspect
            modeActions={modeActions}
            cardList={cardList}
          />
        );
    }
  };
  return <div>{renderMode()}</div>;
};

export default Deck;
