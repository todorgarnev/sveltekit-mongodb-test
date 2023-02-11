import { ObjectId } from "mongodb";
import { users } from "$lib/db/users";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

type User = {
	_id: string;
	name: string;
	age: number;
};

export const load: PageServerLoad = async () => {
	const data = await users.find().toArray();
	const list: User[] = data.map((user) => ({
		_id: user._id.toString(),
		name: user.name,
		age: user.age
	}));

	return {
		users: list
	};
};

export const actions: Actions = {
	create: async ({ request }) => {
		const body = Object.fromEntries(await request.formData());

		await users.insertOne({
			name: body.name,
			age: body.age
		});
	},
	delete: async ({ url }) => {
		const id: string | null = url.searchParams.get("id");

		await users.deleteOne({ _id: id ? new ObjectId(id) : "" });
	}
};
