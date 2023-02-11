import db from "$lib/db/mongo";

export const users = db.collection("users");
