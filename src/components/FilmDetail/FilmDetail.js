import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import _ from "lodash";
import './FilmDetail.scss';
import connect from "react-redux/es/connect/connect";
import {mapStateToProps} from "../../reducers/index";
import FilmDetailDispatch from "./FilmDetailDispatch";
import FilmList from "../FilmList/FilmList";
import {matchPath, withRouter} from "react-router";
import FilmDetailInfo from "../FilmDetailInfo/FilmDetailInfo";
import Loader from "../Loader/Loader";

// const match = matchPath("/users/123", {
// 	path: "/users/:id",
// 	exact: true,
// 	strict: false
// });

class FilmDetail extends ComponentBEM {

	componentName = 'film-detail';

	componentWillMount() {
		console.log('this.props.match.params.id', this.props.match.params.id);
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

		let LOAD_FILM_DETAIL_STATUS = _.get(this.props, 'store.ReducerFilms.LOAD_FILM_DETAIL_STATUS');
		let LOAD_FILM_SIMILAR_STATUS = _.get(this.props, 'store.ReducerFilms.LOAD_FILM_SIMILAR_STATUS');
		return (
			<div className={this.block()}>

				<div className={this.elem('container')}>
					<div className={this.elem('row')}>
						<div className={this.elem('col-12')}>
							{LOAD_FILM_DETAIL_STATUS === false && <Loader/>}
							{LOAD_FILM_DETAIL_STATUS === true && filmDetail && <FilmDetailInfo filmDetail={filmDetail}/>}
							{LOAD_FILM_DETAIL_STATUS === true && !filmDetail && <div>fail load film detail</div>}
						</div>

						{LOAD_FILM_SIMILAR_STATUS === false &&
						<div className={this.elem('col-12')}>
							<Loader/>
						</div>
						}

						{LOAD_FILM_SIMILAR_STATUS === true && similarFilms &&
						<div className={this.elem('col-12')}>

							<h2 className={this.elem('similar-title')}>similar films</h2>
							< div className={this.elem('similar-list')}>
								<FilmList filmList={similarFilms}/>
							</div>
						</div>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, FilmDetailDispatch)(withRouter(FilmDetail));