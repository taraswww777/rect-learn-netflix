import React from 'react';
import ComponentBEM from './components/ComponentBEM';
import './App.scss';
import demoData from './demoData';

import NetflixSearchField from './components/NetflixSearchField/NetflixSearchField';
import SearchResults from "./components/NetflixSearchResults/NetflixSearchResults";
import SortBy from "./components/SortBy/SortBy";
import SearchFoundCount from "./components/SearchFoundCount/SearchFoundCount";
import SearchByButton from "./components/SearchByButton/SearchByButton";
import SearchOkButton from "./components/SearchOkButton/SearchOkButton";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

class App extends ComponentBEM {
	componentName = 'app';

	state = {
		listFilms: demoData.listFilms,
		searchQuery: null,
		searchBy: 'title',
		sortBy: 'date',
		searchResults: []
	};

	searchFilm() {
		if (!this.state.searchQuery
			|| this.state.searchQuery.length <= 0
			|| !this.state.listFilms) {
			this.state.searchResults = [];
		} else {

			switch (this.state.searchBy.toLowerCase()) {
				case 'genre':
					this.state.searchResults = this.filterByGenre(this.state.listFilms);
					break;
				case 'title':
					this.state.searchResults = this.filterByTitle(this.state.listFilms);
					break;
				default:
					this.state.searchResults = this.filterByTitle(this.state.listFilms);
					break;
			}
		}

		this.sortSearchResults();

		this.setState(this.state);
	}

	sortSearchResults() {
		if (!this.state.searchResults) {
			return;
		}
		console.log('this.state.sortBy: ', this.state.sortBy);

		switch (this.state.sortBy) {
			case'rating':
				this.state.searchResults.sort(App.compareFilmRating);
				break;
			case'date':
				this.state.searchResults.sort(App.compareFilmDate);
				break;
			case'title':
				this.state.searchResults.sort(App.compareFilmTitle);
				break;
			default:
				this.state.searchResults.sort(App.compareFilmRating);
				break;
		}
	}


	static compareFilmRating(filmA, filmB) {
		return filmA.rating - filmB.rating;
	}

	static compareFilmDate(filmA, filmB) {
		return filmA.year - filmB.year;
	}

	static compareFilmTitle(filmA, filmB) {
		if (filmA.title < filmB.title) {
			return -1;
		} else if (filmA.title > filmB.title) {
			return 1;
		}
		return 0;
	}

	filterByTitle(listFilms = []) {
		let resultListSearch = [];
		listFilms.map((film) => {
			if (film.title.toLowerCase().indexOf(this.state.searchQuery) > -1) {
				resultListSearch.push(film);
			}
		});

		return resultListSearch;
	}

	filterByGenre(listFilms = []) {
		let resultListSearch = [];
		listFilms.map((film) => {
			if (film.genre.toLowerCase().indexOf(this.state.searchQuery) > -1) {
				resultListSearch.push(film);
			}
		});

		return resultListSearch;
	}

	setSortBy(sortBy = 'rating') {
		return () => {
			if (sortBy && sortBy.length > 0) {
				this.state.sortBy = sortBy;
			}

			this.setState(this.state);

			this.searchFilm();
		}
	}

	setSearchBy(searchBy = 'title') {
		return () => {
			if (searchBy && searchBy.length > 0) {
				this.state.searchBy = searchBy;
			}

			this.setState(this.state);
			this.searchFilm();
		}
	}

	setSearchQuery(searchQuery) {
		this.state.searchQuery = searchQuery;
		this.setState(this.state);
	}


	render() {
		return (
			<div className={this.block()}>
				<header className={this.elem('header')}>
					<div className={this.elem('container')}>
						<div className={this.elem('row')}>
							<div className={this.elem('header-title')}>netflix roulette</div>

							<div className={this.elem('search-area')}>
								<div className={this.elem('search-area-title')}>Find your movie</div>
								<div className={this.elem('search-area-field')}>
									<ErrorBoundary>
										<NetflixSearchField
											searchFilm={this.searchFilm.bind(this)}
											setSearchQuery={this.setSearchQuery.bind(this)}/>
									</ErrorBoundary>
								</div>
							</div>

							<div className={this.elem('search-by')}>
								<div className={this.elem('search-by-title')}>search by</div>
								<ErrorBoundary>
									<div className={this.elem('search-by-btn')}>
										<SearchByButton
											searchByTitle={'title'}
											searchByCurrent={this.state.searchBy}
											searchByCode={'title'}
											setSearchBy={this.setSearchBy.bind(this)}/>
									</div>
									<div className={this.elem('search-by-btn')}>
										<SearchByButton
											searchByTitle={'genre'}
											searchByCurrent={this.state.searchBy}
											searchByCode={'genre'}
											setSearchBy={this.setSearchBy.bind(this)}/>
									</div>
									<div className={this.elem('search-run')}>
										<SearchOkButton
											searchFilm={this.searchFilm.bind(this)}/>
									</div>
								</ErrorBoundary>
							</div>

						</div>
					</div>
				</header>

				<aside className={this.elem('status-bar')}>
					<div className={this.elem('container')}>
						<div className={this.elem('row')}>

							<div className={this.elem('status-bar-found')}>
								<ErrorBoundary>
									<SearchFoundCount countResults={this.state.searchResults.length}/>
								</ErrorBoundary>
							</div>
							<div className={this.elem('status-bar-sort')}>
								<ErrorBoundary>
									Sort by
									<div className={this.elem('status-bar-sort-btn')}>
										<SortBy
											sortByTitle={'release date'}
											sortByCode={'date'}
											sortByCurrent={this.state.sortBy}
											setSortBy={this.setSortBy.bind(this)}/>
									</div>
									<div className={this.elem('status-bar-sort-btn')}>
										<SortBy
											sortByTitle={'rating'}
											sortByCode={'rating'}
											sortByCurrent={this.state.sortBy}
											setSortBy={this.setSortBy.bind(this)}/>
									</div>

								</ErrorBoundary>
							</div>

						</div>
					</div>
				</aside>

				<main className={this.elem('main')}>
					<div className={this.elem('container')}>
						<div className={this.elem('row')}>
							<ErrorBoundary>
								<SearchResults listFilms={this.state.searchResults}/>
							</ErrorBoundary>
						</div>
					</div>
				</main>

				<footer className={this.elem('footer')}>
					<div className={this.elem('container')}>
						<div className={this.elem('row')}>
							<div className={this.elem('footer-title')}>netflix roulette</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default App;
