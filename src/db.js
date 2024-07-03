import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const DB_PATH = fileURLToPath(new URL("../db.json", import.meta.url));

// helper functions

export const insert = async (data) => {
  try {
    const db = await getDB();
    db.notes.push(data);
    await saveDB(db);
    return data;
  } catch (err) {
    console.error("Insert new data error:", err);
  }
};

export const getDB = async () => {
  try {
    const db = await readFile(DB_PATH, "utf-8");
    return JSON.parse(db);
  } catch (err) {
    console.error("File reading error:", err);
  }
};

export const saveDB = async (db) => {
  try {
    await writeFile(DB_PATH, JSON.stringify(db, null, 2));
    return db;
  } catch (err) {
    console.error("Error:", err);
  }
};
