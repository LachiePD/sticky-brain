

import {Flashcard, useFlashcard} from '@/features/flashcard/index.js';
//TODO Practice shouldnt want to use useFlashcard
export const Practice = ({ cardList }) => {
  const flashcardService = useFlashcard({ cardList });

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

