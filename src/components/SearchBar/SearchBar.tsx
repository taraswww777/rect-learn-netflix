import React, {Component} from 'react';
import {mapStateToProps} from '../../reducers';
import SearchField from '../SearchField/SearchField';
import SearchBarDispatch from './SearchBarDispatch';
import SearchByButton from '../SearchByButton/SearchByButton';
import SearchOkButton from '../SearchOkButton/SearchOkButton';
import SearchFoundCount from '../SearchFoundCount/SearchFoundCount';
import SortBy from '../SortBy/SortBy';
import {
	BSearchBar,
	BSearchBarSearch,
	BSearchBarSearchBy,
	BSearchBarSearchByBoxBtn,
	BSearchBarSearchByBoxBtnRun,
	BSearchBarSearchByTitle,
	BSearchBarSearchField,
	BSearchBarSearchTitle,
	BSearchBarStatus,
	BSearchBarStatusCount,
	BSearchBarStatusSort,
	BSearchBarStatusSortBtn,
	BSearchBarStatusSortTitle
} from "./SearchBarStyled";
import {SearchBarProps} from "./SearchBarInterfaces";
import {connect} from "react-redux";

class SearchBar extends Component <SearchBarProps> {

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
							onSearchFilm={this.props.onSearchFilm}
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

