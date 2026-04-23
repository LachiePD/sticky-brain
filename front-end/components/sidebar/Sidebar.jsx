import { NavItem } from "./NavItem.jsx";
import { Subheader } from "@/components/index.mjs";
import { useDeckList } from "@/providers/index.mjs";
export const Sidebar = ({ visible, visibleRef }) => {
  const deckList = useDeckList();

  const renderDecks = () => {
    return deckList.decks.map((deck, index) => (
      <li key={deck.id || index}>
        <NavItem handleDelete={deckList.actions.removeDeck} deck={deck} />
      </li>
    ));
  };
  return (
    <nav
      className={`
        fixed top-0 left-0 h-full bg-secondary p-4 z-40
        transform transition-transform duration-300 ease-in-out
        ${visible ? "translate-x-0" : "-translate-x-full"}
      `}
      ref={visibleRef}
    >
      <Subheader>Deck List</Subheader>
      <ul>{renderDecks()}</ul>
    </nav>
  );
};
