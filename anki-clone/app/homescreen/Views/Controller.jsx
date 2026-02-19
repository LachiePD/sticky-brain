"use client";
import { useState, useEffect } from "react";
import { useDeckMode } from "./useDeckMode.jsx";
import { useCardList } from "./useCardList.jsx";
import Practice from "./Practice.jsx";
import Editor from "./Editor.jsx";
import Inspect from "./Inspect.jsx";

const Controller = () => {
  //TODO have a look at making this const mode = useDeckMode(), i dont like giving actions an alias all the time;
  const { mode, actions: modeActions } = useDeckMode();
  const {cardList, handleNewFlashcard} = useCardList();

  const renderMode = () => {
    switch (mode) {
      case "practicing":
        return <Practice modeActions={modeActions}
			    cardList={cardList}/>;

      case "editing":
        return (
          <Editor
            //TODO this part of the hook should probably be moved to useSelectedDeck();
            handleNewFlashcard={handleNewFlashcard}
            startPractice={modeActions.startPractice}
		cardList={cardList}
          />
        );

      case "inspecting":
        return <Inspect modeActions={modeActions}  />;
    }
  };
  return <div>{renderMode()}</div>;
};

export default Controller;
