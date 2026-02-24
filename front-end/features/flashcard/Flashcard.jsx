import { useFlashcard } from "./useFlashcard";
export const Flashcard = () => {
  const card = useFlashcard();
  const renderRevealed = () => {
    return (
      <>
        ANSWER: {card.content.back}
        <br />
        <button onClick={card.toggleRevealed}>Try Again</button>
        <br />
        <button onClick={card.nextCard}> Correct! </button>
      </>
    );
  };
  return (
    <>
      QUESTION: {card.content.front}
      <br />
      <button onClick={card.toggleRevealed}>Show Answer</button>
      <br />
      {card.isRevealed && renderRevealed()}
    </>
  );
};
