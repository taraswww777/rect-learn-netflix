import React from 'react';
import ComponentBEM from './components/ComponentBEM';
import './App.scss';
import demoData from './demoData';

import NetflixSearchField from './components/NetflixSearchField/NetflixSearchField';
import NetflixSearchResults from "./components/NetflixSearchResults/NetflixSearchResults";

class App extends ComponentBEM {
	componentName = 'app';

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
									<NetflixSearchField/>
								</div>
							</div>

							<div className={this.elem('search-by')}>
								<div className={this.elem('search-by-title')}>search by</div>
								<div className={this.elem('search-by-selectors')}>
									{/*<SearchBy/>*/}
								</div>
								<div className={this.elem('search-by-run')}>
									{/*<SearchButton/>*/}
								</div>
							</div>
						</div>
					</div>
				</header>
				<main className={this.elem('main')}>
					<div className={this.elem('container')}>
						<div className={this.elem('row')}>
							<NetflixSearchResults listFilms={demoData.listFilms}/>
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
