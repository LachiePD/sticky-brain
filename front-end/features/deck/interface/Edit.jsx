"use client";
import { useState } from "react";
import { AddCard } from "./AddCard";
export const Edit = () => {
  const [addingCard, setAddingCard] = useState(false);
  return (
    <>
      {!addingCard && (
        <>
          <button onClick={() => setAddingCard(true)}>Add Card</button>
          <button>Change Deck Name</button>
        </>
      )}
      {addingCard && <AddCard />}
    </>
  );
};
