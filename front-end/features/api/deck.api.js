const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const routeFactory =
  ({ route, method }) =>
  async (payload) => {
    const options = {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      method,
    };

    if (method !== "GET" && payload) {
      options.body = JSON.stringify(payload);
    }
    const response = await fetch(route, options);
    const data = await response.json();
    return { ...data, status: response.status };
  };

export const getDecks = routeFactory({
  route: `${apiUrl}/getAllDecks`,
  method: "GET",
});
export const createDeck = routeFactory({
  route: `${apiUrl}/createdeck`,
  method: "GET",
});

export const removeDeck = routeFactory({
  route: `${apiUrl}/removeDeck/${encodeURIComponent(deckId)}`,
  method: "DELETE",
});
