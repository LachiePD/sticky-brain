import { useState } from "react";
import SubmitButton from "@/components/SubmitButton.jsx";
import { useActiveDeck } from "./useActiveDeck.jsx";

const Editor = ({ startPractice }) => {
  const { cardList, handleNewFlashcard } = useActiveDeck();

  const [content, setContent] = useState({ front:"", back:"" });

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

      <SubmitButton onClick={handleSubmit} />

      <br />
      <button onClick={startPractice}>Go to practice</button>
    </div>
  );
};

export default Editor;
