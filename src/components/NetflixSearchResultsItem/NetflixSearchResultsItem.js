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
					<img
						className={this.elem('cover')}
						src={this.props.film.img.src}
						alt={this.props.film.title}
						title={this.props.film.title}/>

					<div className={this.elem('title')}>{this.props.film.title}</div>
					<div className={this.elem('genre')}>{this.props.film.genre}</div>
					<div className={this.elem('year')}>{this.props.film.year}</div>
					<div className={this.elem('rating')}>{this.props.film.rating}</div>
				</div>
		)
			;
	}
}

export default NetflixSearchResultsItem;