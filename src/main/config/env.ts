export default {
  mongoUrl: process.env.MONGO_URL ?? global.__MONGO_URI__ ?? 'mongodb://localhost:27071/clean-node-api',
  port: process.env.PORT ?? '5050'
}
