import { useState } from "react";
import { auth } from "./auth.api.js";
import { card } from "./card.api.js";
import { deck } from "./deck.api.js";

export const useApi = ({ route }) => {
  const [response, setResponse] = useState(null);
};
