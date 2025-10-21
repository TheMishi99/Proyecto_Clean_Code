import { User } from "../../../../../domain/dist/entities";

declare global {
  namespace Express {
    interface Request {
      user?: User | undefined;
    }
  }
}
