import { useState } from "react";
import { useActiveDeck } from "../hooks/useActiveDeck.jsx";

export const Editor = ({ startPractice }) => {

  const { cardList, handleNewFlashcard } = useActiveDeck();

  const [content, setContent] = useState({ front: "", back: "" });

  const handleSubmit = async () => {
    const response = await handleNewFlashcard(content);
    setContent({ front: "", back: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <textarea
        placeholder={"question"}
        name={"front"}
        value={content.front}
        onChange={handleChange}
      />

      <textarea
        value={content.back}
        name={"back"}
        placeholder={"answer"}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>

      <br />
      <button onClick={startPractice}>Go to practice</button>
    </div>
  );
};

