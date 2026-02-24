import { useActiveCard } from "@/features/flashcard/index";

export const Practice = () => {
  return (
    <>
      <button onClick={activeCard.toggleRevealed}>Try Again</button>
      <button onClick={activeCard.nextCard}> Correct! </button>
    </>
  );
};
