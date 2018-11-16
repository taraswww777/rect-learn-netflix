import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import connect from 'react-redux/es/connect/connect';
import { mapStateToProps } from '../../reducers/index';
import SearchField from '../SearchField/SearchField';
import SearchBarDispatch from './SearchBarDispatch';
import SearchByButton from '../SearchByButton/SearchByButton';
import SearchOkButton from '../SearchOkButton/SearchOkButton';
import SearchFoundCount from '../SearchFoundCount/SearchFoundCount';
import SortBy from '../SortBy/SortBy';
import _ from 'lodash';
import styled from 'styled-components';
import { Row } from '../../rebass-grid-custom';


const BSearchBar = styled.div``;

const BSearchBarSearch = styled.div``;
const BSearchBarSearchTitle = styled.div`
	color:#fff;
	font-weight: bold;
	margin-bottom: 10px;
	text-transform: uppercase;
	font-size: 1.5rem;
`;
const BSearchBarSearchField = styled.div``;

const BSearchBarSearchBy = styled.div`
	display: flex;
	align-items: center;
`;
const BSearchBarSearchByTitle = styled.div`
	color:#fff;
	font-weight: bold;
	text-transform: uppercase;
`;
const BSearchBarSearchByBoxBtn = styled.div``;
const BSearchBarSearchByBoxBtnRun = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: flex-end;
`;

const BSearchBarStatus = styled.div`
	display: flex;
	align-items: center;
`;
const BSearchBarStatusCount = styled.div`

`;
const BSearchBarStatusSort = styled.div`
	align-items: center;
	display: flex;
	justify-content: flex-end;
	flex-grow: 1;
`;
const BSearchBarStatusSortTitle = styled.div``;
const BSearchBarStatusSortBtn = styled.div``;

class SearchBar extends Component {

	render() {
		let showStatusBar = this.props.store.ReducerFilms.searchResults.length > 0;
		return (
			<BSearchBar>

				<BSearchBarSearch>
					<BSearchBarSearchTitle>Find your movie</BSearchBarSearchTitle>
					<BSearchBarSearchField>
						<SearchField
							onSearchFilm={this.props.onSearchFilm}
							onSetSearchQuery={this.props.onSetSearchQuery}
						/>
					</BSearchBarSearchField>
				</BSearchBarSearch>

				<BSearchBarSearchBy>
					<BSearchBarSearchByTitle>search by</BSearchBarSearchByTitle>
					<BSearchBarSearchByBoxBtn>
						<SearchByButton
							searchByTitle={'title'}
							searchByCode={'title'}
							searchByCurrent={this.props.store.ReducerFilms.searchBy}
							onSetSearchBy={this.props.onSetSearchBy}
						/>
					</BSearchBarSearchByBoxBtn>
					<BSearchBarSearchByBoxBtn>
						<SearchByButton
							searchByTitle={'genre'}
							searchByCode={'genre'}
							searchByCurrent={this.props.store.ReducerFilms.searchBy}
							onSetSearchBy={this.props.onSetSearchBy}
						/>
					</BSearchBarSearchByBoxBtn>

					<BSearchBarSearchByBoxBtnRun>
						<SearchOkButton
							searchFilm={this.props.onSearchFilm}
						/>
					</BSearchBarSearchByBoxBtnRun>
				</BSearchBarSearchBy>

				<BSearchBarStatus>
					{showStatusBar &&
					<BSearchBarStatusCount>
						<SearchFoundCount countResults={this.props.store.ReducerFilms.searchResults.length}/>
					</BSearchBarStatusCount>
					}
					{showStatusBar &&
					<BSearchBarStatusSort>
						<BSearchBarStatusSortTitle>Sort by</BSearchBarStatusSortTitle>
						<BSearchBarStatusSortBtn>
							<SortBy
								sortByTitle={'release date'}
								sortByCode={'date'}
								sortByCurrent={this.props.store.ReducerFilms.sortBy}
								onSetSortBy={this.props.onSetSortBy}
							/>
						</BSearchBarStatusSortBtn>
						<BSearchBarStatusSortBtn>
							<SortBy
								sortByTitle={'rating'}
								sortByCode={'rating'}
								sortByCurrent={this.props.store.ReducerFilms.sortBy}
								onSetSortBy={this.props.onSetSortBy}
							/>
						</BSearchBarStatusSortBtn>

					</BSearchBarStatusSort>
					}
				</BSearchBarStatus>

			</BSearchBar>
		);
	}
}

export default connect(mapStateToProps, SearchBarDispatch)(SearchBar);
