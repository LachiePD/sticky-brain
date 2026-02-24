import { DeckListProvider } from "@/features/deck/index.js";
import { ActiveDeckProvider } from "@/features/deck/index.js";
import { ActiveCardProvider } from "@/features/flashcard/index.js";
const HomescreenLayout = ({ children }) => {
  return (
    <DeckListProvider>
      <ActiveDeckProvider>
        <ActiveCardProvider>{children}</ActiveCardProvider>
      </ActiveDeckProvider>
    </DeckListProvider>
  );
};

export default HomescreenLayout;
