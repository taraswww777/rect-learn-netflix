import React from 'react';
import './NetflixSearchResults.scss';
import ComponentBEM from '../ComponentBEM.js';
import NetflixSearchResultsItem from "../NetflixSearchResultsItem/NetflixSearchResultsItem";

class NetflixSearchResults extends ComponentBEM {

	componentName = 'netflix-search-results';

	render() {
		return (
			<div className={this.block()}>
				{!this.props.listFilms ?
					<div className={this.elem('result-empty')}>
						No films found
					</div>
					:
					<div className={this.elem('result-list')}>
						{this.props.listFilms.map((film) =>
							<div className={this.elem('result-list-item')}>
								<NetflixSearchResultsItem film={film}/>
							</div>
						)}
					</div>
				}
			</div>
		);
	}
}

export default NetflixSearchResults;