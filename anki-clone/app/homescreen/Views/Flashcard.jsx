const Flashcard = ({ content, isRevealed, actions }) => {
  const renderRevealed = () => {
    return (
      <>
        ANSWER: {content.back}
        <br />
        <button onClick={actions.toggleRevealed}>Try Again</button>
        <br />
        <button onClick={actions.nextCard}> Correct! </button>
      </>
    );
  };
  return (
    <>
      QUESTION: {content.front}
      <br />
      <button onClick={actions.toggleRevealed}>Show Answer</button>
      <br />
      {isRevealed && renderRevealed()}
    </>
  );
};

export default Flashcard;
