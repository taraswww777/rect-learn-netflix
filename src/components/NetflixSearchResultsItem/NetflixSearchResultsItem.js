import React from 'react';
import './NetflixSearchResultsItem.scss';
import ComponentBEM from '../ComponentBEM.js';

class NetflixSearchResultsItem extends ComponentBEM {

	componentName = 'netflix-search-results-item';

	render() {
		return (
			!this.props.film ?
				<div className={this.block()}>
					<div>
						data about film not found
					</div>
				</div>
				:

				<div className={this.block()}>
					<div key={this.props.film.id.toString()}>
						<img
							className={this.elem('cover')}
							src={this.props.film.img.src}
							alt={this.props.film.name}
							title={this.props.film.name}/>

						<div className={this.elem('name')}>{this.props.film.name}</div>
						<div className={this.elem('genre')}>{this.props.film.genre}</div>
						<div className={this.elem('year')}>{this.props.film.year}</div>
					</div>
				</div>
		)
			;
	}
}

export default NetflixSearchResultsItem;