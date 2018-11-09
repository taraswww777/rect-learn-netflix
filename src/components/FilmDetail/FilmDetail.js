import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './FilmDetail.scss';
import connect from "react-redux/es/connect/connect";
import {mapStateToProps} from "../../reducers/Reducers";
import FilmDetailDispatch from "./FilmDetailDispatch";


class FilmDetail extends ComponentBEM {

	componentName = 'film-detail';

	componentDidMount() {// выывается при монтировании
		this.props.loadDetailById(this.props.match.params.id);
	}

	// componentDidUpdate() { // выывается при обновлении props
	// 	if (this.props.state.filmDetail) {
	// 		if (!this.props.state.similarFilms) {
	// 			this.props.loadSimilarFilmsByGenre(this.props.state.filmDetail.genre);
	// 		}
	// 	}
	// }

	render() {
		console.log('this.props:', this.props);
		return (

			<div className={this.block()}>

				{this.props.store.ReducerFilms.filmDetail &&
				<div className={this.elem('film-detail')}>
					<div className={this.elem('film-detail-block-img')}>
						<img className={this.elem('film-detail-img')}
						     src={this.props.store.ReducerFilms.filmDetail.detailPicture}
						     title={this.props.store.ReducerFilms.filmDetail.title}
						     alt={this.props.store.ReducerFilms.filmDetail.title}/>
					</div>
					<div className={this.elem('film-detail-info')}>
						<div className={this.elem('film-detail-info-title')}> {this.props.store.ReducerFilms.filmDetail.title}

							<span
								className={this.elem('film-detail-info-rating')}>{this.props.store.ReducerFilms.filmDetail.rating}</span>
						</div>
						<div
							className={this.elem('film-detail-info-author')}>{this.props.store.ReducerFilms.filmDetail.author}</div>
						<div className={this.elem('film-detail-info-stat')}>


							<span
								className={this.elem('film-detail-info-year')}>{this.props.store.ReducerFilms.filmDetail.year}</span>
							{this.props.store.ReducerFilms.filmDetail.size &&
							<span className={this.elem('film-detail-info-size')}>
								{this.props.store.ReducerFilms.filmDetail.size.value}
								{this.props.store.ReducerFilms.filmDetail.size.unit}
								</span>
							}
							<span
								className={this.elem('film-detail-info-genre')}>{this.props.store.ReducerFilms.filmDetail.genre}</span>
						</div>

						<div
							className={this.elem('film-detail-info-description')}>{this.props.store.ReducerFilms.filmDetail.detailText}</div>
					</div>

				</div>
				}

				{/*{this.props.state.similarFilms &&*/}
				{/*<div className={this.elem('similar')}>*/}
				{/*<div className={this.elem('container')}>*/}
				{/*<div className={this.elem('row')}>*/}
				{/*<h2 className={this.elem('similar-title')}>similar films</h2>*/}

				{/*<div className={this.elem('similar-list')}>*/}
				{/*{this.props.state.similarFilms.map((film) => (*/}
				{/*<div className={this.elem('similar-item')} key={'film_' + film.id}>*/}
				{/*<FilmItem film={film}/>*/}
				{/*</div>*/}
				{/*)*/}
				{/*)}*/}
				{/*</div>*/}
				{/*</div>*/}
				{/*</div>*/}
				{/*</div>*/}
				{/*}*/}
			</div>
		);
	}
}

export default connect(mapStateToProps, FilmDetailDispatch)(FilmDetail);