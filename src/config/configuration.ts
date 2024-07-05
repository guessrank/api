export default () => ({
  mode: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3000,
  database_uri: process.env.DATABASE_URI,
  database_name: process.env.DATABASE_NAME,
  cors: {
    origin: 'http://localhost:3000', // dev
    credentials: true,
  },
});
