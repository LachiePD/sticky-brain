import express from "express";

const assertData = (...data) => {
  const items = data.flat();
  items.forEach((item) => {
    if (!item) {
      throw new Error("Assert data failed in cardRouter");
    }
  });
  return;
};

const cardRouter = ({ cardServices, authMiddleware }) => {
  const router = express.Router();

  router.get("/fetchCardsForDeck", authMiddleware, async (req, res) => {
    const deckId = Number(req.query.deck_id);
    assertData(deckId);

    const response = await cardServices.fetchCardsForDeck(deckId);

    return res
      .status(200)
      .json({ cards: response, message: "cards delivered" });
  });

  router.post("/createNewCard", authMiddleware, async (req, res) => {
    const deckId = req.body.deckInfo.id;
    const card = req.body.card;
    const userId = req.body.deckInfo.user_id;

    assertData([deckId, card, userId]);

    const response = await cardServices.createNewCard({ deckId, userId, card });
    return res.status(200).json({ response, message: "card created" });
  });
  return router;
};

export default cardRouter;
