import { Message } from "@/types/types";
import sql from "better-sqlite3";
import { unstable_cache } from "next/cache";
import { cache } from "react";

const db = new sql("messages.db");

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(text: string) {
  db.prepare<[string]>("INSERT INTO messages (text) VALUES (?)").run(text);
}

export const getMessages = unstable_cache(
  cache(function getMessages() {
    console.log("Fetching messages from db");
    return Promise.resolve(
      db.prepare<[], Message>("SELECT * FROM messages").all()
    );
  }),
  ["messages"],
  {
    tags: ["msg"],
  }
);
