/*
Movies FE - the frontend implementation of a movie tracker.
Copyright (C) 2015-present Brian Duffey
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see {http://www.gnu.org/licenses/}.
Home: https://asitewithnoname.com/
*/
import { MovieItem } from '@prisma/client';
import { VFC } from 'react';
import { LoaderFunction, useLoaderData } from 'remix';

import { db } from '~/utils/db.server';

// import Authenticated from '../components/Authenticated/Authenticated';
// import MovieItemsContainer from '../components/MovieItemsContainer/MovieItemsContainer';
// import { TFilterFilters, TSort, TSortCol, TViewAs } from '../utils/types';

type LoaderData = { movieItems: Array<MovieItem> };

export const loader: LoaderFunction = async (): Promise<{ data: LoaderData }> => {
	const data = {
		movieItems: await db.movieItem.findMany(),
	};

	return { data };
};
type HomeProps = {
	filterOpen: boolean;
	// filters: TFilterFilters;
	limit: number;
	page: number;
	skip: number;
	// sortBy: TSort[];
	// viewAs: TViewAs;
};

// const SAVED_STATE_KEY = 'MovieItemsDisplayPageState';

const Home: VFC<HomeProps> = props => {
	const data = useLoaderData<LoaderData>();
	// const [filterOpen, setFilterOpen] = useState<boolean>(props.filterOpen);
	// const [filters, setFilters] = useState<TFilterFilters>(props.filters);
	// const [limit] = useState<number>(props.limit);
	// const [page, setPage] = useState<number>(props.page);
	// const [sortBy, setSortBy] = useState<TSort[]>(props.sortBy);
	// const [viewAs, setViewAs] = useState<TViewAs>(props.viewAs);

	// useEffect((): void => {
	// 	const newState: HomeProps = {
	// 		filterOpen,
	// 		filters,
	// 		limit,
	// 		page,
	// 		skip: props.skip,
	// 		sortBy,
	// 		viewAs,
	// 	};

	// 	localStorage.setItem(SAVED_STATE_KEY, JSON.stringify(newState));
	// }, [filterOpen, filters, limit, page, props.skip, sortBy, viewAs]);

	// const paginate = (newPage: number | string, maxPage: number): void => {
	// 	if (typeof newPage === 'string') newPage = parseInt(newPage, 10);

	// 	if (newPage < 1 || newPage === page || newPage > maxPage) return;

	// 	setPage(newPage);
	// };

	// const sortItems = (col: TSortCol): void => {
	// 	const currentSort = sortBy[0];
	// 	let newSort: TSort;

	// 	if (currentSort.field === col) {
	// 		newSort = {
	// 			...currentSort,
	// 			direction: currentSort.direction === 'ASC' ? 'DESC' : 'ASC',
	// 		};
	// 	} else {
	// 		newSort = { direction: 'ASC', field: col };
	// 	}

	// 	setSortBy([newSort]);
	// };

	// const toggleFilters = (): void => {
	// 	setFilterOpen((prevFilterOpen): boolean => !prevFilterOpen);
	// };

	// const changeView = (newView: TViewAs): void => setViewAs(newView);

	// const updateFilters = (filters: TFilterFilters): void => {
	// 	setFilters(filters);
	// 	setPage(1);
	// };

	return (
		// <Authenticated>
		<div className="container">
			{/* <MovieItemsContainer
					filterOpen={filterOpen}
					filters={filters}
					page={page}
					sortBy={sortBy}
					viewAs={viewAs}
					changeView={changeView}
					paginate={paginate}
					sortItems={sortItems}
					toggleFilters={toggleFilters}
					updateFilters={updateFilters}
					key="movie-items-container"
				/> */}
			{data.movieItems.map(movieItem => movieItem.name)}
		</div>
		// </Authenticated>
	);
};

//TODO: read in filters from search params and load movie data from prisma

Home.whyDidYouRender = true;

// ts-prune-ignore-next
export default Home;
