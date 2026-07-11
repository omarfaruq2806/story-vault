
declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URI: string;
    BETTER_AUTH_SECRET: string; 
    BETTER_AUTH_URL: string;    
  }
}