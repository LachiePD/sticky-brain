import { useState } from "react";
import { attemptLogin } from "./auth/auth";
export const useApi = ({ route }) => {
  const [response, setResponse] = useState(null);
};
