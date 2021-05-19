import dotenv from "dotenv";

dotenv.config();

const checkEnv = (envVar: string, defaultValue?: string) => {
  if (!process.env[envVar]) {
    if (defaultValue) {
      return defaultValue;
    }
    throw new Error(`Please define the Environment variable "${envVar}"`);
  } else {
    return process.env[envVar] as string;
  }
};

export const CORS_ORIGINS = ['http://localhost:3000'];
export const DBURL: string = checkEnv("DBURL");
export const PORT = process.env.PORT || 3001;