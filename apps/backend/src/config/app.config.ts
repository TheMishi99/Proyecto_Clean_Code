process.loadEnvFile(".env");

export const { JWT_SECRET, FRONT_URL, PORT } = process.env;
export const isProduction = process.env.NODE_ENV === ".env.production";
