import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import _ from "lodash";
import './FilmDetail.scss';
import connect from "react-redux/es/connect/connect";
import {mapStateToProps} from "../../reducers/index";
import FilmDetailDispatch from "./FilmDetailDispatch";
import FilmList from "../FilmList/FilmList";
import {matchPath, withRouter} from "react-router";

// const match = matchPath("/users/123", {
// 	path: "/users/:id",
// 	exact: true,
// 	strict: false
// });

class FilmDetail extends ComponentBEM {

	componentName = 'film-detail';

	componentWillMount() {
		this.props.loadDetailById(this.props.match.params.id);
	}


	// componentWillUpdate() {
	// 	// TODO: Вот тут не работающий костыль, я пока хз как правильно
	// 	let match = matchPath(window.location.pathname, {
	// 		path: "/film/:id"
	// 	});
	// 	let filmId = _.get(this.props, 'store.ReducerFilms.filmId');
	//
	// 	if (!match) return;
	//
	// 	if (match.params.id !== filmId) {
	// 		this.props.loadDetailById(match.params.id);
	// 	}
	//
	// 	// console.log('componentWillUpdate render this.props.match', this.props.match);
	// 	// console.log('componentWillUpdate render this.props', this.props);
	// 	// console.log('componentWillUpdate render window.location.pathname', window.location.pathname);
	// 	// console.log('componentWillUpdate render match', match);
	// }

	render() {

		let filmDetail = _.get(this.props, 'store.ReducerFilms.filmDetail');
		let similarFilms = _.get(this.props, 'store.ReducerFilms.similarFilms');

		return (
			<div className={this.block()}>

				{filmDetail &&
				<div className={this.elem('film-detail')}>
					<div className={this.elem('container')}>
						<div className={this.elem('row')}>
							<div className={this.elem('film-detail-block-img')}>
								<img
									className={this.elem('film-detail-img')}
									src={filmDetail.detailPicture}
									title={filmDetail.title}
									alt={filmDetail.title}/>
							</div>
							<div className={this.elem('film-detail-info')}>
								<div className={this.elem('film-detail-info-title')}> {filmDetail.title}

									<span className={this.elem('film-detail-info-rating')}>{filmDetail.rating}</span>
								</div>
								<div
									className={this.elem('film-detail-info-author')}>{filmDetail.author}</div>
								<div className={this.elem('film-detail-info-stat')}>


							<span
								className={this.elem('film-detail-info-year')}>{filmDetail.year}</span>
									{filmDetail.size &&
									<span className={this.elem('film-detail-info-size')}>
								{filmDetail.size.value}
										{filmDetail.size.unit}
								</span>
									}
									<span
										className={this.elem('film-detail-info-genre')}>{filmDetail.genre}</span>
								</div>

								<div
									className={this.elem('film-detail-info-description')}>{filmDetail.detailText}</div>
							</div>
						</div>
					</div>
				</div>
				}

				{similarFilms &&
				<div className={this.elem('container')}>
					<div className={this.elem('row')}>
						<div className={this.elem('similar')}>
							<h2 className={this.elem('similar-title')}>similar films</h2>


							<div className={this.elem('similar-list')}>
								<FilmList filmList={similarFilms}/>
							</div>
						</div>
					</div>
				</div>
				}
			</div>
		);
	}
}

export default connect(mapStateToProps, FilmDetailDispatch)(withRouter(FilmDetail));