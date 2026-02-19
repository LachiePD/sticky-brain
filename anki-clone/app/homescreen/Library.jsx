import { useState, useContext } from "react";
import { LoadingContext } from "@/app/LoadingContext.js";
import DeckLink from "./DeckLink.jsx";
import { useDeckList } from "./DeckListContext.jsx";
const Library = () => {
  const [error, setError] = useState(null);
  //TODO remove this context too
  const { loading, setLoading } = useContext(LoadingContext);
  const deckList = useDeckList();

  const buildDecks = () => {
    return deckList.decks.map((deck) => {
      return (
        <DeckLink
          deckSelectionEvent={deckList.actions.selectDeckById}
          handleDelete={deckList.actions.removeDeck}
          key={deck.id}
          data={deck}
        />
      );
    });
  };

  return (
    <div>
      {error && <p> ERROR: {error}</p>}
      {buildDecks()}
    </div>
  );
};

export default Library;
