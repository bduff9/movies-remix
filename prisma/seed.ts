import fs from 'fs';

import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const seed = async (): Promise<void> => {
	const files = [
		'./seed/Users.sql',
		'./seed/MovieItems.sql',
		'./seed/Movies.sql',
		'./seed/MyMovieItems.sql',
	];

	for (const file of files) {
		const sql = fs.readFileSync(file, 'utf8').toString();

		await db.$executeRawUnsafe(sql);
	}
};

seed();
