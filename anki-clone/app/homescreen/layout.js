import { DeckListProvider } from "./DeckListContext.jsx";

const HomescreenLayout = ({ children }) => {
  return <DeckListProvider>{children}</DeckListProvider>;
};

export default HomescreenLayout;
