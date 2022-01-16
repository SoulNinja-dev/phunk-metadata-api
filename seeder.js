import mongoose from "mongoose";
import fs from "node:fs";
import TokenModel from "./models/token.model.js";
import dotenv from "dotenv";

// es6 __dirname stuff
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// dotenv
dotenv.config({ path: "./config/.env" });

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const tokens = [];
for (let i = 0; i <= 9999; i++) {
  const token = JSON.parse(fs.readFileSync(`${__dirname}/_data/${i}`, "utf-8"));
  token.tokenid = i;
  tokens.push(token);
}

// import data into db
const importData = async () => {
  try {
    await TokenModel.create(tokens);
    console.log("Data seeded");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

await importData();
