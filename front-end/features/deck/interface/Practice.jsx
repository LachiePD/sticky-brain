import { useActiveCard } from "@/features/flashcard/index";

export const Practice = () => {
  const activeCard = useActiveCard();

  console.log(activeCard.isRevealed);
  if (activeCard.isRevealed) {
    return (
      <>
        <button onClick={activeCard.toggleRevealed}>Try Again</button>
        <button onClick={activeCard.nextCard}> Correct! </button>
      </>
    );
  }

  if (!activeCard.isRevealed) {
    return <button onClick={activeCard.toggleRevealed}> Show Answer!</button>;
  }
};
