import { Card } from "@/components/ui/Card";
import { DeckController } from "./views/DeckController";
import { useActiveDeck } from "./providers/ActiveDeckProvider";

export const Stage = () => {
  const activeDeck = useActiveDeck();

  if (activeDeck.mode.currentMode === "inspecting") {
    return <div>this is the inspecting of deck,</div>;
  }
  if (activeDeck.mode.currentMode === "practicing") {
    return <div>this is the practicing of deck,</div>;
  }

  if (activeDeck.mode.currentMode === "editing") {
    return <div>this is the editing of deck,</div>;
  }
};
