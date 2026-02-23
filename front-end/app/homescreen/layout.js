import { DeckListProvider } from "@/features/deck/index.js";

const HomescreenLayout = ({ children }) => {
  return <DeckListProvider>{children}</DeckListProvider>;
};

export default HomescreenLayout;
