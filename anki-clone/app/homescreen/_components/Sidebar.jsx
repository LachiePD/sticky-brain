import NavItem from "./NavItem.jsx";
import Subheader from "@/components/headers/Subheader.jsx";

import { useDeckList } from "../DeckListContext.jsx";
const SideBar = () => {
  const deckList = useDeckList();

  const renderDecks = () => {
    return deckList.decks.map((deck) => (
      <NavItem
        deckSelectionEvent={deckList.actions.selectDeckById}
        handleDelete={deckList.actions.removeDeck}
        key={deck.id}
        data={deck}
      />
    ));
  };
  return (
    <main className={" bg-secondary p-4 min-w-76"}>
      <Subheader>Library</Subheader>
      {renderDecks()}
    </main>
  );
};

export default SideBar;
