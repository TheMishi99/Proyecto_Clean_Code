declare module NodeJS {
  interface ProcessEnv {
    FRONT_URL: string;
    JWT_SECRET: string;
  }
}
