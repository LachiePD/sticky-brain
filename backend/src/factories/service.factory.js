import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { areCredentialsValid } from "../utils/areCredentialsValid.js";
import { hashPassword, compareHash } from "../utils/hash.js";
import UserServices from "../domain/UserServices.js";
import CardServices from "../domain/CardServices.js";
import AuthServices from "../domain/AuthServices.js";
import DeckServices from "../domain/DeckServices.js";

const serviceFactory = ({ repositories }) => {
  const userServices = new UserServices(
    repositories.userRepository,
    bcrypt,
    areCredentialsValid,
  );

  const authServices = new AuthServices({
    areCredentialsValid,
    authRepository: repositories.authRepository,
    compareHash,
    env: process.env, //process env injected here
    hashPassword,
    jwt,
  });

  const deckServices = new DeckServices({
    deckRepository: repositories.deckRepository,
  });

  const cardServices = new CardServices({
    cardRepository: repositories.cardRepository,
  });
  return { userServices, authServices, deckServices, cardServices };
};

export default serviceFactory;
