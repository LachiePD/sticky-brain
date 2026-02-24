export const Practice = ({ activeCard }) => {
  return (
    <>
      <button onClick={activeCard.toggleRevealed}>Try Again</button>
      <button onClick={activeCard.nextCard}> Correct! </button>
    </>
  );
};
