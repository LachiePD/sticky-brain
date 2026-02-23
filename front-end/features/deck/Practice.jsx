import { useFlashcard } from "./useFlashcard.jsx";
import Flashcard from "./Flashcard.jsx";
const Practice = ({ cardList }) => {
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

export default Practice;
