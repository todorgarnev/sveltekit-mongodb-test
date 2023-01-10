import { startMongo } from "$db/mongo";

startMongo().then((): void => {
	console.log("Mongo started..");
});
