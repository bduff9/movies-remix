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
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VFC } from 'react';
import { LoaderFunction, useLoaderData } from 'remix';

type LoaderData = { movieItemId: number };

export const loader: LoaderFunction = async ({ params }): Promise<LoaderData> => {
	return { movieItemId: parseInt(params.id ?? '-1', 10) };
};

// import Authenticated from '../../components/Authenticated/Authenticated';
// import MovieItemForm from '../../components/MovieItemForm/MovieItemForm';
// import MovieItemMoviesContainer from '../../components/MovieItemMoviesContainer/MovieItemMoviesContainer';

// const MOVIE_ITEM_BY_ID = gql`
// 	query MovieItemToEdit($itemID: Int!) {
// 		movieItem(itemID: $itemID) {
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

// const EDIT_MOVIE_ITEM = gql`
// 	mutation UpdateMovieItem(
// 		$itemID: Int!
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
// 		updateMovieItem(
// 			itemID: $itemID
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

type EditMovieItemProps = {
	id: string;
};

const EditMovieItem: VFC<EditMovieItemProps> = () => {
	const data = useLoaderData<LoaderData>();

	return (
		// <Authenticated>
		// 	<Head>
		// 		<title>Movies - Edit Item {itemID}</title>
		// 		<link rel="icon" href="/favicon.ico" />
		// 	</Head>

		<div className="container is-fluid">
			<div className="columns is-centered is-grid is-vcentered">
				{/* {loading ? (
					<div className="column">
						<FontAwesomeIcon icon="spinner" spin />
						&nbsp; Loading...
					</div>
				) : (
					<div className="column">
						{movieItem ? (
							<>
								<MovieItemForm
									movieItem={movieItem}
									onUpdateSubmit={async (
										movieItem: MutationUpdateMovieItemArgs,
									): Promise<void> => {
										await editMovieItem({ variables: movieItem });
										await router.push('/');
									}}
								/>
								{editLoading ? <div>Saving...</div> : editError && <div>{editError}</div>}
								{movieItem && movieItem.itemID != null && (
									<MovieItemMoviesContainer movieItemID={movieItem.itemID} />
								)}
							</>
						) : (
							<GQLError
								debugMessage="Error loading movie item for EditMovieItemPage"
								error={error}
								hasData={!!movieItem}
								message="Error loading movie item data"
							/>
					</div>
				)}
						)} */}
				<div className="column">TODO: edit movie item {data.movieItemId}</div>
			</div>
		</div>
		// </Authenticated>
	);
};

EditMovieItem.whyDidYouRender = true;

// ts-prune-ignore-next
export default EditMovieItem;
