class AuthRepository {
  constructor(databaseConnection) {
    this.databaseConnection = databaseConnection;
  }

  async fetchUser(userName) {
    const query = `
		SELECT * FROM users WHERE name = $1
		

		`;
    const result = await this.databaseConnection.query(query, [userName]);
    if (result.rows.length === 0) {
	    throw new Error("No user was found");
    }
    return result.rows[0];
  }
}

export default AuthRepository;
