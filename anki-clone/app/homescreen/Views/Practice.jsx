import { useFlashcard } from "./useFlashcard.jsx";

const Practice = ({ cardList }) => {
  const flashcard = useFlashcard({ cardList });

  return (
    <div>
	  //TODO sort this nonsense out.
      {flashcard.isFinished ? (
        <div>DeckFinished!</div>
      ) : (
        <>
          QUESTION: {flashcard.data.front}
          <br />
          <button onClick={flashcard.actions.toggleRevealed}>
            Show Answer
          </button>
          <br />
          {flashcard.isRevealed && (
            <>
              ANSWER: {flashcard.data.back}
              <br />
              <button onClick={flashcard.actions.toggleRevealed}>
                Try Again
              </button>
              <br />
              <button onClick={flashcard.actions.next}> Correct! </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Practice;
