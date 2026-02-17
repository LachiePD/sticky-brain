class UserRepository {
  constructor(databaseConnection) {
    this.databaseConnection = databaseConnection;
  }

  async doesUserExist(userName) {
    const query = `
	  SELECT 1 FROM users WHERE name = $1
	  `;
    const result = await this.databaseConnection.query(query, [userName]);
    return result.rows.length > 0 ? true : false;
  }

  async registerUser(credentials) {
    const { userName, password } = credentials;
    const userExists = await this.doesUserExist(credentials.userName);
    if (userExists) {
      throw new Error("USER_EXISTS");
    }
    const query = `INSERT INTO users ("name", "password_hash")
	  VALUES ($1, $2)
	  RETURNING *;
	  `;

    const result = await this.databaseConnection.query(query, [
      userName,
      password,
    ]);
    return "USER_CREATED";
  }
}

export default UserRepository;
