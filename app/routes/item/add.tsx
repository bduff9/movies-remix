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
import { VFC } from 'react';

// import Authenticated from '../../components/Authenticated/Authenticated';
// import MovieItemForm from '../../components/MovieItemForm/MovieItemForm';

// const ADD_MOVIE_ITEM = gql`
// 	mutation AddMovieItem(
// 		$itemName: String!
// 		$caseType: CaseType!
// 		$digitalType: DigitalType!
// 		$is3D: YesNo!
// 		$isWatched: YesNo!
// 		$formatType: FormatType!
// 		$itemStatus: StatusType!
// 		$releaseDate: DateType
// 		$itemURL: String!
// 		$itemNotes: String
// 	) {
// 		addMovieItem(
// 			itemName: $itemName
// 			caseType: $caseType
// 			digitalType: $digitalType
// 			is3D: $is3D
// 			isWatched: $isWatched
// 			formatType: $formatType
// 			itemStatus: $itemStatus
// 			releaseDate: $releaseDate
// 			itemURL: $itemURL
// 			itemNotes: $itemNotes
// 		) {
// 			__typename
// 			itemID
// 			ordered
// 			itemName
// 			caseType
// 			digitalType
// 			is3D
// 			isWatched
// 			formatType
// 			itemStatus
// 			releaseDate
// 			itemURL
// 			itemNotes
// 		}
// 	}
// `;

type AddMovieItemProps = Record<string, never>;

const AddMovieItem: VFC<AddMovieItemProps> = () => {
	return (
		// <Authenticated>
		// 	<Head>
		// 		<title>Movies - Add Item</title>
		// 		<link rel="icon" href="/favicon.ico" />
		// 	</Head>

		<div className="container is-fluid">
			<div className="columns is-centered is-grid is-vcentered">
				<div className="column">
					{/* <MovieItemForm
							onAddSubmit={async (movieItem: MutationAddMovieItemArgs): Promise<void> => {
								await addMovieItem({ variables: movieItem });
								await router.push('/');
							}}
						/>
						{loading ? <div>Saving...</div> : error && <div>{error}</div>} */}
					TODO: add movie item
				</div>
			</div>
		</div>
		//</Authenticated>
	);
};

AddMovieItem.whyDidYouRender = true;

// ts-prune-ignore-next
export default AddMovieItem;
