class DeckServices {
  constructor({ deckRepository }) {
    this.deckRepository = deckRepository;
  }

  assertDeckData({ deckName, deckId, userId }) {
    const identifier = deckName || deckId;

    if (!identifier) {
      throw new Error("No identifier");
    }

    if (!userId) {
      throw new Error("No user Id");
    }
  }

  async doesDeckExistAlready({ deckName, userId }) {
    const result = await this.deckRepository.getDeck({ deckName, userId });
    if (result.rows.length > 0) {
      return true;
    }
    return false;
  }

  async createDeck({ deckName, userId }) {
    this.assertDeckData({ deckName, userId });

    if (await this.doesDeckExistAlready({ deckName, userId })) {
      throw new Error("A deck with this name already exists, for this user!");
    }

    return await this.deckRepository.createDeck({ deckName, userId });
  }

  async getAllDecks({ userId }) {
    this.assertDeckData({ userId, deckName: "blank" });

    const data = await this.deckRepository.getAllDecks({ userId });
    if (!data) {
      throw new Error("Problem getting all decks");
    }
    return data;
  }

  async removeDeck({ deckId, userId }) {
    this.assertDeckData({ userId, deckId });
    const data = await this.deckRepository.removeDeck({ userId, deckId });

    return data;
  }
}
//
export default DeckServices;
