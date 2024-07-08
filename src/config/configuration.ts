export default () => ({
  mode: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3000,
  database_uri: process.env.MONGODB_URI,
  base_url: process.env.BASE_URL || 'http://localhost:3001',
  cors: {
    origin: 'http://localhost:3000', // dev
    credentials: true,
  },
});
