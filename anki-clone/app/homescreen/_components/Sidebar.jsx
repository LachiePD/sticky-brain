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
    <div className={" sidebar"}>
      <Subheader>Library</Subheader>
      {renderDecks()}
    </div>
  );
};

export default SideBar;
