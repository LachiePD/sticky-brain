class UserServices {
  constructor(userRepository, bcrypt, areCredentialsValid) {
    this.userRepository = userRepository;
    this.saltRounds = 10;
    this.bcrypt = bcrypt;
    this.areCredentialsValid = areCredentialsValid;
  }

  async hashPassword(password) {
    const hashedPassword = await this.bcrypt.hash(password, this.saltRounds);
    return hashedPassword;
  }

  async registerUser(credentials) {
    this.areCredentialsValid(credentials);
    const hashedPassword = await this.hashPassword(credentials.password);
    await this.userRepository.registerUser({
      userName: credentials.userName,
      password: hashedPassword,
    });
  }
}

export default UserServices;
