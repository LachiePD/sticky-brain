import { Card } from "@/components/ui/Card";
import { useActiveDeck } from "../providers/ActiveDeckProvider";
import { Inspect } from "./views/Inspect";
import { Practice } from "./views/Practice";
import { Edit } from "./views/Edit";

export const Stage = ({ activeCard }) => {
  const activeDeck = useActiveDeck();

  const renderMode = () => {
    switch (activeDeck.mode.currentMode) {
      case "practicing":
        return <Practice />;

      case "editing":
        return <Edit />;

      case "inspecting":
        return <Inspect />;
    }
  };
  return <div>{renderMode()}</div>;
};
