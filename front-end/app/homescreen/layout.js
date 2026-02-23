import { DeckListProvider } from "@/features/deck/index.js";
import { ActiveDeckProvider } from "@/features/deck/index.js";

const HomescreenLayout = ({ children }) => {
  return (
    <DeckListProvider>
      <ActiveDeckProvider>{children}</ActiveDeckProvider>
    </DeckListProvider>
  );
};

export default HomescreenLayout;
