import React from 'react';
import _ from 'lodash';
import './FilmList.scss';
import ComponentBEM from '../ComponentBEM.js';
import FilmItem from "../FilmItem/FilmItem";


class FilmList extends ComponentBEM {

	componentName = 'film-list';

	render() {
		let filmList = _.get(this.props, 'filmList');
		return (
			<div className={this.block()}>
				{!filmList ?
					<div className={this.elem('empty')}>
						data about List film not found
					</div>
					:
					<div className={this.elem('list')}>
						{filmList.map((film) => (
							<div className={this.elem('item')} key={'film_' + film.id}>
								<FilmItem film={film}/>
							</div>
						))}
					</div>
				}
			</div>
		);
	}
}

export default FilmList;