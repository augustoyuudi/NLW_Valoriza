import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface ITokenPayload {
  sub: string;
}

function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const rawToken = request.headers.authorization;

  if(!rawToken) {
    return response.status(401).end();
  }

  const [, token] = rawToken.split(" ");

  try {
    const { sub } = verify(token, "3a311c37535a27dae813714ea313ed0f") as ITokenPayload;
    request.user_id = sub;

  } catch(error) {
    return response.status(401).end();
  }

  return next();
}

export { ensureAuthenticated }