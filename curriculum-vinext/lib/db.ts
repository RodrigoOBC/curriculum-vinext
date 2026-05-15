import { MongoClient } from "mongodb"

import "server-only"

const uri = process.env.MONGO_URI!
const dbName = process.env.MONGO_DB_NAME!

if (!uri) throw new Error("MONGO_URI is not defined")
if (!dbName) throw new Error("MONGO_DB_NAME is not defined")

// Singleton para reutilizar conexão em ambiente de desenvolvimento (hot reload)
declare global {
  var _mongoClient: MongoClient | undefined
}

let client: MongoClient

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri)
  }
  client = global._mongoClient
} else {
  client = new MongoClient(uri)
}

export async function getDb() {
  await client.connect()
  return client.db(dbName)
}
