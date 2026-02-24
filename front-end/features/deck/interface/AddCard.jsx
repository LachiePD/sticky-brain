import { useState } from "react";
import { useActiveDeck } from "../providers/ActiveDeckProvider";
export const AddCard = ({ toggleAddingCard }) => {
  const [content, setContent] = useState({ front: "", back: "" });
  const activeDeck = useActiveDeck();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    activeDeck.actions.handleNewFlashcard(content);
    toggleAddingCard();
  };
  return (
    <form>
      <div>
        <label>Front:</label>
        <input
          name="front"
          onChange={handleChange}
          type="text"
          value={content.front}
        />
      </div>

      <div>
        <label>Back:</label>
        <input
          type="text"
          name="back"
          onChange={handleChange}
          value={content.back}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};
