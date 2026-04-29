import { useState } from "react";
import { useActiveDeck } from "@/providers/index.mjs";
export const AddCardForm = ({ setAddingCard }) => {
  const [content, setContent] = useState({ front: "", back: "" });
  const { addNewCard } = useActiveDeck();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewCard({ ...content });
    setAddingCard(false);
  };
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold tracking-[0.15em] uppercase text-accent">
          Front
        </label>
        <input
          name="front"
          onChange={handleChange}
          type="text"
          value={content.front}
          placeholder="Question..."
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold tracking-[0.15em] uppercase text-success">
          Back
        </label>
        <input
          type="text"
          name="back"
          onChange={handleChange}
          value={content.back}
          placeholder="Answer..."
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};
