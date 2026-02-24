import { Card } from "@/components/ui/Card";
import { Creator } from "./Creator";
import { useActiveDeck } from "../providers/ActiveDeckProvider";
import { Practice } from "./Practice";
export const Interface = ({ activeCard }) => {
  const activeDeck = useActiveDeck();

  const modeMenu = () => {
    return (
      <>
        <button onClick={activeDeck.mode.actions.startPractice}>
          Go to practice
        </button>

        <button
          className={"button"}
          onClick={activeDeck.mode.actions.startEditing}
        >
          Edit
        </button>
      </>
    );
  };
  const decideOutput = () => {
    console.log(activeDeck.mode.currentMode);
    switch (activeDeck.mode.currentMode) {
      case "inspecting":
        return modeMenu();
      case "practice":
        return <Practice />;
    }
  };
  const chooseOutput = () => {
    if (activeDeck.mode.currentMode === "practice") {
      return <Practice />;
    }
  };

  return (
    <Card className={"flex-row  items-end"}>
      {!activeDeck.deckId && <Creator />}

      {activeDeck.deckId && decideOutput()}
    </Card>
  );
};
