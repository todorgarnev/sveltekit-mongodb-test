import { startMongo } from "$lib/db/mongo";

startMongo().then((): void => {
	console.log("Mongo started..");
});
