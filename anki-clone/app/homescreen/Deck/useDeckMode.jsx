import { useState, useEffect } from "react";

export const useDeckMode = ({deckInfo}) => {
  const [mode, setMode] = useState('practicing');

  const startPractice = () => setMode("practicing");
  const startEditing = () => setMode("editing");
  const stopEverything = () => setMode("idle");

  

  return {
    mode,
    startPractice,
    startEditing,
    stopEverything,
  };
};
