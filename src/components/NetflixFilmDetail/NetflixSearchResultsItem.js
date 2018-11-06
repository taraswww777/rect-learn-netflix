import React from 'react';
import ComponentBEM from '../ComponentBEM.js';

class NetflixSearchResultsItem extends ComponentBEM {

	componentName = 'netflix-search-results-item';

	render() {
		return (
			<div className={this.block()}>
				{ !this.props.listFilms ? <div className={this.elem('result-empty')}>
					No films found
				</div>
					:
					<div className={this.elem('result-list')}>
						{this.props.listFilms.map((film)=><div>
							<div><span>name:</span> {film.name}</div>
							<div><span>genre:</span> {film.genre}</div>
							<img src={film.img.src} alt={film.name} title={film.name}/>
						</div>)
						}
					</div>
				}
			</div>
		);
	}
}

export default NetflixSearchResultsItem;