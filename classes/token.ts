import jwt from "jsonwebtoken";
require("dotenv").config();

export default class Token {
  private static seed: string = process.env.TOKEN_SEED!;
  private static expiration: string = process.env.TOKEN_EXPIRATION!;

  constructor() {}

  static generateJWTToken(user: any): string {
    return jwt.sign(
      {
        user,
      },
      this.seed,
      { expiresIn: this.expiration }
    );
  }

  static testToken(token: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.seed, (err, decoded) => {
        if (err) reject(err);
        resolve(decoded);
      });
    });
  }
}
