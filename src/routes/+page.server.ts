import { users } from "$db/users";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const data = await users.find({}, { projection: { _id: 0 } }).toArray();

	return {
		users: data
	};
};
