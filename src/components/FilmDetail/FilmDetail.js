import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './FilmDetail.scss';
import connect from "react-redux/es/connect/connect";
import {mapStateToProps, mapStateToDispatchers} from '../../actions/reducer';
import FilmItem from "../FilmItem/FilmItem";


class FilmDetail extends ComponentBEM {

	componentName = 'film-detail';

	render() {
		if (!this.props.state.filmDetail) {
			this.props.loadListFilmByAlias(this.props.match.params.alias);
		}
		if (this.props.state.filmDetail) {
			if (!this.props.state.similarFilms) {
				this.props.loadSimilarFilmsByGenre(this.props.state.filmDetail.genre);
			}
		}

		return (
			<div className={this.block()}>
				<h1>Фильм детально</h1>
				{this.props.state.filmDetail &&
				<div className={this.elem('not-found')}>
					<div>year: {this.props.state.filmDetail.year}</div>
					<div className={'anyclass'}>title: {this.props.state.filmDetail.title}</div>
					<div>alias: {this.props.state.filmDetail.alias}</div>
					<div>genre: {this.props.state.filmDetail.genre}</div>
					<div>rating: {this.props.state.filmDetail.rating}</div>
					<div>size: {this.props.state.filmDetail.size.value} {this.props.state.filmDetail.size.unit}</div>
					<img src={this.props.state.filmDetail.img.src} title={this.props.state.filmDetail.title}
					     alt={this.props.state.filmDetail.title}/>

					<div>description: {this.props.state.filmDetail.description}</div>

				</div>
				}

				{this.props.state.similarFilms &&
				<div className={this.elem('similar')}>
					<h2 className={this.elem('similar-title')}>similar</h2>
					<div className={this.elem('similar-list')}>
						{this.props.state.similarFilms.map((film) => (
								<div className={this.elem('similar-item')}>
									<FilmItem film={film}/>
								</div>
							)
						)}
					</div>
				</div>
				}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapStateToDispatchers)(FilmDetail);