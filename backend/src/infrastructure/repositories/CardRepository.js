class CardRepository {
  constructor(databaseConnection) {
    this.databaseConnection = databaseConnection;
  }

  async fetchCardsForDeck(deckId) {
    const query = `	SELECT * FROM cards WHERE deck_id = $1`;

    const result = await this.databaseConnection.query(query, [deckId]);

    return result.rows;
  }

  async createNewCard({ deckId, userId, card }) {
    const { front, back } = card;
    const query = `
				INSERT INTO cards(deck_id, user_id,  front, back)
				values($1, $2, $3, $4)
				returning *`;
    const result = await this.databaseConnection.query(query, [
      deckId,
      userId,
      front,
      back,
    ]);

    return result.rows[0];
  }
}

export default CardRepository;
