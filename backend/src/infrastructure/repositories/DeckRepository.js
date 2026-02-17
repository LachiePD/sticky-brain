class DeckRepository {
  constructor(databaseConnection) {
    this.databaseConnection = databaseConnection;
  }

  async getDeck({ deckName, userId }) {
    const query = `SELECT  * from decks where name = $1 AND user_id = $2`;

    const result = await this.databaseConnection.query(query, [
      deckName,
      userId,
    ]);
    return result || null;
  }

  async getAllDecks({ userId }) {
    const query = `SELECT * from decks WHERE user_id = $1`;

    const result = await this.databaseConnection.query(query, [userId]);
    return result || null;
  }

  async createDeck({ deckName, userId }) {
    const query = `
			INSERT into decks(name, user_id)
			values($1, $2)
			returning *`;

    const result = await this.databaseConnection.query(query, [
      deckName,
      userId,
    ]);
    if (!result) {
      throw new Error("Error in deck repo");
    }
    return result.rows[0];
  }

  async removeDeck({ deckId, userId }) {
    const query = `
		DELETE FROM decks where id = $1 AND user_id = $2 RETURNING *`;

    const result = await this.databaseConnection.query(query, [deckId, userId]);

    if (result.rowCount === 0) {
      throw new Error("Cant delete deck");
    }
    return result.rows[0];
  }
}
export default DeckRepository;
