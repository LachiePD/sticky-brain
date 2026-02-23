import { Flashcard, useFlashcard } from "@/features/flashcard/index.js";
import {useActiveDeck} from '../providers/ActiveDeckProvider';
//TODO Practice shouldnt want to use useFlashcard
export const Practice = () => {
  const activeDeck = useActiveDeck();
  const flashcardService = useFlashcard({cardList: activeDeck.cardList});

  const chooseOutput = () => {
    if (flashcardService.isFinished) {
      return <div>DeckFinished!</div>;
    } else {
      return (
        <Flashcard
          isRevealed={flashcardService.isRevealed}
          content={flashcardService.content}
          actions={flashcardService.actions}
        />
      );
    }
  };
  return <>{chooseOutput()}</>;
};
