export default {
  API_ENDPOINT: (process.env.NODE_ENV === 'production' 
    ? 'https://minionese-stevenb-brock.herokuapp.com/api' : 'http://localhost:8000/api'),
  TOKEN_KEY: process.env.TOKEN_KEY || 'learning-client-auth-token',
}
