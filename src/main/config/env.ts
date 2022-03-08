export default {
  mongoUrl: process.env.MONGO_URL ?? global.__MONGO_URI__ ?? 'mongodb://127.0.0.1:27017/clean-node-api',
  port: process.env.PORT ?? '5050'
}
