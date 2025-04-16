import { Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const databases = new Databases(client);
const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;
const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
module.exports = databases;
