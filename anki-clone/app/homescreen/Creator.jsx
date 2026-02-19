"use client";

import { useState } from "react";
import { useDeckList } from "./DeckListContext.jsx";
const Creator = ({ createNewDeck }) => {
  const [deckName, setDeckName] = useState("");

  const deckList = useDeckList();

  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setDeckName(e.target.value);
  };

  const handleSubmit = async () => {
    await deckList.actions.createNewDeck(deckName);
    setDeckName("");
  };
  return (
    <div className={" flex bg-gray-200 m-4 h-full rounded p-6 justify-center"}>
      <textarea
        className={"h-[30%]"}
        onChange={(e) => handleChange(e)}
        placeholder={"name of deck"}
        value={deckName}
      />
      <button
        type={"submit"}
        onClick={handleSubmit}
        className={"flex h-12 w-13 rounded-full border-3 border-blue-200"}
      >
        submit
      </button>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Creator;
