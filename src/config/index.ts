const DEV_URL = 'http://localhost:3000';
const PROD_URL = 'https://chatgpt-dynamic-ui.vercel.app';

export const URL = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;
